puzzle = 'https://leetcode.com/problems/add-digits/description/'

class Solution:
    def addDigits(self, num: int) -> int:
        if num == 0:
            return 0
        elif num % 9 == 0:
            return 9
        else:
            return num % 9
        
# This solution is interesting as a normal loop would be used in a brute force solution, but the problem is misleading as
# you're actually looking for the root of the number, which can be found with the logic above.