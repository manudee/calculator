
var mathOperations = function (num1, num2, operation){


	if(!isNaN(parseInt(num1)) && !isNaN(parseInt(num2))){



		switch(operation){

			case 'add':
			return (parseInt(num1) + parseInt(num2));
			break;

			case 'sub':
			return (parseInt(num1) - parseInt(num2));
			break;

			case 'mul':
			return (parseInt(num1) * parseInt(num2));
			break;

			case 'div':

			if(parseInt(num2)==0)
				return "Please enter the valid number, denominator can not be 0.";
			else
				return (parseInt(num1)/parseInt(num2));
				break;


			case 'sqrt':

				if(parseInt(num1) < 0 )
					return "Please enter a positive number";
				else
					return (Math.pow(parseInt(num1), 1 / parseInt(num2)));
				break;



			case 'mean':
				return ((parseInt(num1) + parseInt(num2))/2);
				break;



			case 'pow':
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
				return "You did not enter the listed operations";
				break;




		}
	}

}


module.exports = mathOperations;