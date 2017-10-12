let button = {
	onClick: null,
	click: function () {
		if (this.onClick && typeof this.onClick === "function") {
			this.onClick();
		}
	}
};

this.name = "MyClickHandler";

function onClick() {
	console.log("Click handled by: %s", this.name);
}

//button.onClick = onClick;													// Click handled by: undefined
//button.onClick = onClick.bind(this);										// Click handled by: MyClickHandler
button.onClick = () => console.log("Click handled by: %s", this.name);		// Click handled by: MyClickHandler
button.click();
