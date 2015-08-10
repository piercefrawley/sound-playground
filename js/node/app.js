const app     = require('express')();
const admin   = require('express')();
const http    = require('http');
const server  = http.createServer(app);
const io      = require('socket.io')(server);
const PORT    = 8080; 

app.get('/', function(request, response) {
  console.log(app.mountpath); 
  response.send('GET homepage request');
});

admin.get('/', function (req, res) {
  console.log(admin.mountpath);
  res.send('Admin Homepage');
})

app.use('/admin', admin); // mount the sub app

io.on('connection', function(){ /* … */ });

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

