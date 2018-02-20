// https reques via asynchronous Callback
var https = require("https");

responseHandler = function (res)
{
    // StatusCode und ContentTyp der Antwort werden festgelegt
    const {statusCode} = res;
    const contentType = res.headers["content-type"];


    // Falls Statuscode falsch wird Error geworfen
    let error;
    if (statusCode !== 200)
    {
        error = new Error("Request Failed. \n" + `StatusCode: ${statusCode}`);
    }
    else if (!/^application\/json/.test(contentType))
    {
        error = new Error("Innvalid content-type. \n" + `Expected application/json but received ${contentType}`);
    }
    if (error)
    {
        console.error(error.message);
        res.resume();
        return;
    }

    // Falls kein Error aufgetaucht fange an zu Streamen
    res.setEncoding("UTF-8");
    let rawData = ""; 
    
    handleRegularChunk = function (chunk)
    {
        rawData += chunk;
    }
    handleLastChunk = function ()
    {
        try 
        {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        }
        catch (e)
        {
            console.error(e.message);
        }
    }
    
    res.on("data", handleRegularChunk);
    res.on("end", handleLastChunk);   
}

https.get("https://swapi.co/api/planets/3/", responseHandler).on("error", function (e)
{
    console.error(`Got error: ${e.message}`);
});

