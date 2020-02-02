// Name: Spencer Rose
// Course: CS 341
// Homework 3
// File: sum.test.js This file is a simple example of a unit test
const sum = require('../public/javascripts/sum.js');
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
