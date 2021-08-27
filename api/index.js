const express = require('express');
const PORT=process.env.PORT||5000;;
const app = express();
app.listen(PORT, function () {
    console.log("Server is running on "+ PORT +" port");
  });

  app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>')
  })