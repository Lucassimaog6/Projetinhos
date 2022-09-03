const download_btn = document.querySelector("#download")
const img = document.querySelector("#img");
function gerar() {
	fetch("https://api.thecatapi.com/v1/images/search").then((resp) => resp.json()).then(function (data) {
		img.innerHTML = `<img src="${data[0].url}"/>`;
		img_url = data[0].url;
	})
}
function copiar() {
	navigator.clipboard.writeText(img_url)
}