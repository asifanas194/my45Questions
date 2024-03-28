// Write a program that creates Objects containing these items.

//Datatype of person object
interface person{
    age : number,
    name : string,
    nationality : string,
    Student : boolean
}
//person object
let person :person = {
    age : 16,
    name : 'Anas',
    nationality : 'Pakistan',
    Student : true
}
//print person
console.log(person);

//Datatype of car object
interface car{
    maker : string,
    colour : string,
    automatic : boolean
}
//person object
let car :car = {
    maker : 'Toyota',
    colour : 'Black',
    automatic : true
}
//print car
console.log(car);