//Name: Spencer Rose
//Date: 2/1/2020
//Course: CS341
//Homework 5
//File: orderAndMonths.js: this file contains the javascript that used to be in
//      the script tag of the html
$(document).ready(function(){
  $("#OrderButton").click(function(){
    // Source: https://stackoverflow.com/questions/39559217/jquery-to-check-a-textarea-for-a-particular-word-and-shows-a-text-input-and-pop
    // 1/25/20 I used this source to find out that there is a .indexOf() method
    if($("textarea").val().indexOf("vegan") > -1){
      alert("Warning, cheesecakes contain dairy");
    }
    else{
      $("form").hide();
      $("#OrderButton").hide();
      //Source: https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button
      //1/23/20 This source helped me find how to get the value of the checked radio button
      $("#FirstTitle").html("Thank you! Your order has been placed! Your order information: <br>" +
      "Flavor: " + $("input[name=flavors]:checked").val() + "<br>" +
      "Number of Cheesecakes: " + $("select").val() + "<br>" +
      "Notes: " + $("textarea").val());
      $.post("http://localhost:3000/neworder", {'topping': $("input[name=flavors]:checked").val(), 'quantity': $("select").val(), 'notes': $("textarea").val() }, function(result){
      });//this will send the information needed to add a new order to the database
    }
  });
  $("#months > a").click(function(){
    $("#MonthButton").text($(this).text());
    $.post("http://localhost:3000/orders", {'month': $(this).text()}, function(result){//will send a request for databse information
      //This will find the values of different cheesecakes based on result json
      var chocolate=0;
      var cherry=0;
      var plain=0;
      for (var i = 0; i < result.length; i++) {
        if(result[i].TOPPING == "Cherry"){
          cherry += result[i].QUANTITY;
        }
        else if(result[i].TOPPING == "Chocolate") {
          chocolate += result[i].QUANTITY;
        }
        else if(result[i].TOPPING == "Plain") {
          plain += result[i].QUANTITY;
        }
      }
      //Replaces text values for list of bought cheesecakes
      $("#cherryAmount").text(cherry+" cherry");
      $("#chocolateAmount").text(chocolate+" chocolate");
      $("#plainAmount").text(plain+" plain");
    });
  });
});
