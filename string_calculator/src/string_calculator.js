// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

		
		const numbers = string_numbers.split(",");

		

	    return parseInt(numbers[0]) + parseInt(numbers[1]);
};
