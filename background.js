const maleWords = [
    "desarrollador",
    "cientifico",
    "programador",
    "ingeniero"
];
const femaleWords = [
    "desarrolladora",
    "cientifica",
    "programadora",
    "ingeniera"
];
const runBtn = document.getElementById("runBtn");

function replaceWords(listWords, colorIdentifier) {
    let counter = 0;
    let body = document.body;
    listWords.forEach(element => {
        const reg = new RegExp(`\\b${element}\\b`, "gim");

        if (reg.test(body.innerHTML)) {
            counter += body.innerHTML.match(reg).length;
        }
        console.log(body.innerHTML)
        body.innerHTML = body.innerHTML.replace(reg, `<mark style="background-color:${colorIdentifier};"> ${element} </mark>`)
    });
    return counter;
}

function setValues(elementId, list, colorIdentifier) {
    const quantity = replaceWords(list, colorIdentifier);
    document.getElementById(elementId).innerHTML = `${elementId} - ${quantity}`;
}

function init() {
    setValues("femaleWords", femaleWords, 'red');
    setValues("maleWords", maleWords, 'blue');
    console.log(document.body.innerHTML);
}


runBtn.addEventListener("click", () => {
    let [tab] = chrome.tabs.query({ active: true, currentWindow: true });
    console.log(document.body.innerHTML)
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['background.js'],
        function: init(),
    });
});
