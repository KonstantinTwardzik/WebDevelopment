// a) berechnet den Mittelwert eines übergebenen Arrays
function calculateAverage (numbers)
{
    var data = numbers;
    var sum = 0;
    var average = 0;
    for(var i=0; i<data.length; i++)
        {
            sum += data[i];
        }
    average = sum / data.length
    return average;
}

// b) berechnet die Standardabweichung eines übergebenen Arrays
function calculateDeviation (numbers)
{
    var data = numbers
    var variance = 0;
    var average = calculateAverage(data)
    for (var i=0; i<data.length; i++)
    {
        variance += (data[i]-average)*(data[i]-average); 
    }
    variance /= data.length;
    variance = Math.sqrt(variance);
    return variance
}

console.log("Mittelwert: %s",calculateAverage([1, 2, 3, 4, 5]));
console.log("Standardabweichung: %s",calculateDeviation([1, 2, 3, 4, 5]) )
console.log("Mittelwert: %s",calculateAverage([2, 2, 3, 3]));
console.log("Mittelwert: %s",calculateAverage([6, 5, 3, 9, 2]));