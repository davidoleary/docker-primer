const express = require('express');
const app = express();
const port = 3456;

app.get('/', (req, res) => {
  console.log('here', new Date().toISOString());
  res.send('Hello World! from docker');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
