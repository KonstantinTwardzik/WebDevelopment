// Zählt verschieden Teile des Datensatzes und gibt diese aus
function counter (array)
{
    let countAll = 0;
    let countFem = 0;
    let countNew = 0;
    let countUns = 0;
    let countAct = 0;
    let topics = [];
    
    let earliestDate = toDate(array[0].created_at);

    for (let i=0; i<array.length; i++)
    {
        let curObj = array[i];
        let SubscribeDate = toDate(curObj.created_at);
        let UnsubscribeDate = toDate(curObj.unsubscribed_at);
        let proofDate = new Date("2017-01-01");

        // Zählung einträge
        countAll++;

        // Zählung Frauen 
        if (curObj.gender == "Female")
            countFem++;

        // Zählung dazugekommener Einträge, die noch aktiv sind
        if (SubscribeDate >= proofDate && curObj.unsubscribed_at == null)
            countNew++;
            
        // Zählung kündigungen bis 01.01.2017
        if (UnsubscribeDate != null && UnsubscribeDate < proofDate)
            countUns++;

        // Zählung aktiver Nutzer
        if (curObj.unsubscribed_at == null)
            countAct++;
            
        // Themen der frühesten noch aktiven Nutzer 
        if (SubscribeDate <= earliestDate && UnsubscribeDate == null)
        {
            if (SubscribeDate < earliestDate)
            {
                earliestDate = SubscribeDate;
                topics = [];
                topics.push(curObj.topics);
            }
            else
            {
                topics.push(curObj.topics);
            }
        }
    }

    console.log("Einträge: " + countAll);
    console.log("Frauen: " + countFem);
    console.log("Dazugekommen seit 01.01.2017 & aktiv: " + countNew);
    console.log("Gekündigt bis 01.01.2017: " + countUns);
    console.log("Aktive Nutzer: " + countAct);
    console.log("Themen der frühesten noch aktiven Nutzer: " + topics);
}

// Schreibt Strings in deutsche Zeitzählung in ein date-Objekt
function toDate (dateString)    
{
    if(dateString != null)
        {
            let parts = dateString.split(".");
            return new Date (parts[2], parts[1]-1, parts[0],2);
        }
    else return null;
}

// JSON Datei auslesen und Counter laufen lassen
let dataset = require(`./dataset.json`);
counter(dataset.data);

// delete löscht Elemente. Hinterlässt jedoch ein leeres Objekt an jener Stelle
console.log(dataset.data);
delete dataset.data[0];
delete dataset.data[499];
delete dataset.data[999];
console.log(dataset.data);

// splice Eliminiert die Elemente ganz aus dem Array
dataset.data.splice(0,1);
dataset.data.splice(499,1);
dataset.data.splice(900,99);
console.log(dataset.data);

// Test der Aufgabe 4 (Leider immer noch falsches Ergebnis bei: Gekündigt bis 01.01.2017)
let dataSetFixed = require ("./dataset-fixed.json");
counter(dataSetFixed.data);