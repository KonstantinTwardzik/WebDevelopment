// Moduldatei: Hier wird die Tool "Klasse" bereitgestellt

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
    console.log(this);
}
Tool.prototype.getByID = function (ID){
    console.log(Tool.Container[ID])
}


// Hier wird die Tool "Klasse" exportiert
module.exports.Tool = Tool;