// function reverseArray(arr) {
//   const newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     newArray.unshift(arr[i]);
//   }
//   console.log(newArray);
// }

// reverseArray([3, 2, 1]);

// function reverseArrayInPlace(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr.pop()
//     arr.splice(i, 0, element)
//   }
//   console.log(arr)
// }

// reverseArrayInPlace([6,5,4,3,2,1,0])

// function caesarCipher(s, k) {
//   // Write your code here
//   while (k > 26) {
//     k -= 26;
//   }

//   let alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   let capitalsString = alphabetString.toUpperCase();
//   let splitString = s.split("");

//   let alphabet = alphabetString.split("");
//   let indexArray = [];

//   splitString.map((letter) => {
//     if (alphabet.includes(letter)) {
//       indexArray.push(alphabet.indexOf(letter));
//     } else {
//       indexArray.push(letter);
//     }
//   });

//   let portion = alphabet.splice(0, k);

//   for (let i = 0; i < portion.length; i++) {
//     alphabet.push(portion[i]);
//   }

//   let partialResult = [];

//   indexArray.map((number) => {
//     if (typeof number === "number") {
//       partialResult.push(alphabet.join("").charAt(number));
//     } else {
//       partialResult.push(number);
//     }
//   });

//   let capitalsMod = alphabet.join("").toUpperCase().split("");

//   let result = [];

//   partialResult.map((item) => {
//     if (capitalsMod.includes(item)) {
//       result.push(capitalsString.indexOf(item));
//     } else {
//       result.push(item);
//     }
//   });

//   let final = [];

//   result.map((char) => {
//     if (typeof char === "number") {
//       final.push(capitalsMod.join("").charAt(char));
//     } else {
//       final.push(char);
//     }
//   });

//   return final.join("");
// }

// caesarCipher("www.abc.xy", 86);

// function gridChallenge(grid) {
//   // Write your code here
//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   const alpha = [];
//   let length = grid[0].length;

//   grid.map((str) => {
//     let array = str.split("").sort();
//     str = array.join("")
//     alpha.push(str)
//   });

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 0; j < length; j++) {
//       if (alpha[i][j] > alpha[i + 1][j]) {
//         return "NO"
//       }
//     }
//   }
//   return "YES"

// }

// gridChallenge(["eabcd", "fghij", "olkmn", "trpqs", "abcde"]);

// function superDigit(n, k) {
//   // Write your code here
//   let number = n.toString().split("");
//   let digit = []

//   for (let i = 0; i < number.length; i++) {
//     digit.push(Number(number[i]))
//   }

//   function digitSum(sum) {
//     const array = sum.toString().split("")
//     const empty = []

//     for (let i = 0; i < array.length; i++) {
//       empty.push(Number(array[i]))
//     }

//     if (empty.length === 1) {
//       return empty[0];
//     } else {
//       return digitSum(empty.reduce((a, b) => a + b))
//     }
//   }
//   let result = digitSum((digit.reduce((a, b) => a + b)) * k)
  
//   return result
// }

// superDigit(9875, 4)