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

    if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 10000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'millimeter') {
        result.value = Number(input.value) * 1000000
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'foot') {
        result.value = Number(input.value) * 3280.83
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 39370.07
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer') {
        result.value = input.value
    }

    if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 100
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'millimeter') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'foot') {
        result.value = Number(input.value) * 3.28
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 39.37
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
        result.value = input.value
    }

    if (inputTypeValue === 'decimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.0001
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'millimeter') {
        result.value = Number(input.value) * 100
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'foot') {
        result.value = Number(input.value) * 0.32
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 3.93
    } else if (inputTypeValue === 'decimeter' && resultTypeValue === 'decimeter') {
        result.value = input.value
    }

    if (inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.00001
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.01
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'millimeter') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'foot') {
        result.value = Number(input.value) * 0.032
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 0.393
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter') {
        result.value = input.value
    }

    if (inputTypeValue === 'millimeter' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.000001
    } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 0.01
    } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'foot') {
        result.value = Number(input.value) * 0.0032
    } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 0.0393
    } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'millimeter') {
        result.value = input.value
    }

    if (inputTypeValue === 'foot' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.00030
    } else if (inputTypeValue === 'foot' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 3.048
    } else if (inputTypeValue === 'foot' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 30.48
    } else if (inputTypeValue === 'foot' && resultTypeValue === 'millimeter') {
        result.value = Number(input.value) * 304.8
    } else if (inputTypeValue === 'foot' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.3048
    } else if (inputTypeValue === 'foot' && resultTypeValue === 'inch') {
        result.value = Number(input.value) * 12
    } else if (inputTypeValue === 'foot' && resultTypeValue === 'foot') {
        result.value = input.value
    }

    if (inputTypeValue === 'inch' && resultTypeValue === 'kilometer') {
        result.value = Number(input.value) * 0.0000254
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'decimeter') {
        result.value = Number(input.value) * 0.254
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'centimeter') {
        result.value = Number(input.value) * 2.54
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'millimeter') {
        result.value = Number(input.value) * 25.4
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'foot') {
        result.value = Number(input.value) * 0.083
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'meter') {
        result.value = Number(input.value) * 0.0254
    } else if (inputTypeValue === 'inch' && resultTypeValue === 'inch') {
        result.value = input.value
    }
}