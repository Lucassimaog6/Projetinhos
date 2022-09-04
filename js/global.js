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