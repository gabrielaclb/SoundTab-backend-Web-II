'use strict'

const express = require('express'),
      cors = require('cors'),
      path = require('path'),
      app = express(),
      morgan = require('morgan'),
      fs = require('fs');

// load routes
const adminRoutes = require('./routes/admin');
const bandRoutes = require('./routes/band');
const albumRoutes = require('./routes/album');
const soundRoutes = require('./routes/sound');
const userRoutes = require('./routes/user');
const favoriteRoutes = require('./routes/favorite');
const listRoutes = require('./routes/list');

// configure response
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json({
  limit: '100mb'
}));
//app.use(helmet())
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

switch(process.env.NODE_ENV){
  case 'production':
    break;
  default:
    app.use(morgan('tiny'));
  break
}

app.use((req, res, next) =>{
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});

app.use('/api/v1', [
  adminRoutes,
  bandRoutes,
  albumRoutes,
  soundRoutes,
  userRoutes,
  favoriteRoutes,
  listRoutes
]);

app.get('/health', (req,res)=>{res.sendStatus(200)});

app.get('/public/*', (req,res,next)=>{
  let pathUrl = path.join(__dirname,('../'+req.path));
  if(fs.existsSync(pathUrl)){
    res.status(200).sendFile(pathUrl);
  }else{
    res.sendStatus(404);
  }
})

// Serve static files
app.use(express.static(__dirname + '/../public/dist'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../public/dist/index.html'));
});

module.exports = app
