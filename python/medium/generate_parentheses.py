puzzle = 'https://leetcode.com/problems/generate-parentheses/description/'

# due to the time and space complexity of this problem recursion and backtracking are needed to minimize the load
# good details on the problem can be found here: https://redquark.org/leetcode/0022-generate-parentheses/

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def backtrack(combination, open_count, close_count):
            if len(combination) == 2 * n:
                combinations.append(combination)
                return
            
            if open_count < n:
                backtrack(combination + "(", open_count + 1, close_count)
            if close_count < open_count:
                backtrack(combination + ")", open_count, close_count + 1)
    
        combinations = []
        backtrack("", 0, 0)
        return combinations

# PASSED
## Runtime 39ms, beats 86.78% of Python3 users
## Memory 16.57mb, beats 87.54% of Python3 users