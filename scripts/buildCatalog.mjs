import { copyFile, mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const baseUrl = process.env.DEMOS_URL ?? "https://demos.pixelgesellen.de";

const exists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

const demos = [];

for (const slug of await readdir(join(root, "sites"))) {
  const info = JSON.parse(await readFile(join(root, "sites", slug, "src", "demo.json"), "utf8"));
  const photo = join(root, "sites", slug, "src", "assets", "photos", `${info.thumbnail}-800.jpg`);
  let thumbnail = null;

  if (await exists(photo)) {
    await mkdir(join(dist, "catalog"), { recursive: true });
    await copyFile(photo, join(dist, "catalog", `${slug}.jpg`));
    thumbnail = `${baseUrl}/catalog/${slug}.jpg`;
  }

  demos.push({ ...info, url: `${baseUrl}/${slug}/`, thumbnail });
}

demos.sort((a, b) => a.order - b.order);
await mkdir(dist, { recursive: true });
await writeFile(join(dist, "catalog.json"), `${JSON.stringify({ demos }, null, 2)}\n`);
await copyFile(join(root, "deploy", ".htaccess"), join(dist, ".htaccess"));
console.log(`catalog.json with ${demos.length} demos`);
