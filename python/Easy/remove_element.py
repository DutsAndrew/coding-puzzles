puzzle = 'https://leetcode.com/problems/remove-element/description/'

class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        i = 0
        while i < len(nums):
            if nums[i] == val:
                del nums[i]
            else:
                i += 1

# Runtime: 46ms beats 76.4%
# Memory: 16.3mb beats 72.72%