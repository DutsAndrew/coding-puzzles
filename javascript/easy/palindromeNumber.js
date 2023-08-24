const number = 121;
const integer = -121;
const ten = 10;

function isPalindrome(number) {
  const reversedNumber = Number(number.toString().split('').reverse().join(''));
  if (reversedNumber === number) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(number));
console.log(isPalindrome(integer));
console.log(isPalindrome(ten));

// PASSED