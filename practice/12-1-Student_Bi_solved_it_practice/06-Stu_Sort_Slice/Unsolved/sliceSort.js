// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
var descending = numArray.sort(function sortFunction(a, b){
    return b - a
});

// Print the results to the console
console.log(descending);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
var descending1 = numArray.sort((a,b) => b-a);
console.log(descending1);

// Reverse the array order
var reverse = descending1.reverse()
console.log(reverse);

// Sort the array in ascending order using an arrow function
var ascending = numArray.sort((a,b) => a-b);
console.log(ascending);

// Slice the first five elements of the sortedAscending array, assign to a variable

var firstFive = ascending.slice(0,5);
