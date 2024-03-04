const tableBody = window.document.getElementById("tableBody");
let idCount = 0;

function deleteRow (id){
    document.getElementById("row"+id).remove()
}

function converter(word){
    let multi = document.getElementById("multi").value
    if (multi === ""){
        multi = Number(1)
    }
    else {
        multi = Number(multi)
    }
    console.log(multi)
    let output = "";
    word = word.toLowerCase();
    let letters = new Array(3);
    let values = [0, 0, 0];
    let third = 0, sections = 0;
    if (word.length >= 3) {
        word = word.substring(0, word.length - (word.length % 3));
        third = Math.floor(word.length / 3);
        sections = 3;
        letters[0] = word.substring(0, third);
        letters[1] = word.substring(third, third * 2);
        letters[2] = word.substring(third * 2);
    } else if (word.length === 2) {
        third = 1;
        sections = 2;
        letters[0] = word.substring(0, 1);
        letters[1] = word.substring(1);
        letters[2] = "";
    } else if (word.length === 1) {
        third = 1;
        sections = 1;
        letters[0] = word;
        letters[1] = "";
        letters[2] = "";
    }
    for (let i = 0; i < sections; i++) {
        for (let j = 0; j < third; j++) {
            values[i] += letters[i].charCodeAt(j)*multi;
        }
    }
    for (let i = 0; i < 3; i++) {
        values[i] = values[i] % 256;
        if (values[i] < 16) {
            output += "0";
        }
        output += values[i].toString(16);
    }
    return "#" + output;
}

function addColour() {
    // get word and multi then check if empty
    let word = document.getElementById("word").value
    if (word === ""){
        alert("Enter a word into the \"Word\" field")
        return
    }
    let multi = document.getElementById("multi").value
    if (multi === ""){
        multi = Number(1)
    }
    else {
        multi = Number(multi)
    }
    if(isNaN(multi)){
        alert("Only enter numbers into the \"Multiplier\" field")
        document.getElementById("multi").value = "";
        return;
    }
    let hex = converter(word);
    // create and add table row
    let row = document.createElement("tr", { is: "row"+idCount})
    row.setAttribute("id", "row"+idCount)
    row.innerHTML =
        "<tr id='row"+idCount+"'>" +
        "<td>"+word+"</td>" +
        "<td>"+multi+"</td>" +
        "<td>"+hex+"</td>" +
        "<td style='background-color:"+hex+";'></td>" +
        "<td><button class='delete' onclick='deleteRow("+idCount+")' data-value='"+idCount+"'>delete</button></td>" +
        "</tr>"
    tableBody.appendChild(row)
    idCount++
}


document.getElementById("add").addEventListener("click", addColour)