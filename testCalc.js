

var expect = require('chai').expect;
var mocha = require('mocha');
var moment = require('moment');
var calc = require('./calculator.js');

describe('Javascript Calculator Console Application', function(){


  it('Test ID 1: should add two numbers together', function(){

     var num1= 3;
     var num2= 5;
     var operation = 'add';
     var result = calc(num1,num2,operation);

     console.log(" Executed at " + moment(Date.now()).format());
     expect(result).to.equal(8);

 });

  it('Test ID 2: should subtract two numbers together positive result', function () {

   var num1 = 15;
   var num2 = 5;
   var operation = 'sub';
   var result = calc(num1,num2,operation);

   console.log(" Executed at " + moment(Date.now()).format());
   expect(result).to.equal(10)
});

  it('Test ID 3: should subtract two numbers together negative result', function () {

    var num1 = 3;
    var num2 = 5;
    var operation = 'sub';
    var result = calc(num1,num2,operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.equal(-2)
});


  it('Test ID 4: should multiply two numbers together', function () {
    var num1 = 3;
    var num2 = 5;
    var operation = 'mul';
    var result = calc(num1,num2,operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.equal(15)

});

  it('Test ID 5: should divide two numbers', function () {
     var num1 = 20;
     var num2 = 5;
     var operation = 'div'
     var result = calc(num1,num2,operation);

     console.log(" Executed at " + moment(Date.now()).format());
     expect(result).to.equal(4)
 });

  it('Test ID 6: should take sq root of num1', function () {
    var num1 = 9;
    var num2 = 2;
    var operation = 'sqrt'
    var result = calc(num1,num2,operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.equal(3)

});

  it('Test ID 7: should print mean of two numbers', function () {
     var num1 = 19;
     var num2 = 2;
     var operation = 'mean'
     var result = calc(num1,num2,operation);

     console.log(" Executed at " + moment(Date.now()).format());
     expect(result).to.equal(10.5)

 });


  it('Test ID 8: should print num1 raised to num2', function () {

     var num1 = 4;
     var num2 = 3;
     var operation = 'pow'
     var result = calc(num1,num2,operation);

     console.log(" Executed at " + moment(Date.now()).format());
     expect(result).to.eql(64)
 });



  it('Test ID 9: should print range between two numbers', function () {

   var num1 = 8;
   var num2 = 5;
   var operation = 'range'
   var arr = [];
   arr = calc(num1,num2,operation);

   console.log(" Executed at " + moment(Date.now()).format());
   expect(arr).to.eql([5,6,7,8])
});


  it('Test ID 10: When one of the numbers is a string, convert string to int', function(){

   var num1 = '16';
   var num2 = 3;
   var operation = 'mul';

   var result = calc(num1,num2, operation);

   console.log(" Executed at " + moment(Date.now()).format());
   expect(result).to.eql(48);

});


  it('Test ID 11: Incorrect operation', function(){

   var num1 = 34;
   var num2 = 12;
   var operation = '%';

   var result = calc(num1,num2, operation);

   console.log(" Executed at " + moment(Date.now()).format());
   expect(result).to.eql('You did not enter the listed operations');



});


  it('Test ID 12: Denomintor zero for div', function(){

    var num1 = 55;
    var num2 = 0;
    var operation = 'div';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql('Please enter the valid number, denominator can not be 0.');



});


  it('Test ID 13: Addition with one Negative Number', function(){

    var num1 = 55;
    var num2 = -10;
    var operation = 'add';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(45);

});

  it('Test ID 14: Addition with two Negative Numbers', function(){

    var num1 = -55;
    var num2 = -10;
    var operation = 'add';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(-65);

});

  it('Test ID 15: Subtraction with 2nd Num Negative', function(){

    var num1 = 15;
    var num2 = -10;
    var operation = 'sub';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(25);

});

  it('Test ID 16: Subtraction with two Negative Numbers', function(){

    var num1 = -15;
    var num2 = -10;
    var operation = 'sub';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(-5);

});

  it('Test ID 17: Subtraction with first num Negative', function(){

    var num1 = -15;
    var num2 = 10;
    var operation = 'sub';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(-25);

});

  it('Test ID 18: Multiplication with one Negative number', function(){

    var num1 = -15;
    var num2 = 10;
    var operation = 'mul';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(-150);

});

  it('Test ID 19: Multiplication with two negative numbers', function(){

    var num1 = -15;
    var num2 = -20;
    var operation = 'mul';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(300);

});

  it('Test ID 20: Division with numerator negative', function(){

    var num1 = -15;
    var num2 = 5;
    var operation = 'div';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(-3);

});


  it('Test ID 21: Division with denominator negative', function(){

    var num1 = 40;
    var num2 = -8;
    var operation = 'div';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(-5);

});


  it('Test ID 22: Division with numerator and denominator negative', function(){

    var num1 = -36;
    var num2 = -8;
    var operation = 'div';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql(4.5);

});

  it('Test ID 23: Sqrt of a negative number', function(){

    var num1 = -36;
    var num2 = 2;
    var operation = 'sqrt';

    var result = calc(num1,num2, operation);

    console.log(" Executed at " + moment(Date.now()).format());
    expect(result).to.eql('Please enter a positive number');

});


})