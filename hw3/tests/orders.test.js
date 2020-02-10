// Name: Spencer Rose
// Course: CS 341
// Homework 4
// File: orders.test.js This file unit tests if my javascript is returning a
//    valid JSON array
const app = require('../app');
const http = require('http');
var serverVal;

//I need to make sure the server is on so I can get the json data
beforeAll(() => {
  serverVal = app.listen(3000);
});

//Source: https://flaviocopes.com/node-http-post/ date: 2/10/20
//Used this source to help me make a post call without jQuery
test('testing JSON post', done => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/orders',
    method: 'POST',
  };
  //This will take the data chunks from the http request above and put it
  //into a buffer
  //Source: https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express
  //date: 2/10/20 This source showed me how to process just the data from the
  //http get call
  var bodyChunks = [];
  http.get(options, function(result){
    result.on('data', function(chunk) {
      bodyChunks.push(chunk);
    }).on('end', function() {
      var body = Buffer.concat(bodyChunks);
      //If i can parse the body using JSON parse then it is an valid JSON array
      try{
        JSON.parse(body);
        done();
      }
      catch (e){
        done(e);
      }
    });
  });
});

//I need to close my server after I have run the test
afterAll(() => {
  serverVal.close();
});
