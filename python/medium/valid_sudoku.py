puzzle = 'https://leetcode.com/problems/valid-sudoku/'

board = [
<<<<<<< HEAD
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"],
] # True

second_board = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"],
] # False

# Thought process:
# 9 x 9 grid so will need to loop through and corresponding columns/rows
# ideally just return False on a bad catch so I don't need to store positive checks
# 

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
=======
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"],
] # True

wrong_board = [
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"],
] # False

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
        def has_duplicates(nums: List[str]) -> bool:
            valid_entries = set()
            for num in nums:
                if num != '.':
                    if num in valid_entries:
                        return True
                    else:
                        valid_entries.add(num)
            return False

        # check rows and cols
        for i in range(9):
              row = [board[i][j] for j in range(9)]
              col = [board[j][i] for j in range(9)]
              
              if has_duplicates(row) or has_duplicates(col):
                  return False
            
        # check sub-boxes
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                sub_grid = [board[i + x][j + y] for x in range(3) for y in range(3)]
                if has_duplicates(sub_grid):
                    return False
                
        return True


solution = Solution()

print(solution.isValidSudoku(board))
print(solution.isValidSudoku(wrong_board))

# PASSED
# Runtime: 100ms
# Memory: 16.21 MB
>>>>>>> 4b2010701138f479f36560f5e25856f324cb1663
