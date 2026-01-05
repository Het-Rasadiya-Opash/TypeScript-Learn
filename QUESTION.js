const a = [10, 20, 30];

let len = a.length;
let sum = 0;
let newArr = [];
let total = a.reduce((acc, v) => acc + v, 0);

for (let i = 0; i < len; i++) {
  sum = total - a[i];
  newArr.push(sum);
}
console.log(newArr);
