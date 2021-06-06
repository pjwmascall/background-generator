const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ';';
}

function randomHexGenerator() {
	let hexStr = Math.round(Math.random()*255).toString(16);
	if (hexStr.length === 1) {
		hexStr = '0' + hexStr;
	}
	return hexStr;
}

function randomColor() {
	color1.value = `#${randomHexGenerator()}${randomHexGenerator()}${randomHexGenerator()}`;
	color2.value = `#${randomHexGenerator()}${randomHexGenerator()}${randomHexGenerator()}`;
	setGradient();
}

randomize.onclick = function() {
	randomColor();
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

setGradient();