//  In VS Code, create a JavaScript file named plots.js.
// In this file, write the code for a line chart with the following values.
//  X: 5,10,15. Y: 10,20,30. The chart will be displayed in a div named plotArea.
//  What will your code look like?

// Plotly.newPlot() creates a new chart in the plotArea div in the HTML. 
// The data is in an object, which is itself wrapped inside an array.
Plotly.newPlot("plotArea", [{x:[5,10,15],y:[10,20,30]}]);