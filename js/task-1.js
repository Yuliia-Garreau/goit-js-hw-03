"use strict";

function slugify(title) {
  const titleLowerCase = title.toLowerCase();
  //   console.log(titleLowerCase);
  const titleSplit = titleLowerCase.split(" ");

  //   console.log(titleSplit);
  return titleSplit.join("-");
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function transformString(string) {
//   const words = string.split(" ");
//   console.log(words);
//   return words.join("-");
// }

// console.log(transformString("user age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid"
