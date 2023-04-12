const fibsFizzBuzz = function(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];
  
  // The next number is found by adding up the two numbers before it, starting with [1,1]
  const array = [1,1];
  
  // get fibonacci numbers
  for (let i = 2; i < n; i++) {
    const lastNumber = array.slice(-1)[0];
    const secondToLastNumber = array.slice(-2, -1)[0];
    const newFibonacciNumber = lastNumber + secondToLastNumber;
    array.push(newFibonacciNumber);
  };
  
   // convert fibonacci sequence to fizz,buzz,and fizzbuzz
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = "FizzBuzz";
    } else if (array[i] % 3 === 0) {
      array[i] = "Fizz";
    } else if (array[i] % 5 === 0) {
      array[i] = "Buzz";
    };
  };
  
  return array;
};