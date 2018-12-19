var fs = require('fs');
var fichero = process.argv[2];

fs.readFile(fichero, function (error, contenido){
	var lines = contenido.toString().split('\n').length -1
	console.log(lines);
})
