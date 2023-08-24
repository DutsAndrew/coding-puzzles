const puzzle = 'https://leetcode.com/problems/same-tree/';

const example1a = [1, 2, 3];
const example1b = [1, 2, 3];
// should return true both trees are the same

const example2a = [1, 2];
const example2b = [1, null, 2];
// returns false, trees aren't the same

const example3a = [1, 2, 1];
const example3b = [1, 1, 2];
// returns false

// original attempt without binary search, this solution works but not in leetcode env
const isSameTree = (p, q) => {
    if (p.length !== q.length) return false;

    for (let i = 0;i < p.length; i++) {
        if (p[i] !== q[i] || (p[i] === null || q[i] === null)) return false;
    };

    return true;
};

// attempt with binary search and recursion, works in leetcode
const isSameTree(p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(example1a, example1b));
console.log(isSameTree(example2a, example2b));
console.log(isSameTree(example3a, example3b));

// STATS
    // Runtime: beats 27.7% @ 64ms
    // Memory: beats 12.77% @ 42.7mb