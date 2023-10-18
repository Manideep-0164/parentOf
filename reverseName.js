let name = "john doe";

let reversedNameByWord = name.split(" ").reverse().join(" ");
console.log(reversedNameByWord);

let reversedNameByChar = "";
for (let i = name.length - 1; i >= 0; i--) {
  reversedNameByChar += name[i];
}
console.log(reversedNameByChar);

// React js
//student table
//name, class, marks

// completed till listing the students data
