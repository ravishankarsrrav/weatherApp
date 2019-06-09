'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
let rawdata = fs.readFileSync(path.join(__dirname, '../cities/city.json'));
let cities = JSON.parse(rawdata);
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use('/js', express.static(path.join(__dirname, '../dist')));
app.use('/about-us', express.static(path.join(__dirname, '../client/views/about-us/about-us.html')));
app.use('/home', express.static(path.join(__dirname, '../client/views/home/home.html')));
app.use('/all-cities', express.static(path.join(__dirname, '../client/views/all-cities/all-cities.html')));
app.use('/forecast/:ID', express.static(path.join(__dirname, '../client/views/forecast/forecast.html')));
// reqest to redirect to home
app.get('/', (req, res, next) => {
  res.redirect('/home');
});
// api request to get city list
app.get('/api/v1/city/:start/:stop', (req, res) => {
	let {start, stop} = req.params;
	let data = cities.slice(start, stop);
	res.status(200).json({
		"cities" : data,
		"success" : true,
	});
});
// request to catch undefined endpoints
app.get('*', (req, res) => {
  res.redirect('/');
});
// start the server
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
