"use strict";

const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const parkDetailRowDropdown = document.getElementById("parkDetailRow");
const parkNameDropdown = document.getElementById("parkName");
const parkAddressDropdown = document.getElementById("parkAddress");
const parkCityDropdown = document.getElementById("parkCity");
const parkStateDropdown = document.getElementById("parkState");
const parkPhoneDropdown = document.getElementById("parkPhone");


window.onload = () => {
    console.log("onload");
    populateLocationDropdown();
    populateParkTypeDropdown();
    locationDropdown.onchange = onDropdownChange;
    parkTypeDropdown.onchange = onDropdownChange;
};

function populateLocationDropdown(){
    locationsArray.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
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

function onDropdownChange(){
    console.log("onDropdownChange");

    //Hide the detail row to hide previous results
    hideDetailRow();

    let selectedLocation = locationDropdown.value;
    let selectedType = parkTypeDropdown.value;

    if (selectedLocation !== "" && selectedType !== "") {
        // Filtering parks based on the selected location and park type
        // let selectedParks = nationalParksArray.filter(park => park.State === selectedLocation && park.ParkType === selectedType);
        let selectedParks = nationalParksArray.filter(park => park.State === selectedLocation);
    
        // Checking if any parks are found after the filter
        if (selectedParks.length > 0) {
            // Display details of the first park found
            displayParkDetails(selectedParks[0]);
        } else {
            // Logging a message if no parks match the filter criteria
            console.log(`No parks found for location "${selectedLocation}" and type "${selectedType}".`);
        }
    } else {
        // This log will help identify if either dropdown has not been selected
        console.log(`Please select both a location and a park type. Current selections: Location = "${selectedLocation}", Type = '${selectedType}'`);
    }

function displayParkDetails(park){
    parkNameDropdown.innerHTML = park.LocationName;
    parkAddress.innerHTML = `Address: ${park.Address}`;
    parkCity.innerHTML = `City: ${park.City}`;
    parkState.innerHTML = `State: ${park.State}`;
    parkPhone.innerHTML = `Phone: ${park.Phone}`;

    //show detail row
    showDetailRow();

}

function showDetailRow(){
    parkDetailRow.style.display = "block";
}

function hideDetailRow(){
    parkDetailRow.style.display = "none";
    parkAddress.innerHTML = "";
    parkCity.innerHTML = "";
    parkState.innerHTML = "";
    parkPhone.innerHTML = "";

}
}