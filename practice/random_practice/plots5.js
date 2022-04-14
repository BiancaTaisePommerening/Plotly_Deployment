
//  skill drill module 12.1.3
//  create a new bar chart with Plotly. This graph will chart several beverages and the percentage 
// of the total number of orders they comprise in a popular nonalcoholic bar.

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//  percent of drinks ordered
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var data = [trace];

// add axis labels.
var layout = {
    title: "Popular Beverages",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of drinks ordered"}
};

Plotly.newPlot("plotArea", data, layout);