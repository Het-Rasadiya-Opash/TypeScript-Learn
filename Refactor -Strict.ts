// loose JS
// let count = 0;
// let name = "TypeScript";
// let user; // any

// strict TS
let count: number = 0;
let name: string = "TypeScript";
let user: { id: number, name: string } | undefined; 


// loose JS
// function add(a, b) {
//   return a + b;
// }

// strict TS
function add(a: number, b: number): number {
  return a + b;
}


interface User {
  id: number;
  username: string;
  email?: string; // Optional property
}

function displayUser(user: User): void {
  console.log(`User: ${user.username}, ID: ${user.id}`);
}

