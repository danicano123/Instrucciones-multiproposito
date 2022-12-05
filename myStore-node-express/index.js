const express = require('express');
const {
  errorLoguer,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const routerApi = require('./routes/index');

// initializations
const app = express();
require('./database.js');
const port = 3000;

app.get('/', (req, res) => {
  res.send('my server');
});

// General middlewares

app.use(express.json());
routerApi(app);

// My Middlewares (los Middlewares que se ejecutan en 'next' deben ir despues del enrutamiento)

app.use(errorLoguer);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});
