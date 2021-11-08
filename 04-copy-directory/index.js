const { join } = require('path');
const fs = require('fs').promises;

let folderPath = join(__dirname, 'files');
let copyPath = join(__dirname, 'files-copy')

async function copyFiles() {
  await fs.mkdir(copyPath, { recursive: true });

  try {
    const files = await fs.readdir(folderPath);
    files.forEach (file => {
      fs.copyFile(join(folderPath, file), join(copyPath, file));
    });
  } catch (err) {
    console.error(err);
  }
}

copyFiles();