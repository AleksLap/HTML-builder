const path = require('path');
const fs = require('fs');
const readline = require('readline');

console.log('Greetings! Type somethings in console and press ENTER to save it in txt file.\nType exit or press Ctrl + c to exit')

let writeableStream = fs.createWriteStream(path.join(__dirname, 'console.txt'));
let rl = readline.createInterface(process.stdin);

rl.on('line', (data) => {
  if(data.trim() == 'exit') {
    process.exit();
  } else {
    writeableStream.write(`${data.trim()}\n`)
  }
});

process.on('exit', () => {
  console.log('Your text saved in console.txt');
})

process.on('SIGINT', () => {
  process.exit();
});