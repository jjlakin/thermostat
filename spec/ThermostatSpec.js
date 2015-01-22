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

		it('minimum of 10', function() {
			thermostat.minimum()
			expect(thermostat.temperature).toBe(10);
		});

		it('minimum of 10 that it cannot go bellow', function() {
			thermostat.minimum();
			thermostat.adjustTemperature('down');	
			expect(thermostat.temperature).toBe(10);
		});

	});

	describe('cannot', function() {

		it('go above 25 when energy saver is on', function() {
			thermostat.maximum();
			thermostat.adjustTemperature('up');	
			expect(thermostat.temperature).toBe(25);
		});

		it('go above 32 when energy saver is off ', function() {
			thermostat.energySaver('off');
			thermostat.maximum();
			thermostat.adjustTemperature('up');	
			expect(thermostat.temperature).toBe(32);
		});

	});

	describe('recognises when it is', function() {

		it('saving energy', function() {
			thermostat.minimum();
			expect(thermostat.energyStatus()).toBe('saving energy');
		});

		it('using an ordinary amount of energy', function() {
			expect(thermostat.energyStatus()).toBe('normal energy');
		});

		it('burning fuel ', function() {
			thermostat.energySaver('off');
			thermostat.maximum();
			expect(thermostat.energyStatus()).toBe('burning energy');
		});

	});

});