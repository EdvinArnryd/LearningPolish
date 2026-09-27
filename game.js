const displayWord = document.querySelector(".displayWord");
const input = document.querySelector(".input");
const verifyBtn = document.querySelector(".verifyBtn");
const result = document.querySelector(".result");
const nextBtn = document.querySelector(".nextBtn");

let currentPolishWord = "";

const polishWord = [
    // {english: "wine", polish: "wino"},
    // {english: "milk", polish: "mleko"},
    // {english: "bread", polish: "chleb"},
    {english: "apple", polish: "jabłko"},
    // {english: "juice", polish: "sok"},
    {english: "butter", polish: "masło"},
    // {english: "cheese", polish: "ser"},
    // {english: "sandwich", polish: "kanapka"},
];

const polishLetters = [
    {english: "l", polish: "ł"},
    {english: "a", polish: "ą"},
    {english: "c", polish: "ć"},
    {english: "e", polish: "ę"},
    {english: "n", polish: "ń"},
    {english: "o", polish: "ó"},
    {english: "s", polish: "ś"},
    {english: "z", polish: "ź"},
    {english: "z", polish: "ż"},
]

function convertToEnglishAlphabet(str) {
    let newString = "";
    for(let strElement of str)
    {
        // for(let lettersElement of polishLetters)
        // {
        //     if(strElement == lettersElement.polish)
        //     {
        //         newString += lettersElement.english;
        //     }
        // }
        res = polishLetters.find(el => el.polish == strElement);
        if(res)
        {
            newString += res.english;
        }
        else{
            newString += strElement;
        }
    }

    return newString;
}

function newWord() {
    let random = Math.floor(Math.random() * polishWord.length);
    let word = polishWord[random];
    displayWord.textContent = word.english;

    currentPolishWord = word.polish;
    result.textContent = "Result";
    result.style.color = "black";
}

verifyBtn.addEventListener("click", () => {

    console.log(convertToEnglishAlphabet(currentPolishWord));
    if(input.value == convertToEnglishAlphabet(currentPolishWord))
    {
        result.textContent = "Correct!";
        result.style.color = "green";
    }
    else if(input.value.length == currentPolishWord.length)
    {
        result.textContent = "Length is correct!";
        result.style.color = "yellow";
    }
    else
    {
        result.textContent = "Incorrect!";
        result.style.color = "red";
    }
});

nextBtn.addEventListener("click", newWord);




newWord();