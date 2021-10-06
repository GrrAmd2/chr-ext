const currentCountWord = document.getElementById("current-count-word");
const maxCountWord = document.getElementById("max-count-word");

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

// Send message to run word-filter
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	chrome.tabs.sendMessage(tabs[0].id, { action: "run-filter" });
});
let data = [
	{
		palabra: "programador",
		texto:
			"De las personas que estudian carreras vinculadas a la programación en Argentina, sólo el 16% son mujeres. (CET, 2018)",
		small:
			"El 16% de quienes estudian carreras vinculadas a programación en Argentina son mujeres. (CET, 2020) En esta nota hay personas que se están quedando afuera.",
	},
	{
		palabra: "desarrollador",
		texto:
			"6 de cada 100 personas inscriptas en el sistema universitario argentino corresponden a carreras relacionadas con Informática. Sólo 1 de esas 6 personas es mujer. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género.",
	},
	{
		palabra: "técnico",
		texto:
			"En el sistema universitario de Argentina, incluso en las carreras con más del 70% de estudiantes mujeres, cuando la disciplina tiene que ver con Tecnología, Programación o Informática, decrece el porcentaje de mujeres que la estudian. (CET, 2020) Conocé #MásDatos para dar vuelta la brecha de género.",
	},
	{
		palabra: "informática",
		texto:
			"Sólo 6 de cada 100 personas inscriptas en la universidad corresponden a carreras relacionadas con Informática y que solo 1 de esas 6 personas es mujer. (CET, 2020)",
	},
	{
		palabra: "informático",
		texto:
			"Sólo 6 de cada 100 personas inscriptas en la universidad corresponden a carreras relacionadas con Informática y que solo 1 de esas 6 personas es mujer.”",
	},
];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.status === "run-filter-successful") {
		data = message.counters;
		currentCountWord.innerText = 1;
		maxCountWord.innerText = data.length;
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
	const socialText = `Con menos mitos y #MásDatos podemos dar vuelta la falta de representatividad y diversidad en los equipos. Instala esta extensión de Chrome y conoce a las personas que quedaron fuera de esta nota ${url}: ${chromeStore} by @chicasentec.`;

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
	if (currentCountWord.innerText > 1) {
		previousButton.classList.add("btn--transparent");
	} else {
		previousButton.classList.remove("btn--transparent");
	}

	if (currentCountWord.innerText < maxCountWord.innerText) {
		currentCountWord.innerText = parseInt(currentCountWord.innerText) + 1;
		nextButton.classList.add("btn--transparent");
	} else {
		nextButton.classList.remove("btn--transparent");
	}

	renderView();
});

previousButton.addEventListener("click", () => {
	if (currentCountWord.innerText === maxCountWord.innerText) {
		nextButton.classList.remove("btn--transparent");
	} else {
		nextButton.classList.add("btn--transparent");
	}

	if (currentCountWord.innerText > 1) {
		currentCountWord.innerText = parseInt(currentCountWord.innerText) - 1;
		previousButton.classList.add("btn--transparent");
	} else {
		previousButton.classList.remove("btn--transparent");
	}
	renderView();
});

function renderView() {
	const currentWord = data[currentCountWord.innerText - 1];
	const text = currentWord.texto;
	const small = currentWord.small;
	const palabra = currentWord.palabra;
	// console.log({ text, small, palabra });
	const linkElement = `
    En esta nota hay personas que se están quedando afuera. 
    Entra <a class="link" href="https://chicasentecnologia.org/" target="_blank"><b>aquí</b></a> y entérate quiénes son.
    `;
	const html = `
    <h3 class="word">${text}</h3>
    <hr class="separator">
    <span class="small">${linkElement}</span>`;
	document.getElementById(
		"current-word"
	).innerHTML = `[ ${currentWord.palabra.toUpperCase()} ]`;
	document.querySelector(".content").innerHTML = html;
}
