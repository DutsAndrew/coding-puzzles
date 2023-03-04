const strs1 = ["flower","flow","flight"];
// Output: "fl"

const strs2 = ["dog","racecar","car"];
// Output: ""

const strs3 = ["cir","car"];
// Output: "c"

const longestCommonPrefix = function(strs, prefix = '') {

  // break case
  if (strs.length === null || strs.length === 0) return '';

  // looping through first string's characters
  for (let i = 0; i < strs[0].length; i ++) {
    const character = strs[0][i];

    // looping through all strings vertically WITH first string
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix;
    };

    // if character matches for ALL strings, add it to prefix
    prefix = prefix += character;
  };

  return prefix;

};

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));