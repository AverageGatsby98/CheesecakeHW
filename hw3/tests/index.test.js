//Name: Spencer Rose
//Date: 2/1/2020
//Course: CS341
//File: index.test.js: the unit test file for a part of my index.html 
var fs = require('fs');

test('test selectEvent', () => {
  //read html file into a variable
  var html = fs.readFileSync('public/index.html', 'utf8');
  expect(html).toEqual(expect.anything());

  //put html into testing DOM and sanity check the paragraph value
  document.body.innerHTML = html;
  const $ = require('jquery');
  expect($('p').html()).toBe("Quantity Topping");
});
