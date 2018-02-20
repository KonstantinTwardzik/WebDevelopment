var ContainerJSModule = require("./task3a.js");

var c1 = new ContainerJSModule.container(["hallo", "sers", "wie Gehts"]);
var c2 = new ContainerJSModule.container(["tschö", "servus", "verpiss dich"]);
c1.print();
c2.print();
c1.create("moin moin");
c2.create("pfiat di");
c1.print();
c2.print();

console.log(ContainerJSModule.container.prototype.getByID(1));