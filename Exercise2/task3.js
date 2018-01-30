// Initialisierung der json Datei in ein js-Objekt
dataSet = require("./dataset.json");
console.log("Einträge: " + dataSet.data.length);

// Durch delete wird das Objekt gelöscht aber nicht die Referenz des Arrays
// Objekt = undefined - Arraylänge unverändert
delete dataSet.data[0];
delete dataSet.data[500];
delete dataSet.data[999];
console.log("Einträge: " + dataSet.data.length);


// Löscht die Stelle im Array mit dem Objekt
// zu beachten, dass wenn man vorne im Array etwas löscht
// alle Objekte dannach ein Feld vorrücken!
dataSet.data.splice(0,1);
dataSet.data.splice(500,1);
dataSet.data.splice(997,1);
console.log("Einträge: " + dataSet.data.length);



