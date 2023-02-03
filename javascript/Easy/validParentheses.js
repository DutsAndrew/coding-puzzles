const link = 'https://leetcode.com/problems/valid-parentheses/';

const s1 = "()"
// Output: true

const s2 = "()[]{}"
// Output: true

const s3 = "(]"
// Output: false

const isValid = function(string) {

  const stack = [];
  const map = { 
    ")" : "(", 
    "]" : "[",
    "}" : "{"
  };

  for (const character of string) {

    // if character is not a closing parenthesis push it to stack
    const isParenthesis = (character in map);
    if (!isParenthesis) {
      stack.push(character);
      continue;
    }

    // check if leading parenthesis is on stack, if it is remove parenthesis from stack
    const isEqual = (stack[stack.length - 1] === map[character])
    if (isEqual) {
      stack.pop();
      continue;
    }
  }

  return (stack.length === 0);

};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));