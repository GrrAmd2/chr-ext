// Counters
const maleCounter = document.querySelector("#maleCounter");
const femaleCounter = document.querySelector("#femaleCounter");
// Share button
const shareBtn = document.querySelector("#shareBtn");
const buttonBack = document.querySelector("#buttonBack");

buttonBack.addEventListener("click", () => {
	const shareSection = document.getElementById("shareSection");
	const counterSection = document.getElementById("counterSection");
	shareSection.style.display = 'none';
	counterSection.style.display = 'block';
})

shareBtn.addEventListener("click", () => {
	showShareSection();
});

function showShareSection() {
	const shareSection = document.getElementById("shareSection");
	const counterSection = document.getElementById("counterSection");
	shareSection.style.display = 'block';
	counterSection.style.display = 'none';
}


// Send message to run word-filter
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	chrome.tabs.sendMessage(tabs[0].id, { action: "run-filter" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.status === "run-filter-successful") {
		femaleCounter.innerHTML = message.counters.female;
		maleCounter.innerHTML = message.counters.male;
	}
});


document.getElementById("share-whatsapp").addEventListener("click", () => shareOn("whatsapp"))
document.getElementById("share-twitter").addEventListener("click", () => shareOn("twitter"))

// get current tab url chrome and save in a variable
async function urlNav() {
	const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
	return tabs[0].url;
}


async function shareOn(media) {

	const chromeStore = "https://chrome.google.com/webstore"
	const url = await urlNav();
	const socials = {
		whatsapp: `La brecha de género en tecnología es real y desde Chicas en Tecnología creamos un contador de menciones a mujeres en noticias como: ${url}. Descargá esta extensión de Chrome y #DateCuenta de lo que leés todos los días:${chromeStore}.`,
		twitter: `La brecha de género en tecnología es real y tenemos un contador de menciones a mujeres en noticias como: ${url} que lo demuestra. Descargá esta extensión de Chrome y #DateCuenta de lo que leés todos los días: ${chromeStore}. @chicasentec`
	}
	buildText(socials[media], media);
}

function buildText(text, media) {
	const links = {
		whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
		twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
	}
	window.open(links[media], '_blank');
}

String.prototype.toHtml = function () {
	return encodeURI(this)
}
