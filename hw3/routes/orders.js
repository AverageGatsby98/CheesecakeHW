/*
Name: Spencer Rose
Course: CS341
HW: HW5
File: This file responds with a json object when the orders pages is accessed

Source: https://alligator.io/js/json-parse-stringify/ 2/5/20
  This source helped me realize I need to parse my json string before I send it

Source: https://www.w3schools.com/js/js_json_stringify.asp 2/5/20
  This source showed me the json stringify function
*/
var express = require('express');
var dbms = require('./dbms');
var router = express.Router();
//Create my array of json objects
/*var orders_array = [
  {
    topping: "cherry",
    quantity: 2
  },
  {
    topping: "cherry",
    quantity: 1
  },
  {
    topping: "plain",
    quantity: 4
  }
];*/

//var myResponse = JSON.stringify(orders_array);
/* Send JSON object after you parse it*/
router.post('/', function(req, res, next) {
  var body = req.body;
  var month = body.month.trim();
  //console.log(month);
  var query = "select * from ORDERS where MONTH=\'"+ month+"\'";
  //console.log(query);
  dbms.dbquery(query, function(error, results) {
    var myResponse = JSON.stringify(results);
    //console.log(JSON.parse(myResponse));
    res.json(JSON.parse(myResponse));
  });
  //res.json(JSON.parse(myResponse));
});

module.exports = router;
