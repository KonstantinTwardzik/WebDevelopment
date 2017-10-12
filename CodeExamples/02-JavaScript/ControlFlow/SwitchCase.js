var month = new Date().getMonth() + 1;

switch (month) {
	case 3:
	case 4:
	case 5:
		console.log("Frühling");
		break;
	case 6:
	case 7:
	case 8:
		console.log("Sommer");
		break;
	case 9:
	case 10:
	case 11:
		console.log("Herbst");
		break;
	case 12:
	case 1:
	case 2:
		console.log("Winter");
		break;
	default:
		console.error("WTF?!");
}
