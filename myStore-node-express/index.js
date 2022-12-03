const express = require('express');
const {
  errorLoguer,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('my server');
});

// General middlewares

app.use(express.json());
routerApi(app);

// My Middlewares

app.use(errorLoguer);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});
