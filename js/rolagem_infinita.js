let main = document.querySelector("#main")
let qntDivs = 1;
let arrDivs = [];

if (window.matchMedia("(min-width: 1200px)").matches) {
	qntDivs = 3;
} else if (window.matchMedia("(min-width: 800px)").matches) {
	qntDivs = 2;
}

for (let i = 0; i < qntDivs; i++) {
	tmp = document.createElement("div");
	arrDivs.push(tmp)
	main.appendChild(tmp);
}

function loadImages() {
	for (let i = 0; i <= 20; i++) {
		arrDivs.forEach(element => {
			let url = "https://api.thecatapi.com/v1/images/search";
			fetch(url).then((resp) => resp.json()).then(function (data) {
				element.innerHTML += `<img src="${data[0].url}"/>`
			})
		})

	}
}

loadImages()

window.addEventListener('scroll', () => {
	if (window.scrollY + window.innerHeight >=
		document.documentElement.scrollHeight - 50) {
		loadImages();
	}
})