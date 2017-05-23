// In die Variable ToolClass wird die Tool "Klasse" gespeichert um Namensüberschneidung zu verhindern
var ToolClass = ToolClass || (function (){

// Die Tool "Klasse"
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
    return this;
};

Tool.prototype.getByID = function (ID){
    return Tool.Container[ID]
};

// Die Pseudoklassisch abgeleitete TypedTool "Klasse" 
function TypedTool (arrayIn, type){
    Tool.call(this, arrayIn);
    this.type = type;
}

// Überschreiben des impliziert kreierten Prototypen und Prototypen verlinken 
TypedTool.prototype = Object.create(Tool.prototype);
TypedTool.prototype.constructor = TypedTool;

// Überschreibende Methoden
TypedTool.prototype.create = function (element){
    if (typeof(element) == this.type){
        Tool.prototype.create.call(this, element);
    }
    else{
        console.error("Zu krasser Typ");
    }
}


// Die Pseudoklassisch abgeleitete SecureContainer "Klasse"
function SecureContainer (functionArray){
    this.functionArray = functionArray;
}

//Überschreiben des impliziert kreierten Prototypen und Prototypen verlinken
SecureContainer.prototype = Object.create(Tool.prototype);
SecureContainer.prototype.constructor = SecureContainer;

// Überschreibende Methoden
TypedTool.prototype.create = function (){
        this.element = require("./MOCK_DATA.json")
        Tool.prototype.create.call(this, element);

}

return{
    Tool: Tool,
    TypedTool: TypedTool,
    SecureContainer: SecureContainer
};

})();

// Initialisierung Tool
var substancePainter = new ToolClass.Tool(["Substance Painter", "6394-7B38-3E77C", "2017-08-16", "Texturing"]);
var substanceDesigner = new ToolClass.Tool(["Substance Designer", "A5F3-B578-AD969", "2017-08-15", "Texturing"]);
var cinema4D = new ToolClass.Tool (["Cinema 4D", "628F-F91E4-366D", "2015-06-23", "Modeling"]);
var zBrush = new ToolClass.Tool (["ZBrush", "2DA5-F76F-516E7", "2016-12-23", "Sculpting"]);
var photoshop = new ToolClass.Tool (["Adobe Photoshop", "E9D7-DE1B7-6C89", "2016-03-02", "Post Production"]);
var maya = new ToolClass.Tool (["Autodesk Maya", "462D-EF3B-2F35D", "2017-09-06", "Modeling"]);

// Initialisierung TypedTool
var mayaTyped = new ToolClass.TypedTool (["Autodesk Maya", "462D-EF3B-2F35D", "2017-09-06", "Modeling"], "string");

// Initialisierung SecureContainer


// Ausführung Tool
photoshop.create("Magic");
console.log(photoshop.getAll());
console.log(maya.getAll());
console.log(ToolClass.Tool.prototype.getByID(3));

// Ausführung TypedTool
mayaTyped.create("over9000");
mayaTyped.create(9001);
console.log(mayaTyped.getAll());

// Ausführung SecureContainer

