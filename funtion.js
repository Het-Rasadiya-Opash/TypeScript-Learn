//return type
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void type
function printGreet() {
    console.log("Hello");
}
printGreet();
//parametes
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));
//optional paramete
function add(a, b, c) {
    return a * b * (c || 1);
}
console.log(add(2, 3));
//default parameter
function pow(value, expo) {
    if (expo === void 0) { expo = 2; }
    return Math.pow(value, expo);
}
console.log(pow(3, 2));
//rest paraameter
function adds(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(adds(10, 10, 5));
//named parameter
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
