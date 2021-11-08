const path = require('path');
const fs = require('fs');

let txtPath = path.join(__dirname, 'text.txt');
let textContent = fs.createReadStream(txtPath, 'utf-8');

textContent.on('data',  (data) => {
  console.log(data.trim());
});