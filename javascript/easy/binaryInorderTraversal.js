const puzzle = 'https://leetcode.com/problems/binary-tree-inorder-traversal/';

const example1 = [1, null, 2, 3]; // [1, 3, 2]
const example2 = []; // []
const example3 = [1]; // [1]



function inorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    const inOrderList = [];
    const stack = [];
    let currentNode = root;
  
    // if at any point .left or .right doesn't exist the stack is popped to analzye
    while (currentNode || stack.length) {
      // traverse left side of tree
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
  
      currentNode = stack.pop();
      inOrderList.push(currentNode.val);
      currentNode = currentNode.right;
    }
  
    return inOrderList;
  }

// does not run locally as you need the tree node definition applied in your env.

// Leetcode Data:
  // Runtime 44ms, beats 99.6%
  // Memory  42.2mb, beats 47.63%