// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
var magician = ['Harry Potter', 'Hermione Granger', 'David Copperfield', 'Albus Dumbledore'];
function show_magicians(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
show_magicians(magician);
