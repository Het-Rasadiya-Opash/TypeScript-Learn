var ourTuple;
ourTuple = [22, true, "het"];
//ourTuple = [true, 22, "het"]; //  incorrently assign value
console.log(ourTuple);
var info = ["Het", 22];
info.push("IT Dept");
console.log(info);
var info1 = ["Het", 22];
// info1.push("IT Dept"); //not add item in tuple in readOnly Mode
console.log(info1);
//named tuple
var graph = [22, 33];
console.log(graph);
//destructuring tuple
var cordinates = [229, 339];
var x = cordinates[0], y = cordinates[1];
console.log(x, y);
