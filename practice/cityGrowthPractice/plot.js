// sort the cities by population growth.
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// select only the top five cities by population growth.
var topFiveCities = sortedCities.slice(0,5);

// use map() to create a separate array of the top five city names, as well as the top five growth figures.
var topFiveCityNames = topFiveCities.map(city => city.City);

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

//  Create a Bar Chart with the Arrays
// The trace specifies the type of graph as a bar chart as well as defines the x- and y-axis data.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  // The variable data encloses trace in an array to meet Plotly's format requirement.
  var data = [trace];
  //   The variable layout is assigned to an object that specifies the chart's title and axis labels.
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  // the graph is rendered with Plotly.newPlot().
  Plotly.newPlot("bar-plot", data, layout);







