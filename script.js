const monthsContainer = document.querySelector("#monthsContainer");
const daysContainer = document.querySelector("#daysContainer");
let months = 12;
let weekDays = 7;

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

const monthColor = [
    {color: "cornflowerblue"},
    {color: "pink"},
    {color: "green"},
    {color: "lawngreen"},
    {color: "greenyellow"},
    {color: "yellow"},
    {color: "orange"},
    {color: "red"},
    {color: "brown"},
    {color: "orangered"},
    {color: "purple"},
    {color: "blue"},
]

const daysArr = [
    {english: "Monday", polish: "Poniedziałek"},
    {english: "Tuesday", polish: "Wtorek"},
    {english: "Wednesday", polish: "Środa"},
    {english: "Thursday", polish: "Czwartek"},
    {english: "Friday", polish: "Piątek"},
    {english: "Saturday", polish: "Sobota"},
    {english: "Sunday", polish: "Niedziela"},
]


for(let i = 0; i < months; i++)
{
    let engDiv = document.createElement("div");
    engDiv.className = "myDiv";
    engDiv.textContent = monthsArr[i].english;
    engDiv.style.backgroundColor = monthColor[i].color;

    let plDiv = document.createElement("div");
    plDiv.textContent = monthsArr[i].polish;
    plDiv.className = "month";
    monthsContainer.appendChild(engDiv);
    engDiv.appendChild(plDiv);

    let nmDiv = document.createElement("div");
    nmDiv.textContent = i+1;
    engDiv.appendChild(nmDiv);
}

for(let i = 0; i < weekDays; i++)
{
    let engDiv = document.createElement("div");
    engDiv.className = "myDiv";
    engDiv.textContent = daysArr[i].english;
    engDiv.style.backgroundColor = monthColor[i].color;

    let plDiv = document.createElement("div");
    plDiv.textContent = daysArr[i].polish;
    plDiv.className = "month";
    daysContainer.appendChild(engDiv);
    engDiv.appendChild(plDiv);

    let nmDiv = document.createElement("div");
    nmDiv.textContent = i+1;
    engDiv.appendChild(nmDiv);
}