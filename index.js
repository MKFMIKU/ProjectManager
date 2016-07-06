var http = require('http'),
	createHandler = require('github-webhook-handler'),
	indexHandler = createHandler({ path: '/Myindex', secret: '12345678' }),
  labHandler = createHandler({ path: '/lab', secret: '12345678' });

function run_cmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";
 
  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}


http.createServer(function (req, res) {
  if(req.url=='/Myindex'){
      indexHandler(req, res, function (err) {
      res.statusCode = 404;
      res.end('Api for Myindex');
    });
  }

  if(req.url=='/lab'){
    labHandler(req, res, function (err) {
      res.statusCode = 404;
      res.end('Api for lab');
    });
  }
}).listen(4000);

indexHandler.on('error', function (err) {
  console.error('Error:', err.message)
});

labHandler.on('error', function (err) {
  console.error('Error:', err.message)
});

indexHandler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  run_cmd('sh', ['./bin/Myindex.sh'], function(text){ console.log(text) });
});

labHandler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  run_cmd('sh', ['./bin/lab.sh'], function(text){ console.log(text) });
});