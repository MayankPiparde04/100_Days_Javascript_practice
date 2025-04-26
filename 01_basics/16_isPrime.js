const n = 452;
let isPrime = 1;

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = 0;
    break;
  }
}
if (isPrime) {
  console.log(`${n} is a prime number`);
} else {
  console.log(`${n} is not a prime number`);
}
