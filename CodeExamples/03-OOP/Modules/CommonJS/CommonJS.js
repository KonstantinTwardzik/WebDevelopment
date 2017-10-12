var MyCommonJSModule = require("./lib/MyCommonJSModule");

var p = new MyCommonJSModule.Person("Hans", "Wurst");
p.print();
var e = new MyCommonJSModule.Employee("Jane", "Doe", 55000);
e.print();
