const app     = require('express')();
const http    = require('http');
const server  = http.createServer(app);
const io      = require('socket.io')(server);
const PORT    = 8080; 

app.get('/', function(request, response) {
  response.send('GET homepage request');
});

io.on('connection', function(){ /* … */ });

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});