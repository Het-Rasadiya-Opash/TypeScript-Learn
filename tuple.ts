let ourTuple: [number, boolean, string];
ourTuple = [22, true, "het"];
//ourTuple = [true, 22, "het"]; //  incorrently assign value
console.log(ourTuple);

let info: [string, number] = ["Het", 22];
info.push("IT Dept");
console.log(info);

let info1: readonly [string, number] = ["Het", 22];
// info1.push("IT Dept"); //not add item in tuple in readOnly Mode
console.log(info1);

//named tuple
const graph: [x: number, y: number] = [22, 33];
console.log(graph);

//destructuring tuple
const cordinates: [number, number] = [229, 339];
const [x, y] = cordinates;
console.log(x, y);

