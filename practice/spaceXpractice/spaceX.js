// 1. perform the API call to SpaceX
// 1.a the URL to the SpaceX is defined.
const url = "https://api.spacexdata.com/v2/launchpads";

// 1.b d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.
d3.json(url).then(receivedData => console.log(receivedData));

// rewrite the code to retrieve the details only from the Vandenberg Air Force Base index [0]
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// code to retrieve the full_nameof the Vandenberg Air Force Base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// access the latitude of the Vandenberg Airforce Base (thevalue for the location key is an object).
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

// module 12.3.1 skill drill - Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
// print only the latitude coordinates

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults.map(location => [location.location.latitude, location.location.longitude])));







