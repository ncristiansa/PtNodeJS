var fs = require('fs');

var contenido = fs.readFileSync(process.argv[2]);
var lines = contenido.toString().split('\n').length -1;
console.log(lines);
