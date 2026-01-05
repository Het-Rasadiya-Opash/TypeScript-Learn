// casting with as

let x: unknown = "Hey";
console.log((x as string).length);

//casting with <>
console.log((<string>x).length);
