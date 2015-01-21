var Thermostat = function () {

	this.temperature = 20;

};

	

Thermostat.prototype.adjustTemperature = function(change) {
	 if (change === 'up') this.temperature += 1 ;
	 if (change === 'down') this.temperature -= 1 ;
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