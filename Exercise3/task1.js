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


var c1 = new container(["hallo", "sers", "wie Gehts"]);
var c2 = new container(["tschö", "servus", "verpiss dich"]);
c1.print();
c2.print();
c1.create("moin moin");
c2.create("pfiat di");
c1.print();
c2.print();

console.log(container.prototype.getByID(1));