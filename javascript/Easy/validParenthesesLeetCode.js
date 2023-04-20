const puzzle = 'https://leetcode.com/problems/valid-parentheses/description/';

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(string) {

  if (string.length <= 1) return false;

  const stack = [];
  const map = { 
    ")" : "(", 
    "]" : "[",
    "}" : "{"
  };

  for (const character of string) {

    // if character is not a closing parenthesis push it to stack
    const isOpenParentheses = (character in map);
    if (!isOpenParentheses) {
      stack.push(character);
      continue;
    } else if (stack.length === 0) {
      return false;
    } else if (stack[stack.length - 1] !== map[character]) {
      return false;
    };

    // check if leading parenthesis is on stack, if it is remove parenthesis from stack
    const compareCharacterToLastOnStack = (stack[stack.length - 1] === map[character])
    if (compareCharacterToLastOnStack) {
      stack.pop();
      continue;
    }
  }

  return (stack.length === 0);

};

// STATS:
  // Memory: beats 77.71% @ 42.2 Mb/s
  // Runtime: beats 32.3% @ 70 ms