from typing import Optional

puzzle = 'https://leetcode.com/problems/add-two-numbers/'

l1 = [2,4,3]
l2 = [5,6,4]
# Output: [7,0,8]
# Explanation: 342 + 465 = 807.

# Example 2:
l3 = [0]
l4 = [0]
# Output: [0]

# Example 3:
l5 = [9,9,9,9,9,9,9]
l6 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # can only work from left to right
        # init a new linked list to add the results to
        # loop through both linked lists at the same time
        # set variables to compare each item in lists
            # if the two numbers suprass ten store remainder in another variable

        l1 = ListNode(l1)
        l2 = ListNode(l2)

        if l1 or l2:
            head_one = l1
            head_two = l2

        return head_one.next, head_two.val
        
        # sum_list = ListNode()

        # head_one = l1.val
        # head_two = l2.val

        # carry = False
        # carry_amount = 0

        # while (head_one.next and head_two.next):
        #     # init linked list
        #     if sum_list.val is 0 and sum_list.next is None:
        #         sum_list.val = head_one.val + head_two.val
        #         head_one = head_one.next
        #         head_two = head_two.next
        #     else:
        #         sum_list.next = (head_one.val + head_two.val)
        #         sum_list.val = sum_list.next
        #         head_one.val = head_one.next
        #         head_two.val = head_two.next

        # return sum_list
    
solution = Solution()
print(solution.addTwoNumbers(l1, l2))
# print(solution.addTwoNumbers(l3, l4))
# print(solution.addTwoNumbers(l5, l6))