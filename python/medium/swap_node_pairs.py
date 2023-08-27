puzzle = 'https://leetcode.com/problems/swap-nodes-in-pairs/description/'

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        new_list = ListNode(0)
        new_list.next = head
        current = new_list

        while current.next and current.next.next:
            first = current.next
            second = current.next.next

            # swap pairs
            first.next = second.next
            second.next = first
            current.next = second

            # reset for next iteration
            current = current.next.next

        return new_list.next

# PASSED
# Runtime: 40ms
# Memory: 16.23 MB