// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {

		if(string_numbers == ""){
			return 0;
		}
		
		const numbers = string_numbers.split(",");

		if(numbers.length === 1){
			return parseInt(numbers[0]);
		}
		
	    return parseInt(numbers[0]) + parseInt(numbers[1]);
};
