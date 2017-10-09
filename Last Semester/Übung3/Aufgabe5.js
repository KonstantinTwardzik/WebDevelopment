// In die Variable ToolClass wird die Tool "Klasse" gespeichert um Namensüberschneidung zu verhindern
var ToolClass = ToolClass || (function (){
Tool.Container = [];
Tool.ID = 0;
function Tool(arrayIn) {
    this.ID = Tool.ID++;
    this.ContainedArray = arrayIn;
    Tool.Container.push(this);
};
Tool.prototype.create = function(element){
    return this.ContainedArray.push(element);
};
Tool.prototype.getAll = function(){
    console.log(this);
};
Tool.prototype.getByID = function (ID){
    console.log(Tool.Container[ID]);
};

// Die Pseudoklassisch abgeleitete SecureContainer "Klasse"
function SecureContainer (functionArray){
    Tool.call(this, functionArray);
    this.data = require("./MOCK_DATA.json")
}
//Überschreiben des impliziert kreierten Prototypen und Prototypen verlinken
SecureContainer.prototype = Object.create(Tool.prototype);
SecureContainer.prototype.constructor = SecureContainer;
// Überschreibende Methoden
SecureContainer.prototype.getData = function () {
    return this.data;
}
SecureContainer.prototype.getAll = function () {
    while(this.ContainedArray.length) {
        this.ContainedArray.shift().call();
    }
}

return{
    Tool: Tool,
    SecureContainer: SecureContainer
};

})();


// Array von verschiedene functionen, die an SecureContainer übergeben wird
functionArray = [
    (function () {
        SecuredData = JSON.parse(JSON.stringify(SecureEMail.getData()));
    }),

    (function () {
        for (let i=0; i<SecuredData.length; i++)
        {
            if (SecuredData[i]["e-mail_isPublic"] == false)
            {
                delete SecuredData[i]["e-mail"];
            }
        }
    }),

    (function () {
        console.log(SecuredData);
    })
]

//Ausführung
var SecureEMail = new ToolClass.SecureContainer(functionArray);
SecureEMail.getAll();
