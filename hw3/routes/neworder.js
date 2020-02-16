/*
Name: Spencer Rose
Course: CS341
HW: HW4
File: This file has the code that will send a database request to add a new order
to the database
*/

var express = require('express');
var dbms = require('./dbms');
var router = express.Router();

router.post('/', function(req, res, next) {
  var body = req.body;
  var topping = body.topping.trim();
  var quantity = body.quantity.trim();
  var notes = body.notes;
  var month = "JUN";
  var day = 18;
  var id;
  console.log("toppings: "+topping);
  console.log("quantity: "+ quantity);
  console.log("notes: "+notes);
  var query = "select COUNT(*) from ORDERS";
  dbms.dbquery(query, function(error, results) {
    id = results[0]["COUNT(*)"];
    console.log(id);
    addQuery = "INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES("
    addQuery += id +","+"'"+month+"',"+day+","+quantity+",'"+topping+"','"+notes+"');";

    console.log(addQuery);
    dbms.dbquery(addQuery, function(error, results){

    });
  });
});

module.exports = router;
