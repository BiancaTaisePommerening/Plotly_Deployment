// skill drill module 12.2.1
// Filter the results to include only animals whose species name starts with the letter "s."
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];


var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startWithS = words.filter(name => {
    let letters = name.split("");
    if(letters[0] === "s"){
        return name;
    }
});

console.log(startWithS)