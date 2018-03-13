
var expect = require('chai').expect;
var mocha = require('mocha');

var mathOperations = function (num1, num2, operation){


	if(!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))){



		switch(operation){

			case '+':
				return (parseInt(num1) + parseInt(num2));
				break;

			case '-':

				return (parseInt(num1) - parseInt(num2));
				break;

			case '*':
				return (parseInt(num1) * parseInt(num2));
				break;

			case 'div':

				if(parseInt(num2)==0)
					return "Please enter the valid number, denominator can not be 0.";
				else
					return (parseInt(num1)/parseInt(num2));
				break;
		}
	}

}


describe('Javascript Calculator Console Application', function(){


	it('should add two numbers together', function(){

		var num1= 3;
		var num2= 5;
		var operation = '+';
		var result = mathOperations(num1,num2,operation);
		expect(result).to.equal(8);
	})

})