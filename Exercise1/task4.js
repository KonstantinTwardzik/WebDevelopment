
function splitString (string) {
  
    let helpArray = string;

    helpArray = helpArray.replace(/,/g, " ");
    helpArray = helpArray.replace(/und/g, "");
    helpArray = helpArray.replace(/  /g, " "); 
    helpArray = helpArray.split(" ");

    console.log(helpArray)
    return helpArray;
}



let names = ["Justus, Peter und Bob", "Christian", "Susi und Strolch", "Heinz", "Daniel,Gert"]
let sortedNames = [];

names.forEach(function(element) {
    splitString(element);
});
