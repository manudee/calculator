
var expect = require('chai').expect;
var mocha = require('mocha');
var moment = require('moment');


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


			case 'sqrt':
				return (Math.pow(parseInt(num1), 1 / parseInt(num2)));
				break;



			case 'mean':
				return ((parseInt(num1) + parseInt(num2))/2);
				break;



			case '^':
				return parseInt(Math.pow(num1, num2));
				break;



			case 'range':

			var arr = [];


			if(parseInt(num1) > parseInt(num2) ){

				for (var i = parseInt(num2); i <= parseInt(num1); i++) {
					arr.push(i);
				}

				return arr;

			}

			else if (parseInt(num1) < parseInt(num2)){

				for (var i = parseInt(num1); i <= parseInt(num2); i++) {
					arr.push(i);
				}

				return arr;

			}


			break;


			default:
				return "You did not enter the right operations";
				break;




		}
	}

}


describe('Javascript Calculator Console Application', function(){


		it('Test ID 1: should add two numbers together', function(){

			var num1= 3;
			var num2= 5;
			var operation = '+';
			var result = mathOperations(num1,num2,operation);

			console.log(" Executed at " + moment(Date.now()).format());
			expect(result).to.equal(8);

		});

	it('Test ID 2: should subtract two numbers together positive result', function () {

       		var num1 = 15;
            var num2 = 5;
            var operation = '-';
            var result = mathOperations(num1,num2,operation);

            console.log(" Executed at " + moment(Date.now()).format());
            expect(result).to.equal(10)
	});

	it('Test ID 3: should subtract two numbers together negative result', function () {

            var num1 = 3;
            var num2 = 5;
            var operation = '-';
            var result = mathOperations(num1,num2,operation);

            console.log(" Executed at " + moment(Date.now()).format());
            expect(result).to.equal(-2)
	});

 
    it('Test ID 4: should multiply two numbers together', function () {
            var num1 = 3;
            var num2 = 5;
            var operation = '*';
            var result = mathOperations(num1,num2,operation);

            console.log(" Executed at " + moment(Date.now()).format());
            expect(result).to.equal(15)

	});

    it('Test ID 5: should divide two numbers', function () {
			var num1 = 20;
            var num2 = 5;
            var operation = 'div'
            var result = mathOperations(num1,num2,operation);

            console.log(" Executed at " + moment(Date.now()).format());
            expect(result).to.equal(4)
	});

	it('Test ID 6: should take sq root of num1', function () {
            var num1 = 9;
            var num2 = 2;
            var operation = 'sqrt'
            var result = mathOperations(num1,num2,operation);

            console.log(" Executed at " + moment(Date.now()).format());
            expect(result).to.equal(3)
		
	});

    it('Test ID 7: should print mean of two numbers', function () {
			var num1 = 19;
			var num2 = 2;
    	    var operation = 'mean'
    	    var result = mathOperations(num1,num2,operation);

    	    console.log(" Executed at " + moment(Date.now()).format());
    	    expect(result).to.equal(10.5)
			
	});

		
	it('Test ID 8: should print num1 raised to num2', function () {

			var num1 = 4;
			var num2 = 3;
			var operation = '^'
			var result = mathOperations(num1,num2,operation);

			console.log(" Executed at " + moment(Date.now()).format());
			expect(result).to.eql(64)
    });

 

    it('Test ID 9: should print range between two numbers', function () {

    	    var num1 = 8;
    	    var num2 = 5;
    	    var operation = 'range'
    	    var arr = [];
    	    arr = mathOperations(num1,num2,operation);

    	    console.log(" Executed at " + moment(Date.now()).format());
			expect(arr).to.eql([5,6,7,8])
    });

})