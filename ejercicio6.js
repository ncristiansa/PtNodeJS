
filtrado(process.argv[2], process.argv[3], function (error, dato){
	dato.forEach(function (fichero){
		console.log(fichero);
	})
})
