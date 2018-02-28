console.log('hello'); 

// Challenge 1 
var test= "cat"; 

var opp = test.split("").reverse().join("");

if(test=== opp) {
    console.log('same?', true);
} else {
    console.log('same?', false); 
}

var animals = ['fish', 'dog', 'cat']; 
var animalzElement = document.getElementById('animalz');

for (var i=0; i<animals.length; i++){
    console.log ("animals", animals[i])
    animalzElement.innerHTML += '<h5>' + animals[i] + '<h5>'; 
}

//Challenge 2  

var book = "catch 22"; 
var bookSplit = book.split(""); 
var realNumz = [];
for(var j=0;j<bookSplit.length; j++){
if((bookSplit[j]*1)){
    realNumz.push(bookSplit[j]);
}
console.log("answer", realnumz.join("")) 

