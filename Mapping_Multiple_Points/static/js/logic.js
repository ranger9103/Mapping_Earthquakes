// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid").setView([40.7, -94.5], 4);

// An array containing each city's location, state, and population.
//see cities.js

// Get data from cities.js (instead of having the lit in here since it could potentially be a large dataset)
let cityData = cities;

// Loop through the cities array and create one marker for each city (adds the marker for each city in the list of dictionaries in cities.js).
// Loop through the cities array and create one marker for each city. toLocaleString() makes the , in the population
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: "orange",
        fillcolor: "orange"
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});


//  Add a marker to the map for Zumbrota MN.
let ZMmarker = L.marker([44.2941, -92.6691]).addTo(map);

// We create the tile layer that will be the background of our map. night mode
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
