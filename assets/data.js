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

    if (inputTypeValue === 'B' && resultTypeValue === 'KB') {
        result.value = Number(input.value) * 0.000976
    } else if (inputTypeValue === 'B' && resultTypeValue === 'MB') {
        result.value = Number(input.value) * 0.000000953
    } else if (inputTypeValue === 'B' && resultTypeValue === 'GB') {
        result.value = Number(input.value) * 0.000000000931
    } else if (inputTypeValue === 'B' && resultTypeValue === 'TB') {
        result.value = Number(input.value) * 0.000000000000909
    } else if (inputTypeValue === 'B' && resultTypeValue === 'PB') {
        result.value = Number(input.value) * 0.0000000000000008888
    } else  if (inputTypeValue === 'B' && resultTypeValue === 'B') {
        result.value = input.value
    }

    if (inputTypeValue === 'KB' && resultTypeValue === 'B') {
        result.value = Number(input.value) * 1024
    } else if (inputTypeValue === 'KB' && resultTypeValue === 'MB') {
        result.value = Number(input.value) * 0.000976
    } else if (inputTypeValue === 'KB' && resultTypeValue === 'GB') {
        result.value = Number(input.value) * 0.000000953
    } else if (inputTypeValue === 'KB' && resultTypeValue === 'TB') {
        result.value = Number(input.value) * 0.000000000931
    } else if (inputTypeValue === 'KB' && resultTypeValue === 'PB') {
        result.value = Number(input.value) * 0.0000000000009094
    } else if (inputTypeValue === 'KB' && resultTypeValue === 'KB') {
        result.value = input.value
    }

    if (inputTypeValue === 'MB' && resultTypeValue === 'B') {
        result.value = Number(input.value) * 1048576
    } else if (inputTypeValue === 'MB' && resultTypeValue === 'KB') {
        result.value = Number(input.value) * 1024
    } else if (inputTypeValue === 'MB' && resultTypeValue === 'GB') {
        result.value = Number(input.value) * 0.0009765
    } else if (inputTypeValue === 'MB' && resultTypeValue === 'TB') {
        result.value = Number(input.value) * 0.0000009536
    } else if (inputTypeValue === 'MB' && resultTypeValue === 'PB') {
        result.value = Number(input.value) * 0.000000000931
    } else if (inputTypeValue === 'MB' && resultTypeValue === 'MB') {
        result.value = input.value
    }

    if (inputTypeValue === 'GB' && resultTypeValue === 'B') {
        result.value = Number(input.value) * 10737418200000
    } else if (inputTypeValue === 'GB' && resultTypeValue === 'KB') {
        result.value = Number(input.value) * 1048576
    } else if (inputTypeValue === 'GB' && resultTypeValue === 'MB') {
        result.value = Number(input.value) * 1024
    } else if (inputTypeValue === 'GB' && resultTypeValue === 'TB') {
        result.value = Number(input.value) * 0.000976
    } else if (inputTypeValue === 'GB' && resultTypeValue === 'PB') {
        result.value = Number(input.value) * 0.000000953
    } else if (inputTypeValue === 'GB' && resultTypeValue === 'GB') {
        result.value = input.value
    }

    if (inputTypeValue === 'TB' && resultTypeValue === 'B') {
        result.value = Number(input.value) * 10995116300
    } else if (inputTypeValue === 'TB' && resultTypeValue === 'KB') {
        result.value = Number(input.value) * 107374182000
    } else if (inputTypeValue === 'TB' && resultTypeValue === 'MB') {
        result.value = Number(input.value) * 1048576
    } else if (inputTypeValue === 'TB' && resultTypeValue === 'GB') {
        result.value = Number(input.value) * 1024
    } else if (inputTypeValue === 'TB' && resultTypeValue === 'PB') {
        result.value = Number(input.value) * 0.000976
    } else if (inputTypeValue === 'TB' && resultTypeValue === 'TB') {
        result.value = input.value
    }

    if (inputTypeValue === 'PB' && resultTypeValue === 'B') {
        result.value = Number(input.value) * 112589991000
    } else if (inputTypeValue === 'PB' && resultTypeValue === 'KB') {
        result.value = Number(input.value) * 10995116300
    } else if (inputTypeValue === 'PB' && resultTypeValue === 'MB') {
        result.value = Number(input.value) * 1073747820
    } else if (inputTypeValue === 'PB' && resultTypeValue === 'GB') {
        result.value = Number(input.value) * 1048576
    } else if (inputTypeValue === 'PB' && resultTypeValue === 'TB') {
        result.value = Number(input.value) * 1024
    } else if (inputTypeValue === 'PB' && resultTypeValue === 'PB') {
        result.value = input.value
    }
}