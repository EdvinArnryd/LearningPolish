const container = document.querySelector(".container");


for(let i = 0; i < 10; i++)
{
    let myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    myDiv.textContent = "Hey";
    container.appendChild(myDiv);
}