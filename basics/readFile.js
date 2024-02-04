const fs = require('fs');

fs.readFile("./files/edit.txt", 'utf-8', (err, data) => {
  console.log(data)
})

console.log("Reading file !!")