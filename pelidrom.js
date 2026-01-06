let n = 111;
let rim;
let rev = 0;
let temp = n;
while (n > 0) {
  rim = n % 10;
  rev = rev * 10 + rim;
  n = Math.floor(n / 10);
}
console.log(rev);

if (temp === rev) {
  console.log("Pelidrom");
} else {
  console.log("not pelidrom");
}
