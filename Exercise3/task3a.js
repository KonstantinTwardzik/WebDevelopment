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
    console.log(this.objects);
}

container.prototype.getByID = function (id)
{
    return container.List[id];
}

module.exports.container = container; 


