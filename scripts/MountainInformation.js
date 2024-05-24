"use strict";

///Get References to various DOM element
const mountainCategoryDropdown = document.getElementById("mountainCategoryDropdown");
const mountainDetailRow = document.getElementById("mountainDetailRow");
const mountainName = document.getElementById("mountainName");
const mountainDesc = document.getElementById("mountainDesc");
const mountainElevation = document.getElementById("mountainElevation");
const mountainEffort = document.getElementById("mountainEffort");
const mountainImg = document.getElementById("mountainImg");
const mountainCoords = document.getElementById("mountainCoords")

//Run this function when the window loads
window.onload = () => {
    console.log("onload");
    console.log(mountainsArray);
    populateMountainDropdown();
     mountainCategoryDropdown.onchange = onMountainCategoryDropdownChange;// set the event handler for dropdown change
};

//Function to populate the dropdown with mountain options
function populateMountainDropdown(){
    mountainsArray.forEach((mountain, index) =>{
        const option = document.createElement("option");// create a new option element
    option.value = index;
    option.textContent = mountain.name;// Ste the text content to the mountain's name
    mountainCategoryDropdown.appendChild(option);// Append the option to the dropdown

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
        let selectedMountain = mountainsArray[selectedIndex];// Get the selected mountain from the array
        displayMountainDetails(selectedMountain);//display the details of the selected mountain from the array
    }
}
// function to display the details of the selected mountain
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
    mountainDetailRow.style.display = "block";// display block to make it visible
}

function hideDetailRow(){
    mountainDetailRow.style.display = "none";// set the display to non to hide it
    mountainName.innerHTML = "";
    mountainDesc.innerHTML = "";
    mountainElevation.innerHTML = "";
    mountainEffort.innerHTML = "";
    mountainImg.src = "";
    mountainCoords.innerHTML = "";
}