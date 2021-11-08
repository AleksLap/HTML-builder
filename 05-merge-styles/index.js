const path = require('path');
const fsp = require('fs').promises;
const fs = require('fs');

async function joinCssFiles() {
  try {
    const stylesFolder = path.join(__dirname, 'styles');
    const destination = path.join(__dirname, 'project-dist', 'bundle.css');

    fs.writeFile(destination, '', (err) => {
      if(err) {
        console.error(err);
      }
    })

    const files = await fsp.readdir(stylesFolder, { withFileTypes: true });

    for (const file of files) {
      
      if(file.isFile()) {
        let filePath = path.join(stylesFolder, file.name);

        if(path.extname(filePath) === '.css') {
          let data = '';
          let stream = fs.createReadStream(path.join(stylesFolder, file.name));
          stream.on('data', (chunk) => {
            data += chunk;
          });
          stream.on('end', () => {
            fs.appendFile(destination, data, (err) => {
              if(err) {
                rejects(err);
              }
            })
          })
        }
      }
    }
  } catch(err) {
    console.error(err);
  }
}

joinCssFiles();