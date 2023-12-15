const fs = require('fs')

const fileContent = 'welcome to FS module, it is built in module'
fs.writeFileSync('writeMe.txt',fileContent);
var fileReadContent = fs.readFileSync('writeMe.txt')
console.log(fileReadContent)
fileReadContent = fs.readFileSync('writeMe.txt', 'utf8')
console.log(fileReadContent)
//console.log(fs.)