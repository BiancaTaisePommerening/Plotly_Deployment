// Sort the data by Greek search results

// // descending
// var sortedGreekSearch = data.sort((a,b) =>
// a.greekSearchResults - b.greekSearchResults).reverse(); 

// ascending
var sortedGreekSearch = data.sort((a,b) =>
a.greekSearchResults - b.greekSearchResults);

// // descending
// var sortedGreekSearch = data.sort((a,b) =>
// b.greekSearchResults - a.greekSearchResults);   

// Slice the first 10 objects for plotting
var firstTen = sortedGreekSearch.slice(0,10);

// // Reverse the array to accommodate Plotly's defaults
// var reversedData = firstTen.reverse();

// // Trace1 for the Greek Data
// var trace1 = {
//     x: reversedData.map(object => object.greekSearchResults),
//     y: reversedData.map(object => object.greekName),
//     text: reversedData.map(object => object.greekNames),
//     name: "Greek",
//     type: "bar",
//     orientation: "h"
// };

// Trace1 for the Greek Data
var trace1 = {
    x: firstTen.map(object => object.greekSearchResults),
    y: firstTen.map(object => object.greekName),
    text: firstTen.map(object => object.greekNames),
    name: "Greek",
    type: "bar",
    orientation: "h"
};

// data
var data = [trace1];
// Apply the group bar mode to the layout
var layout = {
    title: "Greek Gods Search Results",
    margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
} 
};
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);