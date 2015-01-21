describe('Thermostat', function() {

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('has a temperature', function() {

		it('of 20 by default', function() {		
			expect(thermostat.temperature).toBe(20);
		});

		it('that increases with up input', function() {
			thermostat.adjustTemperature('up')		
			expect(thermostat.temperature).toBe(21);
		});

		it('that decreases with down input', function() {
			thermostat.adjustTemperature('down')		
			expect(thermostat.temperature).toBe(19);
		});

	});

});