

document.getElementById("addOperaButton").addEventListener("click", function() {
    document.getElementById("operaForm").style.display = "block";
    document.getElementById("removeOperaForm").style.display = "none";
});

document.getElementById("newOperaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("operaTitle").value;
    const year = document.getElementById("year").value;
    const publisher = document.getElementById("publisher").value;

    const tableBody = document.getElementById("operaTable").getElementsByTagName('tbody')[0];

    addNewRow(tableBody, title, year, publisher);

    document.getElementById("operaForm").style.display = "none";
    document.getElementById("newOperaForm").reset();
});

function addNewRow(tableBody, title, year, publisher) {
    const newRowHTML = `
        <tr>
            <td>${title}</td>            
            <td>${publisher}</td>         
            <td>${year}</td>  
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;

}

