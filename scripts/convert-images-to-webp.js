// scripts/convert-images-to-webp.js
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(process.cwd(), 'public/images');

// Helper function to format file sizes
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const convertImages = async (dir) => {
  const files = await fs.readdir(dir);
  let totalOriginalSize = 0;
  let totalConvertedSize = 0;

  const conversionPromises = files.map(async (file) => {
    const filePath = path.join(dir, file);
    const stat = await fs.lstat(filePath);

    if (stat.isDirectory()) {
      // Recurse into subdirectories and aggregate stats
      const subDirStats = await convertImages(filePath);
      totalOriginalSize += subDirStats.totalOriginalSize;
      totalConvertedSize += subDirStats.totalConvertedSize;
      return; // Skip file processing for directories
    }
    
    if (/\.(jpe?g|png)$/i.test(file)) {
      const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
      
      try {
        const webpStat = await fs.stat(webpPath);
        if (webpStat.mtime > stat.mtime) {
          // console.log(`Skipping ${file}, .webp is up to date.`);
          return;
        }
      } catch (e) {
        // .webp file doesn't exist, continue to conversion
      }
      
      const originalSize = stat.size;
      totalOriginalSize += originalSize;

      try {
        const info = await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        const convertedSize = info.size;
        totalConvertedSize += convertedSize;
        const savings = originalSize - convertedSize;
        const savingsPercent = ((savings / originalSize) * 100).toFixed(2);

        console.log(
          `Converted ${file}: ${formatBytes(originalSize)} -> ${formatBytes(
            convertedSize
          )}. Saved ${formatBytes(savings)} (${savingsPercent}%)`
        );
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  });

  await Promise.all(conversionPromises);
  
  return { totalOriginalSize, totalConvertedSize };
};

(async () => {
  console.log('Starting fast image conversion to WebP...');
  const { totalOriginalSize, totalConvertedSize } = await convertImages(imagesDir);
  
  if (totalOriginalSize > 0 && totalConvertedSize > 0) {
    const totalSavings = totalOriginalSize - totalConvertedSize;
    const totalSavingsPercent = ((totalSavings / totalOriginalSize) * 100).toFixed(2);
    console.log('\n--- Image Conversion Summary ---');
    console.log(`Total original size: ${formatBytes(totalOriginalSize)}`);
    console.log(`Total WebP size:     ${formatBytes(totalConvertedSize)}`);
    console.log(`Total savings:       ${formatBytes(totalSavings)} (${totalSavingsPercent}%)`);
    console.log('------------------------------');
  } else {
    console.log('No new images to convert.');
  }
  
  console.log('Image conversion complete.');
})();