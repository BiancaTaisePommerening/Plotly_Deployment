// practicing module 12.1.3
// The data object is no longer enclosed in an array in the function call,
//  but it is still enclosed inside an array in the variable assignment.

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
// add axis labels.
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);