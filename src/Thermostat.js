var Thermostat = function () {

	this.temperature = 20;
	this.maxTemp = 25;

};

	

Thermostat.prototype.adjustTemperature = function(change) {
	
	if (change === 'up') 
		if (this.temperature < this.maxTemp)this.temperature += 1 ;
	if (change === 'down') 
		if (this.temperature > 10) this.temperature -= 1 ;
};

Thermostat.prototype.minimum = function() {
	this.temperature = 10
};

Thermostat.prototype.maximum = function() {
	this.temperature = this.maxTemp
};

Thermostat.prototype.energySaver = function(status) {
	if (status === 'on')this.maxTemp = 25;
	if (status === 'off')this.maxTemp = 32;
};

Thermostat.prototype.energyStatus = function() {
	if (this.temperature < 18) return 'saving energy';
	if (this.temperature < 25) return 'normal energy';
	if (this.temperature >= 25) return 'burning energy';

};



// Javabuzz.prototype.isDivisibleByFive = function(number) {
// 	return this._isDivisibleBy(number, 5);
// };

// Javabuzz.prototype.isDivisibleByFifteen = function(number) {
// 	return this._isDivisibleBy(number, 15);
// };

// Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
//   return (number % divisor === 0);
// };

// Javabuzz.prototype.says = function(number) {
// 	if (this.isDivisibleByFifteen(number)) return "JavaBuzz";
// 	if (this.isDivisibleByThree(number)) return "Java";
// 	if (this.isDivisibleByFive(number)) return "Buzz";
// };