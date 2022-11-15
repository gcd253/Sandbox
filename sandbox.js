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

function caesarCipher(s, k) {
  // Write your code here
  while (k > 26) {
    k -= 26;
  }

  let alphabetString = "abcdefghijklmnopqrstuvwxyz";
  let capitalsString = alphabetString.toUpperCase();
  let splitString = s.split("");

  let alphabet = alphabetString.split("");
  let indexArray = [];

  splitString.map((letter) => {
    if (alphabet.includes(letter)) {
      indexArray.push(alphabet.indexOf(letter));
    } else {
      indexArray.push(letter);
    }
  });

  let portion = alphabet.splice(0, k);

  for (let i = 0; i < portion.length; i++) {
    alphabet.push(portion[i]);
  }

  let partialResult = [];

  indexArray.map((number) => {
    if (typeof number === "number") {
      partialResult.push(alphabet.join("").charAt(number));
    } else {
      partialResult.push(number);
    }
  });

  let capitalsMod = alphabet.join("").toUpperCase().split("");

  let result = [];

  partialResult.map((item) => {
    if (capitalsMod.includes(item)) {
      result.push(capitalsString.indexOf(item));
    } else {
      result.push(item);
    }
  });

  let final = [];

  result.map((char) => {
    if (typeof char === "number") {
      final.push(capitalsMod.join("").charAt(char));
    } else {
      final.push(char);
    }
  });

  return final.join("");
}

caesarCipher("www.abc.xy", 86);
