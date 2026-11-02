import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { photoUrl, photoWidths } from "./photoUrl.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const force = args.includes("--force");
const onlySites = args.filter((arg) => !arg.startsWith("--"));

const exists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

const download = async (url, target) => {
  const response = await fetch(url);
  const type = response.headers.get("content-type") ?? "";
  if (!response.ok || !type.startsWith("image/")) {
    throw new Error(`${response.status} ${type}`);
  }
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
};

const manifest = JSON.parse(await readFile(join(root, "photos.json"), "utf8"));
let failed = 0;

for (const [site, photos] of Object.entries(manifest)) {
  if (onlySites.length && !onlySites.includes(site)) continue;
  const folder = join(root, "sites", site, "src", "assets", "photos");
  await mkdir(folder, { recursive: true });

  for (const photo of photos) {
    for (const width of photoWidths) {
      const file = `${photo.name}-${width}.jpg`;
      const target = join(folder, file);
      if (!force && (await exists(target))) {
        console.log(`  skip  ${site}/${file}`);
        continue;
      }
      try {
        await download(photoUrl(photo, width), target);
        console.log(`  done  ${site}/${file}`);
      } catch (error) {
        failed += 1;
        console.error(`  fail  ${site}/${file}  ${error.message}`);
      }
    }
  }
}

if (failed) {
  console.error(`\n${failed} photo(s) could not be downloaded.`);
  process.exit(1);
}
