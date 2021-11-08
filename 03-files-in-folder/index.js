const path = require('path');
const fs = require('fs').promises;

let folderPath = path.join(__dirname, 'secret-folder');

async function getFilesInfo() {
  try {
    const files = await fs.readdir(folderPath, { withFileTypes: true });
    
    for (const file of files)
      if(file.isFile()) {
        let filePath = path.join(folderPath, file.name);
        let currentFile = await fs.stat(filePath)
        console.log(`${getFileName(file.name)} - ${path.extname(filePath)} - ${currentFile.size}b`);
      }
  } catch (err) {
    console.error(err);
  }
}

function getFileName(file) {
  return file.split('.')[0]; 
}

getFilesInfo();