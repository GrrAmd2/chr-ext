// Share button
const shareBtn = document.querySelector("#shareBtn");
shareBtn.addEventListener("click", () => {
	console.log("Compartido por cierta applicacion");
});

// Send message to run word-filter when everything is loaded
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	console.log(tabs);
	chrome.tabs.sendMessage(tabs[0].id, { message: "run-filter" }, (response) => {
		console.log(response);
	});
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.message === "run-filter-successfull") {
		console.log("I got your message, Filter!");
	}
});
