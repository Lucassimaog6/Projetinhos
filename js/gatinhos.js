const img = document.querySelector("#img");
var img_url = ""

function gerar() {
	fetch("https://api.thecatapi.com/v1/images/search").then((resp) => resp.json()).then(function (data) {
		img.innerHTML = `<img download src="${data[0].url}"/>`;
		img_url = data[0].url;
	})
}
function copiar() {
	navigator.clipboard.writeText(img_url)
}

function download() {
	if (img_url != "") {
		fetch(img_url, { mode: "no-cors" }).then(resp => resp.blob()).then(blob => {
			let blob_url = window.URL.createObjectURL(blob);
			let a = document.createElement("a");
			a.download = img_url.replace(/^.*[\\\/]/, '');
			a.href = blob_url;
			document.body.appendChild(a);
			a.click();
			a.remove();
		})
	}
}