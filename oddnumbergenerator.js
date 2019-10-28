let output = document.getElementById("output");
let minInput = document.getElementById("min");
let maxInput = document.getElementById("max");
document.getElementById("clear").addEventListener("click", function () {
    output.innerText = "";
});
document.getElementById("oddForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let numbers = [];
    let min = +minInput.value;
    let max = +maxInput.value;
    if (min <= max) {
        let i = Math.ceil(min);
        if (i % 2 === 0) i++;
        while (i <= max) {
            numbers.push(i);
            i += 2;
        }
    //The generator works in reverse if the larger number is entered into the first box
    } else {
        let i = Math.floor(min);
        if (i % 2 === 0) i--;
        while (i >= max) {
            numbers.push(i);
            i -= 2;
        }
    }
    output.innerText = numbers.join(', ');
});