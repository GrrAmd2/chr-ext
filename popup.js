const currentCountWord = document.getElementById("current-count-word");
const maxCountWord = document.getElementById("max-count-word");

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

// Send message to run word-filter
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	chrome.tabs.sendMessage(tabs[0].id, { action: "run-filter" });
});
let data;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.status === "run-filter-successful") {
		data = message.counters;
		currentCountWord.innerText = 1;
		maxCountWord.innerText = data.length;
		disableButtons();

		renderView();
	}
});

document
	.getElementById("share-whatsapp")
	.addEventListener("click", () => shareOn("whatsapp"));
document
	.getElementById("share-twitter")
	.addEventListener("click", () => shareOn("twitter"));

// get current tab url chrome and save in a variable
async function urlNav() {
	const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
	return tabs[0].url;
}

async function shareOn(media) {
	const chromeStore = "https://chrome.google.com/webstore";
	const url = await urlNav();
	let socialText;

	if (media === "whatsapp") {
		socialText = `Con #MásDatos podemos dar vuelta la falta de representatividad y diversidad en los equipos de STEM. Instala esta extensión de Chrome ${chromeStore} by @chicasentec y conoce a las personas que quedaron fuera de esta nota ${url}`;
	} else if (media === "tweeter") {
		socialText = `Con #MásDatos podemos dar vuelta la falta de representatividad y diversidad en los equipos de STEM. Instala esta extensión de Chrome y conoce a las personas que quedaron fuera de esta nota ${url}: ${chromeStore} by @chicasentec`;
	}

	buildText(socialText, media);
}

function buildText(text, media) {
	const links = {
		whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
		twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			text
		)}`,
	};
	window.open(links[media], "_blank");
}

nextButton.addEventListener("click", () => {
	if (currentCountWord.innerText < maxCountWord.innerText) {
		currentCountWord.innerText = parseInt(currentCountWord.innerText) + 1;
	}
	disableButtons();
	renderView();
});

previousButton.addEventListener("click", () => {
	if (currentCountWord.innerText > 1) {
		currentCountWord.innerText = parseInt(currentCountWord.innerText) - 1;
	}
	disableButtons();
	renderView();
});

function disableButtons() {
	if (currentCountWord.innerText == 1) {
		previousButton.classList.add("disabled");
	} else {
		previousButton.classList.remove("disabled");
	}

	if (currentCountWord.innerText == maxCountWord.innerText) {
		nextButton.classList.add("disabled");
	} else {
		nextButton.classList.remove("disabled");
	}
}

function renderView() {
	const currentWord = data[currentCountWord.innerText - 1];
	const text = currentWord.texto;
	const small = currentWord.small;
	const palabra = currentWord.palabra;
	const fuente = currentWord.fuente;
	// console.log({ text, small, palabra });
	const linkElement = `
    En esta nota hay personas que están quedando afuera. 
    Entra <a class="link" href="https://chicasentecnologia.org/" target="_blank"><b>aquí</b></a> y entérate quiénes son.
    `;
	const html = `
    <h3 class="word">${text}</h3>
    <div class="source">
    ${fuente}
    </div>
    <hr class="separator">
    <span class="small">
    ${linkElement}
    </span>
    `;
	document.getElementById(
		"current-word"
	).innerHTML = `[ ${currentWord.palabra.toUpperCase()} ]`;
	document.querySelector(".content").innerHTML = html;
}
