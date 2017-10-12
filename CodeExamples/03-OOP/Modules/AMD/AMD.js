requirejs.config({
	baseUrl: "lib"		// module path relative to HTML page
});

require(["MyAMDModule"], function (MyAMDModule) {
	var p = new MyAMDModule.Person("Hans", "Wurst");
	p.print();
	var e = new MyAMDModule.Employee("Jane", "Doe", 55000);
	e.print();
});

require(["MyAMDModuleC"], function (MyAMDModuleC) {
	MyAMDModuleC.print();
});
