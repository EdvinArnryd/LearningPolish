const displayWord = document.querySelector(".displayWord");
const input = document.querySelector(".input");
const verifyBtn = document.querySelector(".verifyBtn");
const result = document.querySelector(".result");
const nextBtn = document.querySelector(".nextBtn");

let currentPolishWord = "";

const polishWord = [
    {english: "wine", polish: "wino"},
    {english: "milk", polish: "mleko"},
    {english: "bread", polish: "chleb"},
    {english: "apple", polish: "jabłko"},
    {english: "juice", polish: "sok"},
    {english: "butter", polish: "masło"},
    {english: "cheese", polish: "ser"},
    {english: "kanapka", polish: "sandwich"},
];

function newWord() {
    let random = Math.floor(Math.random() * polishWord.length);
    let word = polishWord[random];
    displayWord.textContent = word.english;

    currentPolishWord = word.polish;

    console.log("Hi");
}

verifyBtn.addEventListener("click", () => {
    if(input.value == currentPolishWord)
    {
        result.textContent = "Correct!";
        result.style.color = "green";
    }
    else
    {
        result.textContent = "Incorrect!";
        result.style.color = "red";
    }
});

nextBtn.addEventListener("click", newWord);




newWord();