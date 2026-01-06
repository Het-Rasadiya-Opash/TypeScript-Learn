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
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(StatusCodes.Accepted);
console.log(StatusCodes.BadRequest);

enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
