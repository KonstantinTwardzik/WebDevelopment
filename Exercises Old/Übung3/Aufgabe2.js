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
    }
    Tool.prototype.getByID = function (ID){
        console.log(Tool.Container[ID])
    }
    return{Tool: Tool};
})();

// Initialisierung 
var substancePainter = new ToolClass.Tool(["Substance Painter", "6394-7B38-3E77C", "2017-08-16", "Texturing"]);
var substanceDesigner = new ToolClass.Tool(["Substance Designer", "A5F3-B578-AD969", "2017-08-15", "Texturing"]);
var cinema4D = new ToolClass.Tool (["Cinema 4D", "628F-F91E4-366D", "2015-06-23", "Modeling"]);
var zBrush = new ToolClass.Tool (["ZBrush", "2DA5-F76F-516E7", "2016-12-23", "Sculpting"]);
var photoshop = new ToolClass.Tool (["Adobe Photoshop", "E9D7-DE1B7-6C89", "2016-03-02", "Post Production"]);
var maya = new ToolClass.Tool (["Autodesk Maya", "462D-EF3B-2F35D", "2017-09-06", "Modeling"]);

// Ausführung
photoshop.create("Magic");
photoshop.getAll();
maya.getAll();
ToolClass.Tool.prototype.getByID(3);

