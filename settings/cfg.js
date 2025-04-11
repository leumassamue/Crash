global.owner = [
  "2347038003702", //ganti nomor owner
  "2347038003702" //nomor owner kedua kalo ada
]
global.nomorbot = '2347038003702'
global.urlfoto = 'https://files.catbox.moe/9c8yum.jpeg'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})