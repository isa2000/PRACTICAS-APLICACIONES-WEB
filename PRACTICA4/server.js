const http = require("http");
const fs =  require("fs");

const canal =  fs.readFileSync('./canal.html');
const programa =  fs.readFileSync('./programa.html');
const guia =  fs.readFileSync('./guia.html');

http.createServer((request,response )=>{
    const { url } = request;
    if (url==="/canal")
    {
        response.writeHead(200, { "Content-Type":"text/html" });
        response.write(canal);
    }
    else if (url==="/programa")
    {
        response.writeHead(200, { "Content-Type":"text/html" });
        response.write(programa);
    }
    else if (url==="/guia")
    {
        response.writeHead(200, { "Content-Type":"text/html" });
        response.write(guia);
    }
    else
    {
        response.writeHead(404, { "Content-Type":"text/html" });
        response.write(error);
    }
})()