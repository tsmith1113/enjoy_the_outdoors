"use strict";

const locationDropdown = document.getElementById("locationDropdwon");
const parkTypeDropdown = document.getElementById("locationDropdwon");
const parkDetailRowDropdown = document.getElementById("locationDropdwon");
const parkNameDropdown = document.getElementById("locationDropdwon");
const parkAddressDropdown = document.getElementById("locationDropdwon");
const parkCityDropdown = document.getElementById("locationDropdwon");
const parkStateDropdown = document.getElementById("locationDropdwon");
const parkPhoneDropdown = document.getElementById("locationDropdwon");


window.onload = () => {
    console.log(onload);
    populateLocationDropdown();
    populateParkTypeDropdown();
    locationDropdown.onchange = onDropdownChange;
    parkTypeDropdown.onchange = onDropdownChange;
};

function populateLocationDropdown(){
    locationArray.forEach(location => {
        const option = documentcreatElement("option");
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

    if(selectedLocation != "" && selectedType != ""){
        let selectedParks = nationalParksArray.filter(park => park.State == selectedLocation && park.ParkType == selectedType);
        if(selectedParks.length > 0){
            displatParkDeatils(selectedParks[0]);
        }else{
            console.log(`No parks found for location"${selectedLocation}" and type "${selectedType}".`);
        }
    }
}

function displayParkDetails(park){
    parkNameDropdown.innerHTML = park.LocationName;
    parkAddress.innerHTML = `Address: ${park.Address}`;
    parkCity.innerHTML = `Address: ${park.City}`;
    parkState.innerHTML = `Address: ${park.State}`;
    parkPhone.innerHTML = `Address: ${park.Phone}`;

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