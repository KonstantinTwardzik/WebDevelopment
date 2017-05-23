// Zählt verschieden Teile des Datensatzes und gibt diese aus
function counter (array)
{
    var countAll = 0;
    var countFem = 0;
    var countNew = 0;
    var countUns = 0;
    var countAct = 0;
    var topics;
    var earliestDate = new Date("2017-01-01");
    
    for (let i=0; i<array.length; i++)
    {
        var curObj = array[i];
        var SubscribeDate = toDate(curObj.created_at);
        var UnsubscribeDate = toDate(curObj.unsubscribed_at);
        var proofDate = new Date("2017-01-01");

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
            
        // Themen der frühesten noch aktiven Nutzer - falsch implementiert
        if (curObj.unsubscribed_at == null && SubscribeDate <= earliestDate)
            {
            topics = curObj.topics;
            earliestDate = SubscribeDate;

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
            var parts = dateString.split(".");
            return new Date (parts[2], parts[1]-1, parts[0],2);
        }
    else return null;
}

//Entfernt das erste Objekt im Array, hinterlässt jedoch einen leeren index
function deleteElement (array)
{
    console.log(array.length);
    delete array[0];
    console.log(array.length);
}

//Entfernt Objekte im Array ganz
function spliceElement (array)
{
    console.log(array.length);
    array.splice(999,1);
    array.splice(498,1);
    array.splice(0,1);
    console.log(array.length);
}



var dataset = require(`./dataset.json`);

counter(dataset.data);
console.log();
deleteElement(dataset.data);
console.log();
spliceElement(dataset.data);
console.log();
console.log(Object.keys(dataset.data[0]));