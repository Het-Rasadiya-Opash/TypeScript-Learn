var names = [];
names.push("A");
names.push("B");
console.log(names);
var fruits = ["apple"];
// fruits.push("graps"); //read only
console.log(fruits);
// type inference
var numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("k"); // parameter type number so not assign string
console.log(numbers);
var head = numbers[0];
console.log(head);
