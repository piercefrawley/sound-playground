const http = require('http');
const PORT=8080; 
const app = require('express')();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.send('hello world');
});

io.on('connection', function(){ /* … */ });
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});