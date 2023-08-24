// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

const removeItems = function(integer_list, values_list){
  const intersection = integer_list.filter(element => values_list.includes(element));
  intersection.forEach(item => {
    let elementToRemove = integer_list.indexOf(item);
    integer_list.splice(elementToRemove, 1);
  });
  return integer_list;
}

console.log(removeItems([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
console.log(removeItems([1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2]));
console.log(removeItems([8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3]));

// PASSED 