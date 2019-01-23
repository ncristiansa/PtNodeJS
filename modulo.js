var http = require('http');
function especial(text, port, callback){
    http.createServer(function(req, res){
        res.write(text);
        res.end();
        callback(text);
    }).listen(port);
}
module.exports = especial;