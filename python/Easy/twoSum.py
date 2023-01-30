def two_sum(numbers, target):
  numbers_found = False
  first_number = 0
  second_number = 0

  while numbers_found == False:
    if second_number < len(numbers): 
      second_number += 1

    if numbers[first_number] + numbers[second_number] == target and first_number != second_number:
      numbers_found = True
      break

    #reset for second iteration
    if second_number == len(numbers) - 1 and numbers_found == False:
      second_number = 0
      first_number += 1

  return [first_number, second_number]

nums_1 = [2,7,11,15]
target_1 = int(9)

nums_2 = [3,2,4]
target_2 = int(6)

nums_3 = [3,3]
target_3 = int(6)

print(two_sum(nums_1, target_1))
print(two_sum(nums_2, target_2))
print(two_sum(nums_3, target_3))