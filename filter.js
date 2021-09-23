// Extension filtering configurations
const words = {
	male: [
		"arquitecto",
		"programador",
		"ingeniero",
		"desarrollador",
		"diseñador",
		"experto",
		"candidato",
		"técnico",
		"administrador",
		"científico",
		"director",
		"presidente",
		"jefe",
		"investigador",
		"editor",
		"empresario",
		"emprendedor",
		"fundador",
		"creador",
		"autor",
		"depurador",
		"gerente",
		"biólogo",
		"químico",
		"licenciado",
		"inscriptos",
		"egresados",
		"neurocientífico",
		"geofísico",
		"sismóloga",
		"meteoróloga",
		"educador",
		"profesor",
	],
	female: [
		"arquitecta",
		"programadora",
		"ingeniera",
		"desarrolladora",
		"diseñadora",
		"experta",
		"candidata",
		"técnica",
		"administradora",
		"científica",
		"directora",
		"presidenta",
		"jefa",
		"investigadora",
		"editora",
		"empresaria",
		"emprendedora",
		"fundadora",
		"creadora",
		"autora",
		"depuradora",
		"gerenta",
		"bióloga",
		"química",
		"licenciada",
		"inscriptas",
		"egresadas",
		"neurocientífica",
		"geofísica",
		"sismóloga",
		"meteorologa",
		"educadora",
		"profesora",
	],
};

const settings = {
	male: {
		words: words.male,
		className: "male",
	},
	female: {
		words: words.female,
		className: "female",
	},
};

// Functionalities
const replaceWords = (words, className) => {
	let counter = 0;
	let tempCounter = [];
	let body = document.body;
	const context = document.querySelector("html");
	const instance = new Mark(context);

	words.forEach((word) => {
		const reg = new RegExp(`\\b${word}\\b`, "gim");

		if (reg.test(body.innerText)) {
			// Cuenta solo una vez la palabra en el texto
			if (!tempCounter.includes(word)) {
				tempCounter.push(word);
			}

			// Cuenta todas las veces que aparece la palabra en el texto
			//counter += body.innerText.match(reg).length;
		}
		instance.mark(word, { className, accuracy: "exactly" });
	});

	if (tempCounter.length > 0) {
		counter = tempCounter.length;
	}

	return counter.toLocaleString("en-US", {
		minimumIntegerDigits: 2,
		useGrouping: false,
	});
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
