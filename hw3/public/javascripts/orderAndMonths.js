//Name: Spencer Rose
//Date: 2/1/2020
//Course: CS341
//Homework 3
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
    }
  });
  $("#months > a").click(function(){
    $("#MonthButton").text($(this).text());
  });
});
