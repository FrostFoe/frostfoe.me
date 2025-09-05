// scripts/convert-images-to-webp.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(process.cwd(), 'public/images');

const convertImages = async (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      await convertImages(filePath); // Recurse into subdirectories
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
      
      // Check if .webp version already exists and is newer
      if (fs.existsSync(webpPath)) {
        const webpStat = fs.statSync(webpPath);
        if (webpStat.mtime > stat.mtime) {
          console.log(`Skipping ${file}, .webp is up to date.`);
          continue;
        }
      }

      console.log(`Converting ${file} to WebP...`);
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(webpPath);
    }
  }
};

(async () => {
  console.log('Starting image conversion to WebP...');
  await convertImages(imagesDir);
  console.log('Image conversion complete.');
})();
