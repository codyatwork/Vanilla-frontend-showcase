const dangerClass = "red";
const reversedHeading = ".esrever ot tnaw uoy txet eht retnE";
const s = "s";
let input = document.getElementById("input");
let characterNotice = document.getElementById("character-notice");
let characterCount = document.getElementById("character-count");
const maxCharacters = parseInt(characterCount.textContent);
let sSpan = document.getElementById("s");
let output = document.getElementById("output");
input.addEventListener("input", function (event) {
    let count = maxCharacters - event.target.value.length;
    characterCount.textContent = count;
    if (count <= 10) {
        characterNotice.classList.add(dangerClass);
    } else {
        characterNotice.classList.remove(dangerClass);
    }
    if (count === 1) {
        sSpan.textContent = "";
    } else {
        sSpan.textContent = s;
    }
    if (count === maxCharacters) {
        output.textContent = reversedHeading;
    } else {
        output.textContent = event.target.value.split("").reverse().join("");
    }
});
document.getElementById("clear").addEventListener("click", function () {
    input.value = "";
    characterNotice.classList.remove(dangerClass);
    characterCount.textContent = maxCharacters;
    sSpan.textContent = s;
    output.textContent = reversedHeading;
});
