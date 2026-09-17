const container = document.querySelector(".container");
let months = 12;


for(let i = 0; i < months; i++)
{
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.textContent = "Hey";
    container.appendChild(myDiv);
}