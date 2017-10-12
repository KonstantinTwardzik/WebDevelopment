(function () {
	fetch("http://swapi.co/api/films/").then(response => {
		if (response.ok) {
			return response.json();
		}
	}).then(result => {
		listFilms(result);
	}).catch(error => { 
		console.error(error.message);
	});

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