const s = "anagram",
      t = "nagaram"
// Output: true

const u = "rat",
      x = "car"
// Output: false

const isAnagram = function(s, t) {
  let sArray = [];
  let tArray = [];
  
  for (let i = 0; i < s.length; i++) {
      sArray.push(s[i]);
  }
  for (let i = 0; i < t.length; i++) {
      tArray.push(t[i]);
  }
  
  if (sArray.sort().join(',') === tArray.sort().join(',')) {
      return true;
  }
  
  return false;
};

console.log(isAnagram(s, t));
console.log(isAnagram(u, x));

// PASSED