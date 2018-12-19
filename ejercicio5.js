var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = '.' + process.argv[3];
var file =  "";

fs. readdir(dir, function (error, dato){
	dato.forEach(function (fichero){
		if(path.extname(fichero)===extension){
			console.log(fichero);
		}
	});
});
