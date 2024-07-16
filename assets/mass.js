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

    if (inputTypeValue === 'gram' && resultTypeValue === 'kilogram') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'gram' && resultTypeValue === 'tonne') {
        result.value = Number(input.value) * 0.000001
    } else if (inputTypeValue === 'gram' && resultTypeValue === 'milligram') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'gram' && resultTypeValue === 'quintal') {
        result.value = Number(input.value) * 0.00001
    } else if (inputTypeValue === 'gram' && resultTypeValue === 'pound') {
        result.value = Number(input.value) * 0.00220
    } else  if (inputTypeValue === 'gram' && resultTypeValue === 'gram') {
        result.value = input.value
    }

    if (inputTypeValue === 'kilogram' && resultTypeValue === 'gram') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'kilogram' && resultTypeValue === 'tonne') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'kilogram' && resultTypeValue === 'milligram') {
        result.value = Number(input.value) * 1000000
    } else if (inputTypeValue === 'kilogram' && resultTypeValue === 'quintal') {
        result.value = Number(input.value) * 0.01
    } else if (inputTypeValue === 'kilogram' && resultTypeValue === 'pound') {
        result.value = Number(input.value) * 2.204
    } else if (inputTypeValue === 'kilogram' && resultTypeValue === 'kilogram') {
        result.value = input.value
    }

    if (inputTypeValue === 'tonne' && resultTypeValue === 'gram') {
        result.value = Number(input.value) * 1000000
    } else if (inputTypeValue === 'tonne' && resultTypeValue === 'kilogram') {
        result.value = Number(input.value) * 1000
    } else if (inputTypeValue === 'tonne' && resultTypeValue === 'milligram') {
        result.value = Number(input.value) * 1000000000
    } else if (inputTypeValue === 'tonne' && resultTypeValue === 'quintal') {
        result.value = Number(input.value) * 10
    } else if (inputTypeValue === 'tonne' && resultTypeValue === 'pound') {
        result.value = Number(input.value) * 2204.62
    } else if (inputTypeValue === 'tonne' && resultTypeValue === 'tonne') {
        result.value = input.value
    }

    if (inputTypeValue === 'milligram' && resultTypeValue === 'gram') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'milligram' && resultTypeValue === 'kilogram') {
        result.value = Number(input.value) * 0.001
    } else if (inputTypeValue === 'milligram' && resultTypeValue === 'tonne') {
        result.value = Number(input.value) * 0.00000001
    } else if (inputTypeValue === 'milligram' && resultTypeValue === 'quintal') {
        result.value = Number(input.value) * 0.0000001
    } else if (inputTypeValue === 'milligram' && resultTypeValue === 'pound') {
        result.value = Number(input.value) * 0.000002204
    } else if (inputTypeValue === 'milligram' && resultTypeValue === 'milligram') {
        result.value = input.value
    }

    if (inputTypeValue === 'quintal' && resultTypeValue === 'gram') {
        result.value = Number(input.value) * 100000
    } else if (inputTypeValue === 'quintal' && resultTypeValue === 'kilogram') {
        result.value = Number(input.value) * 100
    } else if (inputTypeValue === 'quintal' && resultTypeValue === 'milligram') {
        result.value = Number(input.value) * 100000000
    } else if (inputTypeValue === 'quintal' && resultTypeValue === 'tonne') {
        result.value = Number(input.value) * 0.1
    } else if (inputTypeValue === 'quintal' && resultTypeValue === 'pound') {
        result.value = Number(input.value) * 220.46
    } else if (inputTypeValue === 'quintal' && resultTypeValue === 'quintal') {
        result.value = input.value
    }

    if (inputTypeValue === 'pound' && resultTypeValue === 'gram') {
        result.value = Number(input.value) * 453.59
    } else if (inputTypeValue === 'pound' && resultTypeValue === 'kilogram') {
        result.value = Number(input.value) * 0.453
    } else if (inputTypeValue === 'pound' && resultTypeValue === 'milligram') {
        result.value = Number(input.value) * 453592.37
    } else if (inputTypeValue === 'pound' && resultTypeValue === 'tonne') {
        result.value = Number(input.value) * 0.000453
    } else if (inputTypeValue === 'pound' && resultTypeValue === 'quintal') {
        result.value = Number(input.value) * 0.00453
    } else if (inputTypeValue === 'pound' && resultTypeValue === 'pound') {
        result.value = input.value
    }
}