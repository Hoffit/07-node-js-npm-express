'use strict';

const express = require('Express');
const PORT = process.env.PORT || 3000;
// this needs to be called because of DOCUMENTATION
const app = express(); 

// POST middleware
// is this top .use() optional?
app.use(express.urlencoded({ extended: true }));
// this is telling express to use the .public folder to send pictures back to the view
app.use(express.static('/public'));

// REVIEW: POST route needs to parse the body passed in with the request.
app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

/* ------------------------- */

// from this line, I can use APP to create any ATP handler / listener / route
// when app gets a 'get' request, run this
// /show-me-a-message is the last part of a URL
// go to localhost:3000/show-me-a-message to trigger this
app.get('/show-me-a-message', (request, response) => {
  console.log('got a a GET REQUEST');
  response.send('<h1>hello from the other side of a full-stack application</h1>');
});

app.get('/hound', (request, response) => {
  // '.' look in same file you're in now
  // {root: '.'} === fancy way of adding . in ./public/...
  response.sendFile('/public/ound-v2.html', {root: '.'});
});

// run and wait for any requests to happen
// starting the WRRC (Web Request-Response Cycle)
app.listen(PORT, () => {
  console.log('server is up on port ${PORT}');
});