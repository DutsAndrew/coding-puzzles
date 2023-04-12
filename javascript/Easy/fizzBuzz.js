const fizzBuzz = function(n) {
  if (n === 1) return ["1"];
  if (n === 2) return ["1", "2"];
  
  // The next number is found by adding up the two numbers before it, starting with [1,1]
  const array = [];
  
  // get fibonacci numbers
  for (let i = 1; i <= n; i++) {
    array.push(i.toString());
  };
  
   // convert fibonacci sequence to fizz,buzz,and fizzbuzz
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) % 3 === 0 && Number(array[i]) % 5 === 0) {
      array[i] = "FizzBuzz";
    } else if (Number(array[i]) % 3 === 0) {
      array[i] = "Fizz";
    } else if (Number(array[i]) % 5 === 0) {
      array[i] = "Buzz";
    };
  };
  
  return array;
};

// At submission was beating other submissions:
  // By 71.76% runtime
  // By 32.97% memory usage