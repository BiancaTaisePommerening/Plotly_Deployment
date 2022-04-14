//  The anonymous function inside map() and filter() can be simplified as an arrow function. Here's an example:
var numbers = [1,2,3,4,5];

var doubled = numbers.map(num => num * 2);
console.log(doubled);


// Ascending order
// The map() method performs the identical operation as before: it doubles each element in the numbers array.
//  However, the anonymous function inside map() has been replaced by an arrow function. Contrast the two:
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// descending order
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);


// sortedAge returns the array [2,3,9,37,39]. Like map() and filter(), sort()takes in an anonymous function.
//  During each iteration, the anonymous function, an arrow function in this case,
//  compares one element of the array (a) with another element in the array (b). From a, it subtracts b. 
// If the result is negative (i.e., b is larger than a) then it stays put. If the result of the subtraction is positive,
//  the order of the two elements is reversed. Look at a modified version of this example.
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);

// skill drill 
//  Use slice() to select the first three elements of the words array.
//  var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(0,3);

// To slice to the end of an array, you can omit the second argument
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
