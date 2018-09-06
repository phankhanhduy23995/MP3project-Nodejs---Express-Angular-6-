const http = require('http');
const express = require('express');
const app = express;

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

server.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})
