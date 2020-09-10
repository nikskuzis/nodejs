/*
Description:
As a marketing department representative,
we need a server which can hold data about our last post title and it's date,
and this information should be available from /latest-blog-post path
this is needed, so we can better summarize post total views and last post.

Acceptance criteria:
* Create NodeJS server which works on 3005 port
* Server should be able to handle three paths: "/latest-blog-post", "/save-post-data", "/post-form"
* "/post-form" path responds whith HTML from, which consists of two input fields (title and date)
* "/save-post-data" path is used to send form data using POST method
* Add logic on server side which can receive data from "/save-post-data" path and save those data into file "latest-post-data.txt".
* "/latest-blog-post" path read data from saved file and responds those data to browser
* To reduce code in main js file, move routes logic to a separate .js file and export code as method, which would be used in main javascript file - 38. video
*/
const http = require('http');

const server = http.createServer((req, res) =>{
const url = req.url;
if (url == '/'){
    
    res.write('<html>');
    res.write('<head><title>Enter message></title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('html');
    return res.end();
}
    //process.exit;
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title><head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    
    res.end();
});

server.listen(3005);