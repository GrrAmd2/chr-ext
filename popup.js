// Share button
const shareBtn = document.querySelector("#shareBtn");
shareBtn.addEventListener("click", () => {
	console.log("Compartido por");
});

// Send message to run word-filter when everything is loaded
chrome.runtime.sendMessage("cet-run-filter", (response) => {
	// Update Male and Female counters
	console.log(`MALE counter => ${response.male}`);
	console.log(`FEMALE counter => ${response.female}`);
});
