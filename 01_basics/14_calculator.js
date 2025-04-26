const num1 = 5;
const num2 = 10;
const operator = "*";

if (operator === "+") {
  console.log(`Sum: ${num1 + num2}`);
} else if (operator === "-") {
  console.log(`Difference: ${num1 - num2}`);
} else if (operator === "*") {
  console.log(`Product: ${num1 * num2}`);
} else if (operator === "/") {
  console.log(`Quotient: ${num1 / num2}`);
} else if (operator === "%") {
  console.log(`Remainder: ${num1 % num2}`);
} else if (operator === "**") {
  console.log(`Exponent: ${num1 ** num2}`);
} else {
  console.log(
    "Invalid operator. Please use one of the following: +, -, *, /, %, **"
  );
}
