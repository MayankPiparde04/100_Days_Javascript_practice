let num = "12d3456543d21";
num = num.toLowerCase();
let revnum = num.split("").reverse().join("").toLowerCase();
if (num == revnum) {
  console.log(`${num} is a palindrome`);
} else {
  console.log(`${num} is not a palindrome`);
}
