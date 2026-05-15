describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});
	

	it('should add two comma separated numbers', function() {
    expect(calculator.add('1,2')).toEqual(3);
});
});
