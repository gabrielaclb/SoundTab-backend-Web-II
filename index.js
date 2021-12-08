'use strict'

const app = require('./src/app'),
      server = require('http').Server(app)
  
var port;

switch(process.env.NODE_ENV){
  case 'production':
      port = process.env.PORT || 3000
      break;
  default:
      port = process.env.PORT || 3002
  break   
}

server.listen(port, () => {
  console.log('Server running on port ' + port);
})
