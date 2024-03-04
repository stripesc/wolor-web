const tableBody = window.document.getElementById("tableBody");
let idCount = 0;

function deleteRow (id){
    document.getElementById("row"+id).remove()
}

function addColour() {
    // get word and check if empty
    let word = document.getElementById("word").value
    if (word === ""){
        alert("Enter a word into the \"Word\" box")
        return
    }
    // create and add table row
    let row = document.createElement("tr", { is: "row"+idCount})
    row.setAttribute("id", "row"+idCount)
    row.innerHTML =
        "<tr id='row"+idCount+"'>" +
        "<td>"+word+"</td>" +
        "<td>#FFF000</td>" +
        "<td style='background-color:#FFF000;'></td>" +
        "<td><button class='delete' onclick='deleteRow("+idCount+")' data-value='"+idCount+"'>delete</button></td>" +
        "</tr>"
    tableBody.appendChild(row)
    idCount++
}


document.getElementById("add").addEventListener("click", addColour)