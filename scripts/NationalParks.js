"use strict";

const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown= document.getElementById("parkTypeDropdown");
const parkTypeSearch = document.getElementById("parkTypeSearch");
const parkDetailRow = document.getElementById("parkDetailRow");
const parkDetailsContainer = document.getElementById("parkDetailsContainer");

window.onload = () => {
    console.log("onload");
    populateLocationDropdown();
    populateParkTypeDropdown();
    locationDropdown.onchange = onDropdownChange;
    parkTypeDropdown.onchange = onDropdownChange;
    parkTypeSearch.oninput = onParkTypeSearch;
};

function populateLocationDropdown() {
    const states = [...new Set(nationalParksArray.map(park => park.State))];
    states.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        locationDropdown.appendChild(option);
    });
}

function populateParkTypeDropdown(){
    parkTypesArray.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    parkTypeDropdown.appendChild(option);

});
}

function onDropdownChange(event) {
    console.log("onDropdownChange");

    // Hide the detail row to hide previous results
    hideDetailRow();

    const selectedLocation = locationDropdown.value;
    const selectedType = parkTypeDropdown.value;

    let selectedParks = nationalParksArray;

    if (selectedLocation !== "") {
        selectedParks = selectedParks.filter(park => park.State === selectedLocation);
        //updateParkTypeDrown(selectedParks);
    } else {
        console.log("Please select a location");
    }
    if(selectedType !== ""){
        selectedParks = selectedParks.filter(park => park.LocationName.includes(selectedType));
    }

    /// clear the park type selcetion when a new location is selected

    if(event.target.id === "locationDropdown"){
        parkTypeDropdown.value = "";
    }
    displayParkDetails(selectedParks);
}
// Function to update the park type dropdown based on the selected park
function updateParkTypeDrown(parks){
    parkTypeDropdown.innerHTML = ""; // clear existing options
    const parkTypes = [...new Set(parks.map(park => park.LocationName.split(" "[0])))];
    parkTypes.forEach(type =>{
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        parkTypeDropdown.appendChild(option);
    })
    
}
// Function to display the details of the selected group
function displayParkDetails(parks) {
    parkDetailsContainer.innerHTML = "";
    parks.forEach(park => {
        const card = document.createElement("div");
        card.className = "card";

        const cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.textContent = park.LocationName;

        // Create the card conten with park details
        const cardContent = `
            <p>Park Location ID: ${park.LocationID}</p>
            <p>Name: ${park.LocationName}</p>
            <p>Address: ${park.Address}</p>
            <p>City: ${park.City}</p>
            <p>State: ${park.State}</p>
            <p>Phone: ${park.Phone}</p>
            <p>Fax: ${park.Fax}</p>
            <p>Latitude: ${park.Latitude}</p>
            <p>Longitude: ${park.Longitude}</p>
            <p>Location: ${park.Location.type}</p>
            <p>Coordinates: ${park.Location.coordinates}</p>
        `;

        card.innerHTML = cardTitle.outerHTML + cardContent;
        parkDetailsContainer.appendChild(card);
    });

    // Show detail row
    showDetailRow();
}

function showDetailRow() {
    parkDetailRow.style.display = "block";
}

function hideDetailRow() {
    parkDetailRow.style.display = "none";
    parkDetailsContainer.innerHTML = "";
}

function onParkTypeSearch(){
    const searchTerm = parkTypeSearch.value.toLowerCase();
    const options = parkTypeDropdown.options;

    Array.from(options).forEach(option => {
        const text = option.textContent.toLowerCase();// Get the text of the option and convert to lower case
        // show or hide the option based on whether it macthes the search term
        if(text.includes(searchTerm)){
            option.style.display = "";
        }else{
            option.style.display = "none";
        }
    });
    console.log("Park type search completed", searchTerm);
}