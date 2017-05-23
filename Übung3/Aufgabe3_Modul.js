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
    return this;
};

Tool.prototype.getByID = function (ID){
    return Tool.Container[ID]
};

// Hier wird die Tool "Klasse" exportiert

module.exports.Tool = Tool;