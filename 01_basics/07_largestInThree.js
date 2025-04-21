const a = 1541;
const b = 20;
const c = 451;
let largest = a;
if (a < b) {
  if (b > c) {
    largest = b;
  } else {
    largest = c;
  }
} else {
  if (a > c) {
    largest = a;
  } else {
    largest = c;
  }
}
console.log(`Largest number is: ${largest}`);
