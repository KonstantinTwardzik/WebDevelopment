// Fixed die Zerstörte JSon datei und schreibt die Daten in eine neue Datei
function repairData (array)
{
    let repairedArray = [];
    for (let i=0; i<array.length; i++)
    {
        let date = new Date();
        let curObj = array[i]
        let SubscribeDate = toDate(curObj.created_at);
        let UnsubscribeDate = toDate(curObj.unsubscribed_at);

        // Reperatur
        if (UnsubscribeDate < SubscribeDate && UnsubscribeDate != null)
        {
            curObj.unsubscribed_at = toDateString(SubscribeDate);
        }

        repairedArray.push(curObj);
    }
    return repairedArray;
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


// Schreibt Daten in deutsche Zeit Strings zurück
function toDateString (date)
{
    let dateString;
    date.setMonth(date.getMonth() +1);
    date.setDate(date.getDate() +1);
    dateString = date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
    return dateString;
}



var dataset = require(`./dataset-unfixed.json`);
var repairedDataset = repairData(dataset.data);
console.log(`{"$schema": "./.dataset.schema",
	"retrieved_at": "2017-03-27T18:18:27.511Z",
	"data":`)
console.log(JSON.stringify(repairedDataset));
console.log("}")