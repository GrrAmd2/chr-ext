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

function replaceWords(listWords, colorIdentifier) {
    let counter = 0;
    let body = document.body;
    listWords.forEach(element => {
        console.log("typeof =>", typeof element)
        const reg = new RegExp(element + "$");

        console.log("REG TEST", element, reg.test(body.innerHTML))
        if (reg.test(body.innerHTML)) {
            counter += body.innerHTML.match(reg).length;
        }
        body.innerHTML = body.innerHTML.replace(reg, `<mark style="background-color:${colorIdentifier};"> ${element} </mark>`)
    });
    return counter;
}

function setValues(elementId, list) {
    console.log("EJECUTO CON", elementId);
    const quantity = replaceWords(list, '#f8d371');
    document.getElementById(elementId).innerHTML = `${elementId} - ${quantity}`;
}
document.addEventListener("DOMContentLoaded", function(){
    console.log("ya cargue el dom")
    setValues("femaleWords", femaleWords);
    setValues("maleWords", maleWords)
});
