let data = 
[
    { value: 10, weight: 1 },
    { value: 16, weight: 0.3 },
    { value: 12, weight: 0.4 },
    { value: 20, weight: 0.5 },
    { value: 32, weight: 0.4 },
    { value: 11, weight: 0.3 },
    { value: 8, weight: 1 }
];

function calcWeightedSum() 
{
    let weightedSum = this.reduce(function(acc,val) {
        return acc += val["value"] * val["weight"];
    }, 0);
    return weightedSum
}

data.calcWeightedSum = calcWeightedSum.bind(data);

console.log(data.calcWeightedSum());