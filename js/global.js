let root = document.querySelector(":root")
let theme_switcher = document.querySelector("#theme-switcher");
let dropdown = document.querySelector("#dropdown");
let droped = false;
let themes = [
	{
		nome: "Tema25",
		primary: "#5E412F",
		secondary: "#78C0A8",
		disabled: "#D4D4D4",
		text: "#FFFFFF"
	},

	{
		nome: "Tema23",
		primary: "#7C3982",
		secondary: "#F7A1FF",
		disabled: "#D4D4D4",
		text: "#FFFFFF"
	},

	{
		nome: "Tema41",
		primary: "#88ABC2",
		secondary: "#D0E0EB",
		disabled: "#D4D4D4",
		text: "#FFFFFF"
	},

	{
		nome: "Tema80",
		primary: "#fe4365",
		secondary: "#83af9b",
		disabled: "#D4D4D4",
		text: "#FFFFFF"
	}
]

for (let i = 0; i < themes.length; i++) {
	let t = document.createElement("p");
	t.className = "theme-btn"
	t.innerHTML = themes[i].nome;
	dropdown.appendChild(t)
}

function drop() {
	if (droped == false) {
		dropdown.style.display = "block"
		droped = true;
	} else {
		dropdown.style.display = "none";
		droped = false;
	}
}

function selectTheme(t) {
	for (let i = 0; i < themes.length; i++) {
		const element = themes[i];
		if (element.nome == t){
			root.style.setProperty("--primary", element.primary);
			root.style.setProperty("--secondary", element.secondary);
			window.localStorage.setItem("theme", element.nome)
		}
	}
}

document.querySelectorAll('.theme-btn').forEach(element => {
	element.addEventListener('click', () => {              
	  selectTheme(element.innerHTML)
	})
})

if (window.localStorage.getItem("theme") != undefined) {
	selectTheme(window.localStorage.getItem("theme"))
}

window.downloadFile = function (sUrl) {

	//iOS devices do not support downloading. We have to inform user about this.
	if (/(iP)/g.test(navigator.userAgent)) {
		alert('Your device does not support files downloading. Please try again in desktop browser.');
		return false;
	}

	//If in Chrome or Safari - download via virtual link click
	if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
		//Creating new link node.
		var link = document.createElement('a');
		link.href = sUrl;

		if (link.download !== undefined) {
			//Set HTML5 download attribute. This will prevent file from opening if supported.
			var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
			link.download = fileName;
		}

		//Dispatching click event.
		if (document.createEvent) {
			var e = document.createEvent('MouseEvents');
			e.initEvent('click', true, true);
			link.dispatchEvent(e);
			return true;
		}
	}

	// Force file download (whether supported by server).
	if (sUrl.indexOf('?') === -1) {
		sUrl += '?download';
	}

	window.open(sUrl, '_self');
	return true;
}

window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;