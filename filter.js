// Extension filtering configurations
const maleColor = "red";
const maleWords = ["desarrollador", "científico"];

const femaleColor = "violet";
const femaleWords = ["desarrolladora", "cientifica"];

const settings = {
	male: {
		color: maleColor,
		words: maleWords,
		className: "male"
	},
	female: {
		color: femaleColor,
		words: femaleWords,
		className: "female"
	},
};

// Functionalities
const replaceWords = (words, className) => {
	let counter = 0;
	let body = document.body;
	const context = document.querySelector("html");
	const instance = new Mark(context);

	words.forEach((word) => {
		const reg = new RegExp(`\\b${word}\\b`, "gim");

		if (reg.test(body.innerHTML)) {
			counter += body.innerText.match(reg).length;
		}
		instance.mark(word, {
			className,
			accuracy: "exactly",
		});
	});

	return counter;
};

const filterContent = () => {
	let femaleCounter = replaceWords(
		settings.female.words,
		settings.female.className
	);
	let maleCounter = replaceWords(settings.male.words, settings.male.className);

	return { male: maleCounter, female: femaleCounter };
};

// Message listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "run-filter") {
		const data = filterContent();
		chrome.runtime.sendMessage({
			status: "run-filter-successful",
			counters: data,
		});
	}
	return true;
});
