const textInput = document.querySelector(`#name-input`)
console.log(textInput);

const output = document.querySelector(`#name-output`);
console.log(output);

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();

    if (inputValue !== "") {
        output.textContent = inputValue;
    } else {
        output.textContent = "Anonymous";
    };
});