const list1 = [1,2,4];
const list2 = [1,3,4];
// [1,1,2,3,4,4]

// plan:
  // 1. create an array to store sortedLists
  // 2. compare the first item in each array since they are sorted
  // 3. Push the smaller item to the array
  // 4. unshift the array that pushed an element
  // 5. keep comparing until both lists are at 0 length

const mergeSortedLists = (list1, list2) => {
  const mergedArray = [];
  while (list1.length !== 0 && list2.length !== 0) {
    if (list1.length === 0 && list2.length === 0) break;

    if (list1.length === 0) {
      mergeSortedLists.push(list2);
      break;
    };
    if (list2.length === 0) {
      mergeSortedLists.push(list1);
      break;
    };

    if (list1[0] < list2[0]) {
      mergedArray.push(list1.shift());
    } else if (list2[0] < list1[0]) {
      mergedArray.push(list2.shift());   
    } else {
      mergedArray.push(list1.shift());
      mergedArray.push(list2.shift());
    }

  };
  return mergedArray;
};

console.log(mergeSortedLists(list1, list2));

// leetcode requires that list1, and list2 are NodeLists, so you can't use javascripts .shift() method the following code must be run on leetcode: 

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 
const mergeTwoLists = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  let mergedHead = null;
  let current = null;

  while (list1 && list2) {
    let temp = null;

    if (list1.val < list2.val) {
      temp = list1;
      list1 = list1.next;
    } else {
      temp = list2;
      list2 = list2.next;
    }

    if (!mergedHead) {
      mergedHead = temp;
      current = temp;
    } else {
      current.next = temp;
      current = current.next;
    }
  }

  if (list1) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return mergedHead;
};