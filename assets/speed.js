var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue, resultTypeValue;

input.addEventListener('keyup', myResult)
inputType.addEventListener('change', myResult)
resultType.addEventListener('change', myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult() {
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if (inputTypeValue === 'm/s' && resultTypeValue === 'km/h') {
        result.value = Number(input.value) * 3.6
    } else if (inputTypeValue === 'm/s' && resultTypeValue === 'km/s') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'm/s' && resultTypeValue === 'kn') {
        result.value = Number(input.value) * 1.943
    } else if (inputTypeValue === 'm/s' && resultTypeValue === 'mph') {
        result.value = Number(input.value) * 2.236
    } else if (inputTypeValue === 'm/s' && resultTypeValue === 'm/s') {
        result.value = input.value
    }

    if (inputTypeValue === 'km/h' && resultTypeValue === 'm/s') {
        result.value = Number(input.value) * 0.277
    } else if (inputTypeValue === 'km/h' && resultTypeValue === 'km/s') {
        result.value = Number(input.value) * 0.00027
    } else if (inputTypeValue === 'km/h' && resultTypeValue === 'kn') {
        result.value = Number(input.value) * 0.539
    } else if (inputTypeValue === 'km/h' && resultTypeValue === 'mph') {
        result.value = Number(input.value) * 0.621
    } else if (inputTypeValue === 'km/h' && resultTypeValue === 'km/h') {
        result.value = input.value
    }

    if (inputTypeValue === 'km/s' && resultTypeValue === 'm/s') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'km/s' && resultTypeValue === 'km/h') {
        result.value = Number(input.value) * 3600
    } else if (inputTypeValue === 'km/s' && resultTypeValue === 'kn') {
        result.value = Number(input.value) * 1943.844
    } else if (inputTypeValue === 'km/s' && resultTypeValue === 'mph') {
        result.value = Number(input.value) * 2236.936
    } else if (inputTypeValue === 'km/s' && resultTypeValue === 'km/s') {
        result.value = input.value
    }

    if (inputTypeValue === 'kn' && resultTypeValue === 'm/s') {
        result.value = Number(input.value) * 0.514
    } else if (inputTypeValue === 'kn' && resultTypeValue === 'km/h') {
        result.value = Number(input.value) * 1.852
    } else if (inputTypeValue === 'kn' && resultTypeValue === 'km/s') {
        result.value = Number(input.value) * 0.000514
    } else if (inputTypeValue === 'kn' && resultTypeValue === 'mph') {
        result.value = Number(input.value) * 1.150
    } else if (inputTypeValue === 'kn' && resultTypeValue === 'kn') {
        result.value = input.value
    }

    if (inputTypeValue === 'mph' && resultTypeValue === 'm/s') {
        result.value = Number(input.value) * 0.44704
    } else if (inputTypeValue === 'mph' && resultTypeValue === 'km/h') {
        result.value = Number(input.value) * 0.0447
    } else if (inputTypeValue === 'mph' && resultTypeValue === 'km/s') {
        result.value = Number(input.value) * 0.00044
    } else if (inputTypeValue === 'mph' && resultTypeValue === 'kn') {
        result.value = Number(input.value) * 0.8689
    } else if (inputTypeValue === 'mph' && resultTypeValue === 'mph') {
        result.value = input.value
    }
}