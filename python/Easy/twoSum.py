def twoSum(numbers, target):
  numbersFound = False
  firstNumber = 0
  secondNumber = 0

  while numbersFound == False:
    if secondNumber < len(numbers): 
      secondNumber += 1

    if numbers[firstNumber] + numbers[secondNumber] == target and firstNumber != secondNumber:
      numbersFound = True
      break

    #reset for second iteration
    if secondNumber == len(numbers) - 1 and numbersFound == False:
      secondNumber = 0
      firstNumber += 1

  return [firstNumber, secondNumber]

nums1 = [2,7,11,15]
target1 = int(9)

nums2 = [3,2,4]
target2 = int(6)

nums3 = [3,3]
target3 = int(6)

print(twoSum(nums1, target1))
print(twoSum(nums2, target2))
print(twoSum(nums3, target3))