let dependencies = {
    sheetArea: document.getElementById("sheetArea")
};

function printText(elemID, txt) {
    header = document.getElementById(elemID);
    header.innerHTML = txt;
}

printText("firstHeader", "Hello, world!");


function createTextBox(content) {
    let inputBox = document.createElement("input");
    inputBox.setAttribute("type", "text");
    inputBox.setAttribute("value", content);
    inputBox.setAttribute("class", "cardsheet");
    dependencies.sheetArea.appendChild(inputBox);
}

createTextBox("Your First Card-Sheet!");