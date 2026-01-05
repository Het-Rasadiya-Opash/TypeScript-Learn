//explicit type

let fullName: string = "Het";
console.log(fullName);

let userCount: number = 42;
console.log(userCount);

let isLoading: boolean = true;
console.log(isLoading);

let scores: number[] = [100, 95, 98];
console.log(scores);

function greeting(msg: string): string {
  return `${msg}`;
}
console.log(greeting("Have a good day"));

// inference type
let username = "user";
let marks = 100;
let flags = [true, false, true];

console.log(username);
console.log(marks);
console.log(flags);

function add(a: number, b: number) {
  return a + b;
}

console.log(add(3, 4));

// special - any type
// let u = true;
// u = "string";
// Math.round(u);

let x: any = true;
x = "string";
Math.round(x);

//optional parameter
function greet(name?: string) {
  return `Hello, ${name || "Het"}`;
}

let y: undefined = undefined;
let z: null = null;

console.log(y, z);
