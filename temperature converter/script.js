function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemperature;

    if (inputUnit === outputUnit) {
        outputTemperature = inputTemperature;
    } else if (inputUnit === "celsius") {
        if (outputUnit === "fahrenheit") {
            outputTemperature = (inputTemperature * 9/5) + 32;
        } else if (outputUnit === "kelvin") {
            outputTemperature = inputTemperature + 273.15;
        }
    } else if (inputUnit === "fahrenheit") {
        if (outputUnit === "celsius") {
            outputTemperature = (inputTemperature - 32) * 5/9;
        } else if (outputUnit === "kelvin") {
            outputTemperature = (inputTemperature - 32) * 5/9 + 273.15;
        }
    } else if (inputUnit === "kelvin") {
        if (outputUnit === "celsius") {
            outputTemperature = inputTemperature - 273.15;
        } else if (outputUnit === "fahrenheit") {
            outputTemperature = (inputTemperature - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("outputTemperature").value = outputTemperature.toFixed(2);
}
