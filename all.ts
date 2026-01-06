// function fact(n: number): number {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// console.log(fact(5));

// let v: any = true;
// v = "Het";
// console.log(v);

// function processValue(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (Array.isArray(value)) {
//     console.log(value.length);
//   }
// }

// processValue("het");
// processValue([1, 2, 3]);

// function getName(name?: string) {
//   console.log(`${name || "User"}`);
// }
// getName();

// const user: string[] = ["A"];
// user.push("B");
// // const user: readonly string[] = ["A"];
// // user.push("B"); //throw error -> read only array
// console.log(user);

// const score: number[] = [1, 2, 3, 4];
// console.log(score);
// let head: number | undefined = score[0];
// console.log(head);

//tuple
// const arr: [number, string] = [1, "Het"];
// // const arr: readonly [number, string] = [1, "Het"];
// // arr.push("User"); //throw error - read only tuple
// console.log(arr);

//named tuple
// const graph: [x: number, y: number] = [11, 22];
// console.log(graph);

// const map: [number, number] = [67, 89];
// const [x, y] = map;
// console.log(x, y);

//object
// const user: { name: string; age: number } = {
//   name: "het",
//   age: 23,
// };
// console.log(user);

// //option parameter
// const car: { type: string; model: number; color?: string } = {
//   type: "toyota",
//   model: 2019,
// };
// // car.color = "red"; //color parameter is optional
// console.log(car);

//index signature
// const student: { [name: string]: number } = {};
// student.het = 23;
// student.user = 34;
// console.log(student);

//enum
// enum direction {
//   North,
//   East,
//   South,
//   West,
// }
// console.log(direction.North);

// enum direction1 {
//   North = 1,
//   East,
//   South,
//   West,
// }
// console.log(direction1.North);

// type CarYear = number;
// type CarType = string;

// type Car = {
//   year: CarYear;
//   type: CarType;
// };
// const carYear: CarYear = 2018;
// const carType: CarType = "Toyota";

// const car: Car = {
//   year: carYear,
//   type: carType,
// };

// console.log(car);

// interface Rectangle {
//   height: number;
//   width: number;
// }

// const shape: Rectangle = {
//   height: 23,
//   width: 23,
// };
// console.log(shape);

// interface Shap {
//   height: number;
//   width: number;
// }
// interface Color extends Shap {
//   color: string;
// }
// const draw: Color = {
//   height: 200,
//   width: 200,
//   color: "red",
// };
// console.log(draw);

//union
// function sendOTP(otp: string | number) {
//   console.log(`Send OTP : ${otp}`);
// }
// sendOTP(123);
// sendOTP("abced");

// function getName(name: string): string {
//   return `${name}`;
// }
// console.log(getName("Het"));

// function greet(msg: string): void {
//   console.log(msg);
// }
// greet("Good morning");

// function add(a: number, b: number) {
//   return a + b;
// }
// console.log(add(1, 2));

// function multiply(a: number, b: number, c?: number) {
//   return a * b;
// }
// console.log(multiply(3, 4));

interface Person {
  username: string;
  age: number;
  job?: string;
}

let person1: Partial<Person> = {};
person1.username = "Het";
console.log(person1);

let person2: Required<Person> = {
  username: "het",
  age: 23,
  job: "it",
};
console.log(person2);

let person3: Omit<Person, "job" | "age"> = {
  username: "het",
};
console.log(person3);

let person4: Pick<Person, "age"> = {
  age: 23,
};
console.log(person4);

const user: Record<string, number> = {
  a: 65,
  b: 66,
};
console.log(user);

type primitiveType = string | number | boolean;
let value: Exclude<primitiveType, string> = true;

console.log(value);

type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 8,
};
console.log(point);
