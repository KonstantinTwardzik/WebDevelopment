// Initialisierung der json Datei in ein js-Objekt
dataSet = require("./dataset-fixed.json");

// 1. Wie viele Einträge hat der Datensatz?
console.log("Einträge: " + dataSet.data.length);

// 2. Wieviele Subscriptions von Frauen sind im Datensatz enthalten?
var femaleSubscriptions = 0;
for (let index = 0; index < dataSet.data.length; index++) 
{
    if (dataSet.data[index].gender == "Female")
    {
        femaleSubscriptions++;
    }    
}
console.log("Weiblich: " + femaleSubscriptions);

// 3. Wieviele derzeit aktive Subscriptions sind seit dem 01.01.2017 hinzugekommen?
var newActiveSubscriptions = 0;
var comparisonDate = new Date(2017, 0, 1);
for (let index = 0; index < dataSet.data.length; index++) 
{
    let indexDateString = dataSet.data[index].created_at;      
    let indexDateArr = indexDateString.split(".");
    let year = parseFloat(indexDateArr[2]);
    let month = parseFloat(indexDateArr[1]) - 1;
    let day = parseFloat(indexDateArr[0]);
    let indexDate = new Date(year, month, day);
    
    if (indexDate >= comparisonDate  && dataSet.data[index].unsubscribed_at == null)
    {
        newActiveSubscriptions++;
    }  

}
console.log("Neu und Aktiv: " + newActiveSubscriptions);

// 4. Wieviele Subscriptions wurden bis zum 01.01.2017 (exklusive) wieder gekündigt?
// 5. Wieviele aktive Nutzer sind insgesamt erfasst?
var terminatedSubscriptions = 0;
var activeUsers = 0;
var comparisonDate2 = new Date(2017, 0, 1);
for (let index = 0; index < dataSet.data.length; index++) 
{
    if(dataSet.data[index].unsubscribed_at != null)
    {
        let indexDateString = dataSet.data[index].unsubscribed_at;      
        let indexDateArr = indexDateString.split(".");
        let year = parseFloat(indexDateArr[2]);
        let month = parseFloat(indexDateArr[1]) - 1;
        let day = parseFloat(indexDateArr[0]);
        let indexDate = new Date(year, month, day);
    
        if (indexDate < comparisonDate)
        {
            terminatedSubscriptions++;
        }  
    }
    else
    {
        activeUsers++;
    }
}
console.log("Gekündigt: " + terminatedSubscriptions);
console.log("Aktiv: " + activeUsers);

// 6. (Bonus) Welche Themen haben die frühesten, noch aktiven Nutzer "subscribed"?
var firstUsersTopics  = [];
var comparisonDate3 = new Date(2016, 0, 1);
for (let index = 0; index < dataSet.data.length; index++) 
{
    if(dataSet.data[index].unsubscribed_at == null)
    {
        let indexDateString = dataSet.data[index].created_at;      
        let indexDateArr = indexDateString.split(".");
        let year = parseFloat(indexDateArr[2]);
        let month = parseFloat(indexDateArr[1]) - 1;
        let day = parseFloat(indexDateArr[0]);
        let indexDate = new Date(year, month, day);


    
        if (indexDate <= comparisonDate3)
        {
            if(indexDate < comparisonDate3)
            {
                firstUsersTopics = [];
            }
            firstUsersTopics.push(dataSet.data[index].topics);
            comparisonDate3 = indexDate;
        }  

    }
}

console.log("Themen der frühesten noch aktiven Nutzer: " + firstUsersTopics);
