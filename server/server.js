const express = require('express');
const path = require('path');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use('/js', express.static(path.join(__dirname, '../dist')));
app.use('/about-us', express.static(path.join(__dirname, '../client/views/about-us/about-us.html')));
app.use('/home', express.static(path.join(__dirname, '../client/views/home/home.html')));
app.get('/', (req, res, next) => {
  res.redirect('/home');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
