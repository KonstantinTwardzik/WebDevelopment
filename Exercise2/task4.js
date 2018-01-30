// Programm über Konsole aufrufen mit: node task4.js > ./dataset-fixed.json

dataSet = require("./dataset-unfixed.json");

for (let index = 0; index < dataSet.data.length; index++) 
{
    if (dataSet.data[index].unsubscribed_at != null)
    {
        createdAtString = dataSet.data[index].created_at;
        unsubscribedAtString = dataSet.data[index].unsubscribed_at;
        createdAtArr = createdAtString.split(".");
        unsubscribedAtArr = unsubscribedAtString.split(".");
        createdAtYear = createdAtArr[2];
        createdAtMonth = createdAtArr[1] - 1;
        createdAtDay = createdAtArr[0];
        unsubscribedAtYear = unsubscribedAtArr[2];
        unsubscribedAtMonth = unsubscribedAtArr[1] - 1;
        unsubscribedAtDay = unsubscribedAtArr[0];
        createdAtDate = new Date (createdAtYear, createdAtMonth, createdAtDay);
        unsubscribedAtDate = new Date (unsubscribedAtYear, unsubscribedAtMonth, unsubscribedAtDay);

        if (unsubscribedAtDate < createdAtDate)
        {
            if (createdAtDay < 9 && createdAtMonth < 9)
            {
                repairedDate = ("0" + (++createdAtDay) + ".0" + (++createdAtMonth) + "." + createdAtYear);
            }
            else if (createdAtDay < 9)
            {
                repairedDate = ("0" + (++createdAtDay) + "." + (++createdAtMonth) + "." + createdAtYear);
            }
            else if (createdAtMonth < 9)
            {
                repairedDate = ((++createdAtDay) + ".0" + (++createdAtMonth) + "." + createdAtYear);
            }
            else
            {
                repairedDate = ((++createdAtDay) + "." + (++createdAtMonth) + "." + createdAtYear);
            }
            
            dataSet.data.unsubscribed_at = repairedDate;
        }
    }
}

repairedDataSet = JSON.stringify(dataSet);
console.log(repairedDataSet);
