var calculateAverageAndDeviation = function (array) {
    let average = 0;
    let deviation = 0;

    //Average
    for(let i = 0; i < array.length; i++) {
        average += array[i];
    }
    average /= array.length;
    
    //Deviation
    for(let i = 0; i < array.length; i++) {
        deviation += (array[i] - average) * (array[i] - average);
    }
    deviation /= array.length;
    deviation = Math.sqrt(deviation)
    
    //Return array with average and deviation
    return [average, deviation];
}

//Test function calculateAverageAndDeviation
let result1 = calculateAverageAndDeviation([1, 2, 3, 4, 5]);
let result2 = calculateAverageAndDeviation([2, 2, 3, 3]);
let result3 = calculateAverageAndDeviation([6, 5, 3, 9, 2]);

console.log("Results(Average,Deviation): %s, %s", result1[0], result1[1]);
console.log("Results(Average,Deviation): %s, %s", result2[0], result2[1]);
console.log("Results(Average,Deviation): %s, %s", result3[0], result3[1]);