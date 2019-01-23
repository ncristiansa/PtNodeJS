var especial = require("./modulo");

var count = 0;
function especial2(req){

    console.log(req);
    console.log(count);
    count++;
}
especial('Hola Mundo', 8080, especial2);