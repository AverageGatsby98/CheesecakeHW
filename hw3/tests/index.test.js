var fs = require('fs');

test('test selectEvent', () => {
  //read html file into a variable
  var html = fs.readFileSync('public/index.html', 'utf8');
  expect(html).toEqual(expect.anything());

  //put html into testing DOM and sanity check the paragraph
  document.body.innerHTML = html;
  const $ = require('jquery');
  expect($('p').html()).toBe("Quantity Topping");
});
