// loose JS
// let count = 0;
// let name = "TypeScript";
// let user; // any
// strict TS
var count = 0;
var name = "TypeScript";
var user;
// loose JS
// function add(a, b) {
//   return a + b;
// }
// strict TS
function add(a, b) {
    return a + b;
}
function displayUser(user) {
    console.log("User: ".concat(user.username, ", ID: ").concat(user.id));
}
function getUsername(user) {
    var _a;
    // Use optional chaining to safely access property
    return (_a = user === null || user === void 0 ? void 0 : user.username) !== null && _a !== void 0 ? _a : "Guest";
}
