const express = require('express');

// initializations
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
// const socket = require('./socket');
require('./database.js');
// socket.connect(server);
const {
  errorLoguer,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const routerApi = require('./routes/index');

io.on('connection', (alv) => {
  console.log(`hello from socket${alv}`);
  io.emit('message', 'hola!');
});

const port = 3000;
app.use(express.static('./public/views/'));
app.get('/', (req, res) => {
  res.send('hola');
});

// General middlewares

app.use(express.json());
routerApi(app);

// My Middlewares (los Middlewares que se ejecutan en 'next' deben ir despues del enrutamiento)

app.use(errorLoguer);
app.use(boomErrorHandler);
app.use(errorHandler);

server.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});
