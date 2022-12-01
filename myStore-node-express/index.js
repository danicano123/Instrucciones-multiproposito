const express = require('express');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('my server');
});
// Middlewares
app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});
