//explicit type
var fullName = "Het";
console.log(fullName);

var userCount = 42;
console.log(userCount);

var isLoading = true;
console.log(isLoading);

var scores = [100, 95, 98];
console.log(scores);

function greeting(msg) {
  return "".concat(msg);
}
console.log(greeting("Have a good day"));

// inference type
var username = "user";
var marks = 100;
var flags = [true, false, true];
console.log(username);
console.log(marks);
console.log(flags);

function add(a, b) {
  return a + b;
}
console.log(add(3, 4));


// special - any type
// let u = true;
// u = "string";
// Math.round(u);

var x = true;
x = "string";
Math.round(x);

//optional parameter
function greet(name) {
  return "Hello, ".concat(name || "Het");
}

var y = undefined;
var z = null;
console.log(y, z);
