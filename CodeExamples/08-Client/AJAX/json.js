(function () {
	let request = new XMLHttpRequest();
	request.addEventListener("error", error => { console.error(error.toString()); });
	request.addEventListener("load", () => { 
		if (request.status === 200) {
			listFilms(request.response); 
		}
	});
	request.open("GET", "http://swapi.co/api/films/");
	request.setRequestHeader("Accept", "application/json");
	request.responseType = "json";
	request.send();

	function listFilms(films) {
		let sortedFilms = new Array(films.count);
		for (let film of films.results) {
			sortedFilms[film.episode_id - 1] = film.title;
		}
		
		let list = document.getElementById("films");
		for (let i = 0; i < sortedFilms.length; i++) {
			let item = document.createElement("li");
			item.textContent = sortedFilms[i];
			list.appendChild(item);
		}
	}
})();