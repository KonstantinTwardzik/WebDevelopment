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



var c1 = new container(["hallo", "sers", "wie Gehts"]);
var c2 = new container(["tschö", "servus", "verpiss dich"]);
var c3 = new typedContainer(["C4D", "Zbrush"], "Tools");
c1.create("moin moin");
c2.create("pfiat di");
c3.create("Octane", "Tools");
//c3.create("PUBG", "Games"); triggers WrongTypeException 
c1.print();
c2.print();
c3.print();