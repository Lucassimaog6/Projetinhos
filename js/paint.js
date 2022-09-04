let color = document.querySelector("#color")
let slider = document.querySelector("#slider")

let canvas = document.querySelector(".canvas");
let canvasW = canvas.clientWidth;
let canvasH = canvas.clientHeight;
function setup() {	
	var c = createCanvas(canvasW, canvasH);
	c.parent(canvas);
	background(255, 255, 255);
}

function draw() {
	if (mouseIsPressed) {
		stroke(color.value);
		strokeWeight(slider.value);
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function limpar() {
	background(255, 255, 255);
}

function salvar() {
	saveCanvas();
}


