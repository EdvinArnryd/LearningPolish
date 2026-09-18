const container = document.querySelector(".container");
let months = 12;

const monthsArr = [
    {english: "January", polish: "Styczeń"},
    {english: "February", polish: "Luty"},
    {english: "March", polish: "Marzec"},
    {english: "April", polish: "Kwiecień"},
    {english: "May", polish: "Maj"},
    {english: "June", polish: "Czerwiec"},
    {english: "July", polish: "Lipiec"},
    {english: "August", polish: "Sierpień"},
    {english: "September", polish: "Wrzesień"},
    {english: "October", polish: "Październik"},
    {english: "November", polish: "Listopad"},
    {english: "December", polish: "Grudzień"},
]


for(let i = 0; i < months; i++)
{
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.textContent = monthsArr[i].english;

    let plDiv = document.createElement("div");
    plDiv.textContent = monthsArr[i].polish;
    container.appendChild(myDiv);
    myDiv.appendChild(plDiv);
}