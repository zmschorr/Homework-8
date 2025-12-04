// get list and button
var myList = document.querySelector("#codeBox ul");
var addBtn = document.getElementById("addBtn");

// ------------------------------
// add icons to existing items
var listItems = document.querySelectorAll("#codeBox li");
var totalItems = listItems.length;

for (var i = 0; i < totalItems; i++) {
    var trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png");
    trashIcon.className = "listIcon";
    listItems[i].appendChild(trashIcon);
}

// ------------------------------
// add new items
addBtn.addEventListener("click", addItem, false);

function addItem() {
    var newItem = prompt("New Item:");
    if (!newItem) return;

    var newLI = document.createElement("li");
    var newText = document.createTextNode(newItem);
    newLI.appendChild(newText);

    var trashIcon = document.createElement("img");
    trashIcon.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png");
    trashIcon.className = "listIcon";
    newLI.appendChild(trashIcon);

    myList.appendChild(newLI);
}

// ------------------------------
// delete or gray items
myList.addEventListener("click", changeProp, false);

function changeProp(e) {
    var target = getTarget(e);
    var tParent = target.parentNode;

    // if they clicked the trash icon
    if (tParent.tagName == "LI") {
        myList.removeChild(tParent);
        return; // stops it from also toggling gray
    }

    // if they clicked the LI itself
    if (tParent.tagName == "UL") {
        if (target.classList.contains("selected")) {
            target.classList.remove("selected");
        } else {
            target.classList.add("selected");
        }
    }
}

// helper function
function getTarget(e) {
    if (!e) e = window.event;
    return e.target || e.srcElement;
}
