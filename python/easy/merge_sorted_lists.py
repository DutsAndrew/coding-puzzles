from typing import Optional

puzzle = 'https://leetcode.com/problems/merge-two-sorted-lists/description/'

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        
        node_list = ListNode()
        current = node_list

        while list1 and list2:

            if list1.val < list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next

            current = current.next

        # append any remaining
        if list1:
            current.next = list1
        elif list2:
            current.next = list2

        return node_list.next

# Results
# Runtime 43ms beats 95.44% of python3 submissions
# Memory 16.4mb beats 54.35% of python3 submissions