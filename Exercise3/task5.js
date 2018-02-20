// Container Module mit "Klassen": container, typedContainer und secureContainer
var ContainerModule = ContainerModule || (function () 
{
    // Die Container "Klasse"
    container.List = [];
    container.ID = 0;
    function container(arr)  
    {
        this.objects = arr;
        this.ID = container.ID;
        container.List.push(this);
        container.ID++;
    }
    container.prototype.create = function (element)
    {
        this.objects.push(element);
    }
    container.prototype.getAll = function ()
    {
        return this.objects;
    }
    container.prototype.print = function ()
    {
        console.log("Container No.: %s", this.ID);
        console.log("Objects: %s", this.objects);
    }
    container.prototype.getByID = function (id)
    {
        return container.List[id];
    }

    // Die abgeleitete TypedContainer "Klasse"
    function typedContainer (arr, type)
    {
        container.call(this, arr);
        this.type = type;
    }
    typedContainer.prototype = Object.create(container.prototype);
    typedContainer.prototype.constructor = container;
    typedContainer.prototype.create = function (element, type)
    {
        if (type == this.type)
        {
            container.prototype.create.call(this, element);
        }
        else
        {
            throw new WrongTypeException("not matching Type");
        }
    }
    typedContainer.prototype.print = function ()
    {
        container.prototype.print.call(this);
        console.log("Type: %s", this.type);
    }
    function WrongTypeException (message)
    {
        this.message = message;
        console.error(this.message);
    }

    // Die abgeleitete SecureContainer "Klasse"
    function secureContainer (arr)
    {
        container.call(this, arr);
    }
    secureContainer.prototype = Object.create(container.prototype);
    secureContainer.prototype.constructor = container;
    secureContainer.prototype.getAll = function ()
    {
        var clonedArray = JSON.parse(JSON.stringify(this.objects));
        for (let index = 0; index < clonedArray.length; index++) 
        {
            if (clonedArray[index]["e-mail_isPublic"] == false)
            {
                clonedArray[index]["e-mail"] = "Mail is Confidential";
            }
        }
        return clonedArray;
    }

    return {container : container, typedContainer : typedContainer, secureContainer : secureContainer};
})();

//Anwendung
var dataSet = require("./MOCK_DATA.json");
var confidentialData = new ContainerModule.secureContainer(dataSet);
var isItReallyConfidential = confidentialData.getAll();

console.log("------------------------------------------------------------------------------");

for (let index = 0; index < isItReallyConfidential.length; index++) 
{
    console.log(isItReallyConfidential[index]);    
}

console.log("------------------------------------------------------------------------------");

for (let index = 0; index < confidentialData.objects.length; index++) 
{
    console.log(confidentialData.objects[index]);
}

console.log("------------------------------------------------------------------------------");