// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// return masked string
function maskify(cc) {
  
  // gathers information for string masking
  let stringLength = cc.length;
  let lastFour = cc.slice(-4);
  let maskedAmount = stringLength - 4;
  
  // processes the masking
  let maskedArray = [];
  for (let i = 0; i < maskedAmount; i++) {
    maskedArray.push('#');
  }
  maskedArray.push(lastFour);
  let arrayToString = maskedArray.toString();
  let removeCommas = arrayToString.replace(/,+/g, '');
  return removeCommas;
}

// PASSED - Codewars