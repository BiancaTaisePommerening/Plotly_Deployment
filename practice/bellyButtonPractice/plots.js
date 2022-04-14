// Use d3.json()to read samples.json into your script.
d3.json("samples.json").then(function(data){
    console.log(data);
});

// extract only the wfreq
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

// sort the wfreq array in descending order.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// delete null values from the sorted wfreq array.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});

    
// module 12.3.2 skill drill
// Use Object.entries() and forEach() to print all the metadata of the first person in the samples.json() dataset (ID 940).

// use the Object.entries() method to return each key-value pair in an array
// and the forEach()method to access each element of these pairs.
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});