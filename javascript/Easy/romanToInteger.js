// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, 
// which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However,
// the numeral for four is not IIII. Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 

// There are six instances where subtraction is used:
  // I can be placed before V (5) and X (10) to make 4 and 9. 
  // X can be placed before L (50) and C (100) to make 40 and 90. 
  // C can be placed before D (500) and M (1000) to make 400 and 900.
  // Given a roman numeral, convert it to an integer.

const roman1 = "III"
// Output: 3
// Explanation: III = 3.

const roman2 = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

const roman3 = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(romanInt) {
  let romanRef = romanInt;
  let normalInt = 0;
  
  while (romanRef.length !== 0) {
    if (romanRef.slice(0,2) === "IV" 
      || romanRef.slice(0,2) === "IX"
      || romanRef.slice(0,2) === "XL"
      || romanRef.slice(0,2) === "XC"
      || romanRef.slice(0,2) === "CD"
      || romanRef.slice(0,2) === "CM"
    ) {
      // edge case when romanInt counts backwards
      const firstTwo = romanRef.slice(0,2);

      switch(firstTwo) {
        case "IV":
          normalInt = normalInt += 4;
          break;
        case "IX":
          normalInt = normalInt += 9;
          break;
        case "XL":
          normalInt = normalInt += 40;
          break;
        case "XC":
          normalInt = normalInt += 90;
          break;
        case "CD":
          normalInt = normalInt += 400;
          break;
        case "CM":
          normalInt = normalInt += 900;
          break;
        default:
          normalInt = normalInt += 0;
          break;
      }

      romanRef = romanRef.slice(2);

    } else {
      // add numbers based on roman counting methods
      const nextRomanInt = romanRef.slice(0, 1);

      switch(nextRomanInt) {
        case "I":
          normalInt = normalInt += 1;
          break;
        case "V":
          normalInt = normalInt += 5;
          break;
        case "X":
          normalInt = normalInt += 10;
          break;
        case "L":
          normalInt = normalInt += 50;
          break;
        case "C":
          normalInt = normalInt += 100;
          break;
        case "D":
          normalInt = normalInt += 500;
          break;
        case "M":
          normalInt = normalInt += 1000;
          break;
      }

      romanRef = romanRef.slice(1);
    }
  }
  return normalInt;
}

console.log(romanToInt(roman1));
console.log(romanToInt(roman2));
console.log(romanToInt(roman3));

// PASSED 