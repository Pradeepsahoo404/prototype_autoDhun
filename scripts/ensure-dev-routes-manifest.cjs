"use strict";

/**
 * Webpack dev (`next dev --webpack`) can request `.next/dev/routes-manifest.json`
 * before it exists. Seed it from the production manifest (created by `next build`).
 * After a full `.next` wipe, runs one production build so the manifest exists.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const prod = path.join(root, ".next", "routes-manifest.json");
const devDir = path.join(root, ".next", "dev");
const dev = path.join(devDir, "routes-manifest.json");

if (fs.existsSync(dev)) {
  process.exit(0);
}

fs.mkdirSync(devDir, { recursive: true });

if (fs.existsSync(prod)) {
  fs.copyFileSync(prod, dev);
  console.log("[dev] Seeded .next/dev/routes-manifest.json from .next/routes-manifest.json");
  process.exit(0);
}

console.log("[dev] No routes manifest yet — running `npm run build` once to generate it…");
try {
  execSync("npm run build", { cwd: root, stdio: "inherit", shell: true });
} catch {
  process.exit(1);
}

if (!fs.existsSync(prod)) {
  console.error("[dev] Build finished but .next/routes-manifest.json is still missing.");
  process.exit(1);
}

fs.copyFileSync(prod, dev);
console.log("[dev] Seeded .next/dev/routes-manifest.json");
