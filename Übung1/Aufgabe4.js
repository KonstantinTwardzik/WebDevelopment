function split(curVal, index, array)
{
    let newVal;
    newVal = curVal.replace(",", " ");
    newVal = newVal.replace("und", " ");
    newVal = newVal.replace("   ", " ")
    newVal = newVal.replace("  ", " ");
    newVal = newVal.split(" ");
    for (let i=0; i<newVal.length; i++)
    {
        array.push(newVal[i]);
    }
}


let data =
[
    "Justus, Peter und Bob",
    "Christian",
    "Susi und Strolch",
    "Heinz",
    "Daniel,Gert"
]
var x = data.length;
data.forEach(split);
data.splice(0,x);
data.sort();
console.log(data);
