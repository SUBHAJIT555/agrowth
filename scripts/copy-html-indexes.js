const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const publicDir = path.join(__dirname, "..", "public");

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

const htaccessSrc = path.join(publicDir, ".htaccess");
const htaccessDest = path.join(outDir, ".htaccess");
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log("Copied .htaccess into out/");
}

const apiEnv = path.join(outDir, "api", ".env");
if (fs.existsSync(apiEnv)) {
  fs.unlinkSync(apiEnv);
  console.log("Removed api/.env from out/ (upload .env on server only)");
}

const apiData = path.join(outDir, "api", "data");
if (fs.existsSync(apiData)) {
  for (const name of fs.readdirSync(apiData)) {
    if (name.endsWith(".json")) {
      fs.unlinkSync(path.join(apiData, name));
      console.log("Removed api/data/" + name + " from out/");
    }
  }
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
      continue;
    }

    if (!name.endsWith(".html") || name === "index.html" || name === "404.html") {
      continue;
    }

    const folder = path.join(dir, name.slice(0, -5));
    if (!fs.existsSync(folder) || !fs.statSync(folder).isDirectory()) {
      continue;
    }

    const dest = path.join(folder, "index.html");
    fs.copyFileSync(full, dest);
    console.log("Wrote", path.relative(outDir, dest));
  }
}

walk(outDir);
