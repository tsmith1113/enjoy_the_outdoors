"use strict";
const mountainCategoryDropdown = document.getElementById("mountainCategoryDropdown");
const mountainDetailRow = document.getElementById("mountainDetailRow");
const mountainName = document.getElementById("mountainName");
const mountainDesc = document.getElementById("mountainDesc");
const mountainElevation = document.getElementById("mountainElevation");
const mountainEffort = document.getElementById("mountainEffort");
const mountainImg = document.getElementById("mountainImg");
const mountainCoords = document.getElementById("mountainCoords")

window.onload = () => {
    console.log("onload");
    console.log(mountainsArray);
    populateMountainDropdown();
     mountainCategoryDropdown.onchange = onMountainCategoryDropdownChange;
};

function populateMountainDropdown(){
    mountainsArray.forEach((mountain, index) =>{

  
        const option = document.createElement("option");
    option.value = index;
    option.textContent = mountain.name;
    mountainCategoryDropdown.appendChild(option);

     });
}

function onMountainCategoryDropdownChange(){
    console.log("onMountainCategoryDropDownChange");

    //hide the detail row to hide previous results

    hideDetailRow();

    //Figure out what value was selected (which mountain)
    let selectedIndex = mountainCategoryDropdown.value;
    console.log(selectedIndex);

    if(selectedIndex != " "){
        let selectedMountain = mountainsArray[selectedIndex];
        displayMountainDetails(selectedMountain);
    }
}

function displayMountainDetails(mountain){
    mountainName.innerHTML = mountain.name;
    mountainDesc.innerHTML = mountain.desc;
    mountainElevation.innerHTML = `Elevation: ${mountain.elevation} feet`;
    mountainEffort.innerHTML = `Effort: ${mountain.effort}`;
    mountainImg.src = `images/${mountain.img}`;
    mountainCoords.innerHTML = `Coordinates: ${mountain.coords.lat},${mountain.coords.lng}`;

    // Show detail row
    showDetailRow();
}

function showDetailRow(){
    mountainDetailRow.style.display = "block";
}

function hideDetailRow(){
    mountainDetailRow.style.display = "none";
    mountainName.innerHTML = "";
    mountainDesc.innerHTML = "";
    mountainElevation.innerHTML = "";
    mountainEffort.innerHTML = "";
    mountainImg.src = "";
    mountainCoords.innerHTML = "";
}