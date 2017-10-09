// Die Container "Klasse"
Tool.Container = [];
Tool.ID = 0;

function Tool(arrayIn) {
    this.ID = Tool.ID++;
    this.ContainedArray = arrayIn;
    Tool.Container.push(this);
}

Tool.prototype.create = function(element){
    return this.ContainedArray.push(element);
}

Tool.prototype.getAll = function(){
    console.log(this);
}

Tool.prototype.getByID = function (ID){
    console.log(Tool.Container[ID])
}

// Initialisierung 
var substancePainter = new Tool(["Substance Painter", "6394-7B38-3E77C", "2017-08-16", "Texturing"]);
var substanceDesigner = new Tool(["Substance Designer", "A5F3-B578-AD969", "2017-08-15", "Texturing"]);
var cinema4D = new Tool (["Cinema 4D", "628F-F91E4-366D", "2015-06-23", "Modeling"]);
var zBrush = new Tool (["ZBrush", "2DA5-F76F-516E7", "2016-12-23", "Sculpting"]);
var photoshop = new Tool (["Adobe Photoshop", "E9D7-DE1B7-6C89", "2016-03-02", "Post Production"]);
var maya = new Tool (["Autodesk Maya", "462D-EF3B-2F35D", "2017-09-06", "Modeling"]);

// Ausführung
photoshop.create("Magic");
photoshop.getAll();
maya.getAll();
Tool.prototype.getByID(3);

