describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	 it("should return 0 for empty string", function () {
        expect(calculator.add("")).toEqual(0);
    });

	it('should return 1 for one number', function() {
		expect(calculator.add('1')).toEqual(1);
	});
});
