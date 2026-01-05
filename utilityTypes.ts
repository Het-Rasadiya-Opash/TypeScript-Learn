interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;
console.log(pointPart);

interface Car {
  make: string;
  model: string;
  mileage?: number;
}
let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000,
};
console.log(myCar);

//record
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

console.log(nameAgeMap);

interface Person {
  name: string;
  age: number;
  location?: string;
}

//omit
const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
};
console.log(bob);

//pick
const bob1: Pick<Person, "name"> = {
  name: "Bob",
};
console.log(bob1);

//read only
interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
// person.name = 'Israel'; // Readonly property
