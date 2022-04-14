// When the user first loads the page, init() is called, and the initial plot is rendered
function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  // when the user selects a dropdown menu option, the updatePlotly() function is called
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {

    // The variable dropdownMenu is assigned to the DOM element with the id of dropdownMenu. 
    // Recall that it's the dropdown menu from index.html
    var dropdownMenu = d3.select("#dropdownMenu");

    // The variable dataset is assigned to the value of the dropdown menu option selected by the user.
    //  Here, it is either "dataset1"or "dataset2".
    var dataset = dropdownMenu.property("value");

    // The x-axis values, or xData, remain the same. However, the y-axis values, 
    // or yData, depend on which dropdown menu option was selected. yData is initially a blank array.
    var xData = [1, 2, 3, 4, 5];
    var yData = [];

    // If the value of the dropdown menu option is 'dataset1', yData is assigned an array of integers.
    // If 'dataset2' is chosen, another array of integers is assigned to yData.
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    // The xData and yData arrays are assembled inside the trace object. Unlike the Plotly.newPlot() method, 
    // thePlotly.restyle() method defaults to accepting an object (trace in this case) as its data argument, 
    // rather than an array.
    var trace = {
      x: [xData],
      y: [yData],
    };

    // The Plotly.restyle() method is used to re-render the page on the browser. This method is more efficient
    // than calling the Plotly.newPlot() method, as it does not create a brand new chart from scratch, but 
    // instead modifies the previously displayed chart with the updated information.
    Plotly.restyle("plot", trace);
  };
  
  init();