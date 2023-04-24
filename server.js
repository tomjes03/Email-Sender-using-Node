//create server
//require core modules
var http = require("http")
var fs = require('fs')
var url = require('url')

//create server
http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname
    console.log("Request" + pathname + "received")

    fs.readFile(pathname.substr(1), (err,data) => {
        if(err){
            console.log(err);
            response.writeHead(404, {"Content-type":"Text/html"})
        }else {
            response.writeHead(200, {"Content-type":"Text/html"})
            response.write(data.toString())
        }

        response.end()
        
    });
}).listen(3000);

console.log("server running at http://127.0.0.1:3000/");