const str = "hello, here is mayank piparde from indore madhya pradesh";
const convstr = str.split(" ");
const upstr = convstr.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// for i in Range(0, str.length){

//     const upstr = str.charAt(i).toUpperCase() + str.slice(1);
// }

console.log(upstr);
