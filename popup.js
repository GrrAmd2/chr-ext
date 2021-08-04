// Counters
const maleCounter = document.querySelector("#maleCounter");
const femaleCounter = document.querySelector("#femaleCounter");
// Share button
const shareBtn = document.querySelector("#shareBtn");
const buttonBack = document.querySelector("#buttonBack");

buttonBack.addEventListener("click", () =>{
	const shareSection = document.getElementById("shareSection");
	const counterSection = document.getElementById("counterSection");
	shareSection.style.display = 'none';
	counterSection.style.display = 'block';
})

shareBtn.addEventListener("click", () => {
	showShareSection();
});

function showShareSection(){
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
