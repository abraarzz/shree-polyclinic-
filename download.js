import fs from 'fs';
import path from 'path';

async function downloadImage(url, filename) {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const filePath = path.join(publicDir, filename);
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image. Status: ${response.status} ${response.statusText}`);
  }
  
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

async function main() {
  try {
    console.log('Downloading logo...');
    await downloadImage('https://photos.fife.usercontent.google.com/pw/AP1GczOfp2rhtCNAkUYcy4K66teljCVDUUaLsG3VHLExrZTTN4GSYAyYhjE=w758-h768-s-no-gm?authuser=3', 'logo.png');
    console.log('Logo downloaded successfully.');
    
    console.log('Downloading background...');
    await downloadImage('https://photos.fife.usercontent.google.com/pw/AP1GczNjCTMbKWQxOmlsa3eK2lVJD6JG__2topzkH3twGiyvZ6ZbCRwvw0EM=w1458-h2048-s-no-gm?authuser=3', 'hero-bg.jpg');
    console.log('Background downloaded successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
