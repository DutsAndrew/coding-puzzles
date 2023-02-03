link = 'https://leetcode.com/problems/valid-parentheses/';

s1 = "()"
# Output: true

s2 = "()[]{}"
# Output: true

s3 = "(]"
# Output: false

class Solution:
  def valid_parentheses(string: str) -> bool:
    stack = []
    Map = {
      ")" : "(",
      "]" : "[",
      "}" : "{",
    }

    for character in string:
      if character not in Map:
        stack.append(character)
        continue
      if stack[-1] != Map[character]:
        return False
      stack.pop()

    return not stack

print(Solution.valid_parentheses(s1))
print(Solution.valid_parentheses(s2))
print(Solution.valid_parentheses(s3))