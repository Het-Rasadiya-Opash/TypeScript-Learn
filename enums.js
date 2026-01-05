//Numeric Enums - Default
// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }
// console.log(CardinalDirections.North);
// console.log(CardinalDirections.East);
// console.log(CardinalDirections.South);
// console.log(CardinalDirections.West);
// Numeric Enums - Initialized
// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }
// console.log(CardinalDirections.North);
// console.log(CardinalDirections.East);
// console.log(CardinalDirections.South);
// console.log(CardinalDirections.West);
//Numeric Enums - Fully Initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(StatusCodes.Accepted);
console.log(StatusCodes.BadRequest);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
