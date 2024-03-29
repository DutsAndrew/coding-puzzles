puzzle = 'https://leetcode.com/problems/roman-to-integer/description/'

class Solution:
    def romanToInt(self, s: str) -> int:

        roman_map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }

        total = 0
        i = 0

        while i < len(s):
            # to prevent index out of range error
            # and to check if subtraction is needed if next value is higher than the current one
            if i + 1 < len(s) and roman_map[s[i]] < roman_map[s[i + 1]]:
                total += roman_map[s[i + 1]] - roman_map[s[i]]
                i += 2
            else:
                total += roman_map[s[i]]
                i += 1

        return total
    
solution = Solution()

example1 = "III"
example2 = "LVIII"
example3 = "MCMXCIV"

print(solution.romanToInt(example1))
print(solution.romanToInt(example2))
print(solution.romanToInt(example3))

# Runtime - 60ms, beating 76% of python users
# Memory - 16.21mb, beating 83.21% of python users