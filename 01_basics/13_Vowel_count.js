const str = "Mayank Piparde";
const revstr = str.split("");
count = 0;
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    console.log(`Vowel: ${str[i]} at index ${i}`);
    count++;
  }
}
console.log(`Total vowels are : ${count}`);
