const puzzle = 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/';


// SOLUTION:
  // works by looping through list with a while loop using the head given, as long as there is a next node
  // then the loop keeps running. It checks if the current head value is equal to the next one, if it is; it skips
  // that node and sets the next value to the next head after it. If this isn't the case then a new NodeList is created
  // this is to keep track of the non-duplicate values we set them as a new Node Object and then add them to the
  // current head list using .next

const deleteDuplicates = (head) => {
  if (!head) return null;

  // variables for holding the modified linked list, set head to link the rest of the list
  let newHead = new ListNode(head.val);
  let currentHead = newHead;

  while (head.next !== null) {
    if (head.val === head.next.val) {
      // skip duplicate set next to the following node
      head.next = head.next.next;
    } else {
      // add the non-duplicate node to the modified list
      currentHead.next = new ListNode(head.next.val);
      currentHead = currentHead.next;
      // unshift list as it's been added to modified list
      head = head.next;
    };
  };
  return newHead;
};

// beats: 
  // Runtime: 49.73% @ 71 ms
  // Memory: 19.37% @ 44.7 Mb