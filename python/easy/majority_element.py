puzzle = 'https://leetcode.com/problems/majority-element/description/'

# brute force solution and first attempt, it does pass the test but runs slower than ideal:
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        unique_elements = {}

        for item in nums:
            if item in unique_elements:
                unique_elements[item] += 1
            else:
                unique_elements[item] = 0

        highest_key = 0
        highest_value = 0
        
        for key, value in unique_elements.items():
            if value > highest_value:
                highest_key = key
                highest_value = value
            else:
                continue

        return highest_key
    
# this solution isn't super efficient as it has a space and time complexity of O(n),
# which means it will get more complex as the list grows.
# Running two loops is not an ideal solution for this problem.

# optimal Boyer-Moore Voting algorithm for this problem, this is the more efficient solution,
# however it ran just as fast as the brute force solution on leetcode:

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        candidate = None
        count = 0

        for num in nums:
            if count == 0:
                candidate = num
                count = 1
            elif num == candidate:
                count += 1
            else:
                count -= 1

        return candidate
    
