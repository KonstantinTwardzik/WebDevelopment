define(
	"MyAMDModuleC",
	["MyAMDModuleA", "MyAMDModuleB"],
	function (MyAMDModuleA, MyAMDModuleB) {
		return {
			print: function () {
				console.log("MyAMDModuleC");
				MyAMDModuleA.print();
				MyAMDModuleB.print();
			}
		};
	}
);
