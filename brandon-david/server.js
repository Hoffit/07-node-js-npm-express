'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// POST middleware
// is this top .use() optional?
app.use(express.urlencoded({ extended: true }));
// this is telling express to use the public folder in the current directory "./"
app.use(express.static('./public'));

app.get('', (request, response) => {
  console.log('got a a GET REQUEST - /index');
  response.sendFile('/public/index.html', {root: '.'});
});

app.get('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log('got a a GET REQUEST - /articles');
  response.sendFile('/public/new.html', {root: '.'});
});

// REVIEW: POST route needs to parse the body passed in with the request.
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

app.get('*', (request, response) => {
  response.status(404).send(`${request.url} HTTP 404 - Not Found`);
});

// run and wait for any requests to happen
// starting the WRRC (Web Request-Response Cycle)
app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});