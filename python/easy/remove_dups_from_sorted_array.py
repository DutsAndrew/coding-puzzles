puzzle = 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/'

class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        # loop through nums with (start, stop, step) to loop backwards
        for i in range(len(nums)-1, 0, -1):
            # if current item matches previous remove it; this prevents indexing errors that happen when indexing forwards
            if nums[i] == nums[i-1]:
                del nums[i]

        return len(nums), nums
        

example1 = [1,1,2] # 2, [1, 2, _]
example2 = [0,0,1,1,1,2,2,3,3,4] # 5, [0,1,2,3,4,_,_,_,_,_]

solution = Solution()

print(solution.removeDuplicates(example1))
print(solution.removeDuplicates(example2))

# Runtime: 88ms beats 95.54% of Python3 users
# Memory: 17.82mb beats 91.13% of Python3 users