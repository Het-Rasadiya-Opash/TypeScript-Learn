interface Shape {
  height: number;
  weight: number;
}
const rectangle: Shape  = {
  height: 200,
  weight: 200,
};

console.log(rectangle);

interface Animal {
  name: string;
}
interface Animal {
  age: number;
}
const dog: Animal = { name: "Fido", age: 5 };
console.log(dog);

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

console.log(coloredRectangle);
