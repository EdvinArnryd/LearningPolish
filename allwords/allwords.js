const polishWords = [
    {english: "wine", polish: "wino"},
    {english: "milk", polish: "mleko"},
    {english: "bread", polish: "chleb"},
    {english: "apple", polish: "jabłko"},
    {english: "juice", polish: "sok"},
    {english: "butter", polish: "masło"},
    {english: "cheese", polish: "ser"},
    {english: "sandwich", polish: "kanapka"},
];

const table = document.querySelector("table");

for(let i = 0; i < polishWords.length; i++)
{
    let tableRow = document.createElement("tr");
    let engData = document.createElement("td");
    let polData = document.createElement("td");

    engData.textContent = polishWords[i].english;
    polData.textContent = polishWords[i].polish;

    tableRow.appendChild(engData);
    tableRow.appendChild(polData);

    table.appendChild(tableRow);
}
