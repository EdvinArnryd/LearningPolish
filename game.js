const input = document.querySelector(".input");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

button.addEventListener("click", () => {
    result.textContent = input.value;
});