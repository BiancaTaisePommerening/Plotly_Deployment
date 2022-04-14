//  use map() to add 5 to each number in the following array:
// var numbers = [0,2,4,6,8];

var numbers = [0,2,4,6,8];

var add = numbers.map(function(num){
    return num + 5;

});


// map() is used here to extract a specific property from each object in an array.
// cities is an array of objects. Each object has multiple properties, such as Rank, City, and State.
// The map() method is used to extract only the City property of each object, i.e., San Antonio, Phoenix, and Dallas. During each iteration, the anonymous function inside map() returns only that property of each object.
// cityNames is an array of only these city names.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);




// Modify the code in the previous example (mapMethod1.js) to extract the population of each city, instead of the city name.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulation = cities.map(function(population) {
    return population.population;

});
console.log(cityPopulation);