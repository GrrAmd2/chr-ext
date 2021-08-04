// Counters
const maleCounter = document.querySelector("#maleCounter");
const femaleCounter = document.querySelector("#femaleCounter");
// Share button
const shareBtn = document.querySelector("#shareBtn");
shareBtn.addEventListener("click", () => {
	console.log("Compartido por cierta applicacion");
});

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
