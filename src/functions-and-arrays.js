// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1 || num2;
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++)
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
        // console.log(longestWord);
      }
    return longestWord;
  }
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// function sumNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }
//   return count;
// }

function sumNumbers(arr) {
  let count = 0;
  arr.forEach((num) => {
    count += num;
  });
  return count;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let averageOfTheArray = 0;
  if (arr.length === 0) {
    return 0;
  } else {
    averageOfTheArray = sumNumbers(arr) / arr.length;
    return averageOfTheArray;
  }
}

// Iteration 5 | Find Elements
const words2 = [
  "text",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

// function doesWordExist(arr, word) {
//   if (arr.length === 0) {
//     return null;
//   } else {
//     let wordFound = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === word) {
//         wordFound = true;
//       }
//     }
//     return wordFound;
//   }
// }

function doesWordExist(arr, element) {
  if (arr.length === 0) {
    return null;
  } else {
    let wordFound = false;
    arr.forEach((wordSearched) => {
      if (wordSearched === element) {
        wordFound = true;
      }
    });
    return wordFound;
  }
}
