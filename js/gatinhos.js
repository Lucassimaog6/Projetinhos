const img = document.querySelector("#img");
const URL = "https://api.thecatapi.com/v1/images/search";
document.querySelector("#btn").addEventListener("click", () => {
	fetch(URL).then((resp) => resp.json()).then(function (data) {
		img.innerHTML = `<img src="${data[0].url}"/>`
	})
})