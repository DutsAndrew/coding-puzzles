strs1 = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

strs2 = [""]
Output: [[""]]

strs3 = ["a"]
Output: [["a"]]

const groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return words;

  groupWords(words, map);

  return [ ...map.values() ];
};

const groupWords = (words, map) => {
  for (const original of words) {
      const sorted = reorder(original);
      const values = map.get(sorted) || [];

      values.push(original);
      map.set(sorted, values);
  }
}

const reorder = (str) => str
  .split('')
  .sort((a, b) => a.localeCompare(b))
  .join('');


console.log(groupAnagrams(strs1));
// console.log(groupAnagrams(strs2));
// console.log(groupAnagrams(strs3));