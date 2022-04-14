//  create a scatter plot chart

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    mode: 'markers',
    type: 'scatter'
  };
  var data = [trace];
  var layout = {
    title: "Scatter Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of drinks ordered"}
  };
  Plotly.newPlot("plotArea", data, layout);
