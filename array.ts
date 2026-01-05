const names: string[] = [];
names.push("A");
names.push("B");
console.log(names);

const fruits: readonly string[] = ["apple"];
// fruits.push("graps"); //read only
console.log(fruits);

// type inference
const numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("k"); // parameter type number so not assign string
console.log(numbers);

let head: number | undefined = numbers[0];
console.log(head);
