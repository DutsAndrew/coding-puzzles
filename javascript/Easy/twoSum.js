const nums1 = [2,7,11,15], 
      target1 = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums2 = [3,2,4], 
      target2 = 6
// Output: [1,2]

const nums3 = [3,3],
      target3 = 6
// Output: [0,1]

function twoSum(numbers, target) {
  let numbersFound = false;
  let firstNumber = 0;
  let secondNumber = 0;
  
  while (numbersFound === false) {
      if (secondNumber < numbers.length) secondNumber++;
      if ((numbers[firstNumber] + numbers[secondNumber]) === target && firstNumber !== secondNumber) {
          numbersFound = true;
      }
      
      // reset for next iteration
      if (secondNumber === numbers.length - 1 && numbersFound === false) {
          secondNumber = 0;
          firstNumber++;
      }
  }
  return [firstNumber, secondNumber];
}

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));

// PASSED