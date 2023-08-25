puzzle = 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/'

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digit_map = {
            '2': ['a', 'b', 'c'],
            '3': ['d', 'e', 'f'],
            '4': ['g', 'h', 'i'],
            '5': ['j', 'k', 'l'],
            '6': ['m', 'n', 'o'],
            '7': ['p', 'q', 'r', 's'],
            '8': ['t', 'u', 'v'],
            '9': ['w', 'x', 'y', 'z'],
        }

        def backtrack(combination, next_digits):
            if len(next_digits) == 0:
                combinations.append(combination)
            else:
                for letter in digit_map[next_digits[0]]:
                    backtrack(combination + letter, next_digits[1:])

        combinations = []
        if digits:
            backtrack("", digits)
        return combinations
    
# PASSED
# Runtime: 31ms, beats 93.89% of Python3 users
# Memory: 16.29mb, beats 83.14% of Python3 users