puzzle = 'https://leetcode.com/problems/palindrome-number/description/'

class Solution:
    def isPalindrome(self, x: int) -> bool:
        convert_to_string = str(x)
        reversed_string = convert_to_string[::-1]
        if convert_to_string == reversed_string:
            return True
        else:
            return False
        

example1 = 121 # True
example2 = -121 # False
example3 = 10 # False

solution = Solution()

print(solution.isPalindrome(example1))
print(solution.isPalindrome(example2))
print(solution.isPalindrome(example3))

# Runtime = 68ms beat 84.65% of python3 users
# Memory 16.26mb beat 76.62% of python3 users