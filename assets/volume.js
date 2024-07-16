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

    if (inputTypeValue === 'm' && resultTypeValue === 'dm') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'm' && resultTypeValue === 'cm') {
        result.value = Number(input.value) * 1000000
    } else if (inputTypeValue === 'm' && resultTypeValue === 'mm') {
        result.value = Number(input.value) * 1000000000
    } else if (inputTypeValue === 'm' && resultTypeValue === 'm') {
        result.value = input.value
    }

    if (inputTypeValue === 'dm' && resultTypeValue === 'm') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'dm' && resultTypeValue === 'cm') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'dm' && resultTypeValue === 'mm') {
        result.value = Number(input.value) * 1000000
    } else if (inputTypeValue === 'dm' && resultTypeValue === 'dm') {
        result.value = input.value
    }

    if (inputTypeValue === 'cm' && resultTypeValue === 'm') {
        result.value = Number(input.value) * 0.000001
    } else if (inputTypeValue === 'cm' && resultTypeValue === 'dm') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'cm' && resultTypeValue === 'mm') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'cm' && resultTypeValue === 'cm') {
        result.value = input.value
    }

    if (inputTypeValue === 'mm' && resultTypeValue === 'm') {
        result.value = Number(input.value) * 0.000000001
    } else if (inputTypeValue === 'mm' && resultTypeValue === 'dm') {
        result.value = Number(input.value) * 0.000001
    } else if (inputTypeValue === 'mm' && resultTypeValue === 'cm') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'mm' && resultTypeValue === 'mm') {
        result.value = input.value
    }
}