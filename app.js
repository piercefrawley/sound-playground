const app     = require('express')();
const admin   = require('express')();
const http    = require('http');
const server  = http.createServer(app);
const io      = require('socket.io')(server);
const PORT    = 8080; 

/***************************/
/* Routes for the main app */
/***************************/

app.get('/', function(req, res) {
  console.log(req.method + ' request to: ' + app.mountpath);
  res.sendFile(__dirname + '/index.html');
});

app.get('/file/:name', function (req, res, next) {
  var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.use('/admin', admin);

/**************************/
/* Routes for the sub app */
/**************************/

admin.get('/', function (req, res) {
  console.log(req.method + ' request to: ' + admin.mountpath);
  res.send('Admin Homepage');
});

/*************************/
/* Set Server Connection */
/*************************/

io.on('connection', function(){ /* ... */ });

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

