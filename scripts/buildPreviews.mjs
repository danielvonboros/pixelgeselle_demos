import { execFile, spawn } from "node:child_process";
import { mkdir, mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const run = promisify(execFile);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "previews");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 4173;
const width = 1280;
const height = 960;
const demoBar = 48;

const server = spawn("yarn", ["vite", "preview", "--port", String(port), "--strictPort"], { cwd: root, stdio: "ignore" });

const waitForServer = async () => {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      await fetch(`http://localhost:${port}/`);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  throw new Error("vite preview did not start, run yarn build first");
};

const work = await mkdtemp(join(tmpdir(), "previews-"));

try {
  await waitForServer();
  await mkdir(out, { recursive: true });

  for (const slug of await readdir(join(root, "sites"))) {
    const raw = join(work, `${slug}.png`);
    const cropped = join(work, `${slug}-cropped.png`);
    await run(chrome, [
      "--headless=new",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--window-size=${width},${height + 2 * demoBar}`,
      "--virtual-time-budget=10000",
      `--screenshot=${raw}`,
      `http://localhost:${port}/${slug}/`,
    ]);
    await run("sips", ["--cropToHeightWidth", String(height), String(width), raw, "--out", cropped]);
    await run("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "82", "-Z", "1200", cropped, "--out", join(out, `${slug}.jpg`)]);
    console.log(`  done  previews/${slug}.jpg`);
  }
} finally {
  server.kill();
  await rm(work, { recursive: true, force: true });
}
