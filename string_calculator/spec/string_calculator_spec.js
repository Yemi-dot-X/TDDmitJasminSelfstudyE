describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

/*it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

		it('should return 1 for an 1 string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should add two comma separated numbers', function() {
    expect(calculator.add('1,2')).toEqual(3);
});
it('should add two int', function() {
    expect(calculator.add('1,27')).toEqual(28);
});*/

it('should add three comma separated numbers', function() {
    expect(calculator.add('15,17,21')).toEqual(3);
});

});
