function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}
const convertedTemperature = fahrenheitToCelsius(90);
console.log(convertedTemperature);