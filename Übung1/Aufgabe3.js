// reduziert data auf den Summierten gewichteten Wert
function addWeightedSum (result, curVal, curInd)
{
    var weightedSum = curVal.value * curVal.weight;
    return result += weightedSum;
}

// reduziert data auf die gesamtwichtung
function addWeight (result, curVal, curInd)
{
    var weight = curVal.weight;
    return result += weight;
}

// errechnet die gewichtete Summe aus gewichtetem wert und gesamtwichtung
function calcWeightedSum (array)
{
    var sum = array.reduce(addWeightedSum, 0);
    var weight = array.reduce(addWeight, 0);
    var weightedSum = sum / weight;
    return weightedSum;
}




var data = 
[
    { value: 10, weight: 1 },
    { value: 16, weight: 0.3 },
    { value: 12, weight: 0.4 },
    { value: 20, weight: 0.5 },
    { value: 32, weight: 0.4 },
    { value: 11, weight: 0.3 },
    { value: 8, weight: 1 },
];

console.log(calcWeightedSum(data));

