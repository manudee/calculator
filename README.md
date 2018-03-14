# calculator


This is a nodeJS based application for calculator.
The application takes 3 arguments
	* num1
	* num2
	* operation - (can be +, -, *, div, sqrt, mean, ^, range)



## Program Structure
	
	* calculator.js - This is the main program file which includes the logic of calculator.
	* testCalc.js - This is the test script which includes the various test scenarios for the calculator function. The scenarios are structured using describe and it blocks. It uses expect assertion from chai to validate the results.


## Execution Instructions
	
	In order to execute the program follow the instructions below

	* git clone <repo>
	* npm install - to install all the necessary node modules
	* npm test - this should runt testCalc.js file for all the scenarios
	* npm test > testResults.log - This command will capture the test results into a log file.
	  Log file will include the test cases names, test ids, timestamp , pass/failures stats.


	  