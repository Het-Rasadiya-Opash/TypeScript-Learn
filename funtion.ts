//return type
function getTime(): number {
  return new Date().getTime();
}
console.log(getTime());

//void type

function printGreet(): void {
  console.log("Hello");
}
printGreet();

//parametes
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2, 2));

//optional paramete
function add(a: number, b: number, c?: number) {
  return a * b * (c || 1);
}
console.log(add(2, 3));

//default parameter
function pow(value: number, expo: number = 2) {
  return value ** expo;
}
console.log(pow(3, 2));

//rest paraameter
function adds(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(adds(10, 10, 5));

//named parameter
function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));

//type alias function
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10));
