let input = document.getElementById("input");
let characterNotice = document.getElementById("character-notice");
let characterCount = document.getElementById("character-count");
const maxCharacters = parseInt(characterCount.textContent);
let s = document.getElementById("s");
let output = document.getElementById("output");
input.addEventListener("input", function (event) {
    let count = maxCharacters - event.target.value.length;
    characterCount.textContent = count;
    if (count <= 10) {
        characterNotice.classList.add("red");
    } else {
        characterNotice.classList.remove("red");
    }
    if (count === 1) {
        s.textContent = "";
    } else {
        s.textContent = "s";
    }
    if (count == maxCharacters) {
        output.textContent = ".esrever ot tnaw uoy txet eht retnE";
    } else {
        output.textContent = event.target.value.split("").reverse().join("");
    }
});
document.getElementById("clear").addEventListener("click", function () {
    input.value = "";
    characterNotice.classList.remove("red");
    characterCount.textContent = maxCharacters;
    s.textContent = "s";
    output.textContent = ".esrever ot tnaw uoy txet eht retnE";
});