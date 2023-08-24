pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  const piggy = 'ay';
  let pigLatinString = '';
  let eachWord = str.split(' ');
  
  for (let i = 0; i < eachWord.length; i++) {
    let pigified = '';
    if (eachWord[i].match(/([.,!?"#$%^&*+=])/g)) {
      pigified += eachWord[i];
    } else {
      let firstLetter = eachWord[i].charAt(0);
      let remainingWord = eachWord[i].substring(1);
      pigified += remainingWord += firstLetter += piggy;
    }
    if (i < eachWord.length - 1) {
      pigified += ' ';
    }
    pigLatinString += pigified;
  }
  return pigLatinString.trim();
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));

// PASSED - CodeWars