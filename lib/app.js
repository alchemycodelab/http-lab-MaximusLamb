const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/') {
      const body = 'hi';

      socket.end(createResponse({
        body: body
      }));
    } else if(request.path === '/echo') {
      socket.end(createResponse({
        body: request.body,
        status: '200 OK'
      }));
    
    } else if(request.path === '/red') {

      socket.end(createResponse({
        body: '<h1>red<h1>',
        status: '200 OK',
        contentType: 'text/html'
      }));
    } else if(request.path === '/green') {

      socket.end(createResponse({
        body: '<h1>green<h1>',
        status: '200 OK',
        contentType: 'text/html'
      }));
    } 
    else if(request.path === '/blue') {

      socket.end(createResponse({
        body: '<h1>blue<h1>',
        status: '200 OK',
        contentType: 'text/html'
      }));
    } else
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
