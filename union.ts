function printStatusCode(code: string | number) {
  console.log(`My Status code is ${code}`);
}
printStatusCode(404);
printStatusCode("500");

//union type in error fetch
// function printStatusCodes(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }