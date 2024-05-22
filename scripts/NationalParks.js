"use strict";

const locationDropdown = document.getElementById("locationDropdown");
const parkDetailsContainer = document.getElementById("parkDetailsContainer");

window.onload = () => {
    console.log("onload");
    populateLocationDropdown();
    locationDropdown.onchange = onDropdownChange;
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

function onDropdownChange() {
    console.log("onDropdownChange");

    // Hide the detail row to hide previous results
    hideDetailRow();

    const selectedLocation = locationDropdown.value;

    let selectedParks = nationalParksArray;

    if (selectedLocation !== "") {
        selectedParks = selectedParks.filter(park => park.State === selectedLocation);
    } else {
        console.log("Please select a location");
    }

    if (selectedParks.length > 0) {
        displayParkDetails(selectedParks);
    } else {
        console.log('No parks found for the selected criteria');
        alert('No parks are available in the selected location');
    }
}

function displayParkDetails(parks) {
    parkDetailsContainer.innerHTML = "";
    parks.forEach(park => {
        const card = document.createElement("div");
        card.className = "card";

        const cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.textContent = park.LocationName;

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