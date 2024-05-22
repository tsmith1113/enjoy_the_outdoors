const locationDropdown = document.getElementById("locationDropdown");
        const parkTypeDropdown = document.getElementById("parkTypeDropdown");
        const parkDetailRow = document.getElementById("parkDetailRow");
        const parkLocationID = document.getElementById("parkLocationID");
        const parkLocationName = document.getElementById("parkLocationName");
        const parkAddress = document.getElementById("parkAddress");
        const parkCity = document.getElementById("parkCity");
        const parkState = document.getElementById("parkState");
        const parkPhone = document.getElementById("parkPhone");
        const parkFax = document.getElementById("parkFax");
        // const parkVisit = document.getElementById("parkVisit");
        const parkLatitude = document.getElementById("parkLatitude");
        const parkLongitude = document.getElementById("parkLongitude");
        const parkLocationType = document.getElementById("parkLocationType");
        const parkCoordinates = document.getElementById("parkCoordinates");

        window.onload = () => {
            console.log("onload");
            populateLocationDropdown();
            populateParkTypeDropdown();
            locationDropdown.onchange = onDropdownChange;
            parkTypeDropdown.onchange = onDropdownChange;
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

        function populateParkTypeDropdown() {
            parkTypesArray.forEach(type => {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                parkTypeDropdown.appendChild(option);
            });
        }

        function onDropdownChange() {
            console.log("onDropdownChange");

            // Hide the detail row to hide previous results
            hideDetailRow();

            const selectedLocation = locationDropdown.value;
            const selectedType = parkTypeDropdown.value;

            let selectedParks = nationalParksArray;

            if (selectedLocation !== "") {
                selectedParks = selectedParks.filter(park => park.State === selectedLocation);
            } else {
                console.log("Please select a location");
            }

            if (selectedType !== "") {
                selectedParks = selectedParks.filter(park => park.LocationName.includes(selectedType));
            } else {
                console.log("Please select a park type");
            }

            if (selectedParks.length > 0) {
                displayParkDetails(selectedParks[0]);
            } else {
                console.log('No parks found for the selected criteria.');
            }
        }

        function displayParkDetails(park) {
            parkLocationID.innerHTML = `Park Location ID: ${park.LocationID}`;
            parkLocationName.innerHTML = `Name: ${park.LocationName}`;
            parkAddress.innerHTML = `Address: ${park.Address}`;
            parkCity.innerHTML = `City: ${park.City}`;
            parkState.innerHTML = `State: ${park.State}`;
            parkPhone.innerHTML = `Phone: ${park.Phone}`;
            parkFax.innerHTML = `Fax: ${park.Fax}`;
            // parkVisit.innerHTML = `Visit: ${park.Visit}`;
            parkLatitude.innerHTML = `Latitude: ${park.Latitude}`;
            parkLongitude.innerHTML = `Longitude: ${park.Longitude}`;
            parkLocationType.innerHTML = `Location: ${park.Location.type}`;
            parkCoordinates.innerHTML = `Coordinates: ${park.Location.coordinates}`;

            // Show detail row
            showDetailRow();
        }

        function showDetailRow() {
            parkDetailRow.style.display = "block";
        }

        function hideDetailRow() {
            parkDetailRow.style.display = "none";
            parkLocationID.innerHTML = "";
            parkLocationName.innerHTML = "";
            parkAddress.innerHTML = "";
            parkCity.innerHTML = "";
            parkState.innerHTML = "";
            parkPhone.innerHTML = "";
            parkFax.innerHTML = "";
            // parkVisit.innerHTML = "";
            parkLatitude.innerHTML = "";
            parkLongitude.innerHTML = "";
            parkLocationType.innerHTML = "";
            parkCoordinates.innerHTML = "";
        }

        function searchParks() {
            onDropdownChange();
        }

        function viewAll() {
            displayParkDetails(nationalParksArray[0]);
        }
