// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9
function highRating(topMovies) {
    return (topMovies.imdbRating) > 8.9;
};

// 2. Use filter() to pass the function as its argument
var filteredMovies = topMovies.filter(highRating);

//  Check to make sure your are filtering your movies.
console.log(filteredMovies);

// 3. Use the map method with the arrow function to return all the filtered movie titles.
var moviesTitle = filteredMovies.map(movie => movie.title);


//  Check your filtered movie titles.
console.log(moviesTitle);

// 4. Use the map method with the arrow function to return all the filtered movie metascores.
var moviesMetascore = filteredMovies.map(movie => movie.metascore);
//  Check your filtered movie metascores.
console.log(moviesMetascore);

// 5. Create your trace.
var trace = {
    x: moviesTitle,
    y: moviesMetascore,
    type: "bar"

};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
    title: "High Rated Movies",
    xaxis: {title: "Movie Title"},
    yaxis: {title: "Movie Metascore" }
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);