class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = (5 / 9) * (fahrenheit - 32);
  }
  // getter
  get temperature() {
    return this._fahrenheit;
  }
  // setter
  set temperature(updatedFahrenheit) {
    this._fahrenheit = updatedFahrenheit;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp);
