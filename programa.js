var http = require('http');
/*
http.createServer(function(req, res){
    res.write('Hello world!');
    res.end();
}).listen(8080);
*/

//

function especial(text, port, callback){
    http.createServer(function(req, res){
        res.write(text);
        res.end();
        callback(text);
    }).listen(port);
}
especial('Hola Mundo', 8080, especial2);
var count = 0;
function especial2(req){

    console.log(req);
    console.log(count);
    count++;
}
