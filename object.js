var car = {
    type: "Honda",
    model: "City",
    year: 2019,
};
console.log(car);
//inference type of obejct
var car1 = {
    type: "BMW",
};
car1.type = "Audi";
// car1.type = 12;  //type string not allow number
console.log(car1);
//optional parameter
var bike = {
    type: "Splendor",
    //model: 2019, //model is option property of object
};
bike.model = 2022;
console.log(bike);
//Index Signatures
var nameAgeMap = {};
nameAgeMap.Het = 22;
nameAgeMap.user = 34;
console.log(nameAgeMap);
