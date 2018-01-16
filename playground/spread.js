// function add (a, b) {
//   return a+b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Soham', 25];
var perosnTwo = ['Jen', 21];

function greet (name, age){
  console.log('Hi' + name + ', you are ' + age);
}
greet(...person);
greet(...perosnTwo);


var names = ['Mike', 'Ben', 'Bale'];
var final = ['Soham', ...names];
final.forEach(function (name) {
  console.log('Hi ' + name)
})
