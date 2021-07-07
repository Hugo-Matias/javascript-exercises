const ftoc = function(tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) * 5 / 9
  return Math.round(tempCelsius * 10) / 10
};

const ctof = function(tempCelsius) {
  const tempFahrenheit = tempCelsius * 9 / 5 + 32
  return Math.round(tempFahrenheit * 10) / 10
};

module.exports = {
  ftoc,
  ctof
};
