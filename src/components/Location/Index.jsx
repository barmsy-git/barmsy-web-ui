import React, { useState, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
const libraries = ["places"]; // Required library for Places Autocomplete

const GooglePlacesAutocomplete = ({ setCurrentAddress,setCity, setState, setPostalCode, setHouseNumber }) => {
    const [address, setAddress] = useState("");
    const autocompleteRef = useRef(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyARhWcvd5RCPL2IOekI2NCLGIuA5AflZNo", // Replace with your API Key
        libraries, // Load the Places library
    });

    const handlePlaceChanged = () => {
        const place = autocompleteRef.current.getPlace();
        if (place) {
            console.log(place)
            setAddress(place.formatted_address || place.name || "");
            setCurrentAddress(place.formatted_address || place.name || "")
            let city, state, postalcode, country, housenumber;
            for (
              let i = 0;
              i < place.address_components.length;
              i++
            ) {
              for (
                let j = 0;
                j < place.address_components[i].types.length;
                j++
              ) {
                switch (place.address_components[i].types[j]) {
                  case "locality":
                    city = place.address_components[i].long_name;
                    break;
                    case "street_number":
                        housenumber = place.address_components[i].long_name;
                        break;
                  case "administrative_area_level_1":
                    state = place.address_components[i].long_name;
                    break;
                  case "country":
                    country =
                      place.address_components[i].long_name;
                    break;
                  case "postal_code":
                    postalcode =
                      place.address_components[i].long_name;
                    break;
                }
              }
            }
            setCity(city)
            setState(state)
            setPostalCode(postalcode)
            setHouseNumber(housenumber)

        }
    };

    const initializeAutocomplete = () => {
        const input = document.getElementById("autocomplete");
        autocompleteRef.current = new window.google.maps.places.Autocomplete(input, {
            types: ["address"], // Restrict to address type
            componentRestrictions: { country: "ng" }, // Restrict to US (optional)
        });

        autocompleteRef.current.addListener("place_changed", handlePlaceChanged);
    };

    if (!isLoaded) return <div>Loading Google Maps...</div>;

    return (
        <div>
            <input
                type="text"
                className="w-full outline-none bg-white"
                id="autocomplete"
                placeholder="Ex. Lagos, Nigeria"
                onFocus={initializeAutocomplete} // Initialize autocomplete when input is focused
                style={{ width: "250px", padding: "10px" }}
            />

        </div>
    );
};

export default GooglePlacesAutocomplete;



