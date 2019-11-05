'use strict';

/**
 * ===========================================================================
 * @function countingSheep
 * @desc counts number of sheep that jump over fence.
 * @param {num} num - the number sheep
 * @returns none
 * @display displays no of sheep that jumped over fence
 */
const countingSheep = num => {
  //base case
  if (!num) {
    return console.log('All sheep jumped over the fence');
  }

  //recursive case - nothing returned here because we only need to print a countdown for each sheep that jumps over
  console.log(`${num}: Another sheep jumps over the fence`);
  const newNum = num-1
  countingSheep(newNum);
}
countingSheep(5);


/**
 * ===========================================================================
 * @function powerCalculator
 * @description calculates the power of base to exp
 * @param {num} base 
 * @param {num} exp 
 * @returns value of input base (integer) raised to the power of the input exponent (integer)
 * @display none
 */
const powerCalculator = (base, exp) => {
  //if items are less than 0 return base/exp should be >=0
  if (base < 0) {
    return 'base should be >= 0';
  }
  if (exp < 0) {
    return 'exp should be >= 0';
  }

  // if exp = 0 return value 
  if (exp === 0) {
    return 1;
  }

  // if exp > 1, subtract one from exp and multiply base by a new recursive
  exp = exp - 1;
  
  return base * powerCalculator(base, exp);
}
powerCalculator(2,3)

/**
 * ===========================================================================
 * @function reverseString
 * @description reverses a string
 * @param {str} str 
 * @returns  reverse of the input 
 * @display none;
 */
const reverseString = str => {
  //base call
  if (!str.length) {
    return '';
  }

  //slice last char of string and concatenate to recursive call 
  const indexLastChar = str.length -1;

  //Remove last char of string
  const strArr = Array.from(str);
  strArr.splice(indexLastChar, 1);

  return str.charAt(indexLastChar) + reverseString(strArr.join(''));
}
console.log(reverseString('heyo'))

/**
 * ===========================================================================
 * @function nthTriNum
 * @description calculates the number of stars for the Nth triangle number (forms eqi triangle) 
 * @param {num} n 
 * @param {num} i 
 * @returns number of stars in nth sequence
 */
const nthTriNum = (n, i=0) => {
  //base call
  if (i === n) {
    return 0;
  }

  //recursive call 
  i++;
  return i + nthTriNum(n, i);
}
console.log(nthTriNum(4))

/**
 * ===========================================================================
 * @function stringSplitter
 * @description make a function that splits based on a specified separator
 * @param {str} str 
 * @param {str} separator 
 * @returns array of items separated by separator
 */
const stringSplitter = (str, separator) => {
  //base call 
  if (!str.length) {
    return [];
  }

  //recursive call
  str = Array.from(str)
  
  let miniStr;
  for (let i=0; i < str.length; i++) {  
    if (str[i] === separator) {    
      miniStr = str.slice(0, i);
      miniStr = miniStr.join('');
      str = str.slice(i+1).join('');
    }
  }
  
  if (!miniStr) {
    miniStr = str.join('')
    str = ''
  }

  return [miniStr, ...stringSplitter(str, separator)];
}
console.log(stringSplitter('02/20/2020', '/'))

/**
 * ===========================================================================
 * @function fibonacci
 * @description returns fibonacci seq of param num
 * @param {num} fNum 
 * @param {num} num1 default 0
 * @param {num} num2 default 0
 * @param {num} i default 1
 */
const fibonacci = (fNum, num1=0, num2=0, i=1) => {
  if (fNum + 1 === i) {
    return '';
  }

  if (i === 1) {
    num1 = 0;
    return num1 + fibonacci(fNum, num1, 1, i + 1)
  }
  if (i === 2) {
    num2 = 1;
    return `, ${num2}` + fibonacci(fNum, 1, num2, i + 1)
  }
  let num3 = num1 + num2;
  return `, ${num3}` + fibonacci(fNum, num2, num3, i + 1)
}
console.log(fibonacci(7));

/**
 * ===========================================================================
 * @function factorial
 * @param {num} num 
 * @param {num} i 
 * @returns factorial of a given number
 */
const factorial = (num, i=1) => {
  //base case
  if (num + 1 === i) {
    return 1;
  }

  //recursive case 
  return i * factorial(num, ++i)
}
console.log(factorial(5))

/**
 * ===========================================================================
 * @function mazeSolver
 * @description solves maze 
 * @param {arr} maze 
 * @param {num} i def 0
 * @param {num} j def 0
 */
const mazeSolver = (maze, i=0, j=0) => {
  //if we are at the exit, exit loop
  if (maze[i][j] === 'e') {
    return '';
  }

  let letter;
  if (maze[i][j+1] === ' ' || maze[i][j+1] === 'e') {
    j++;
    letter = 'R';
  }
  else if (maze[i+1][j] === ' ' || maze[i+1][j] === 'e') {
    i++;
    letter = 'D';
  }
  else {
    //go left until you hit an obstacle then go down onemptied
    //this code could be improved to include cases for where you need to go up
    for (let counter = j; counter > 0; counter--) {
      if (letter) {
        letter = letter + 'L';
      } else {
        letter = 'L';
      }
      j--;
    }
    i++;
    return letter + 'D' + mazeSolver(maze, i, j);
  }
  return letter + mazeSolver(maze, i, j)
}
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];
let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', '*', ' ', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
console.log(mazeSolver(maze));

/**
 * ===========================================================================
 * @function anagram
 * @description makes anagrams of input 
 * @param {str} str 
 * @param {str} prefix def ''
 */
//this was completed after reviewing the solution. really hard for me to understand, but is essentially breaking up the word and looping through  
//note: done without converting to array with substring method. interesting that a loop is okay within the recursive solution
const anagrams = (str, prefix='') => {
  //base case 
  if(str.length <= 1){
    console.log(`The anagram is ${prefix}${str}`);
  }

  //recursive case 
  else {
    //technically two nested loops here (one with the anagrams), but more complicated per it running the full function again. Base case is just for one string because it pares the string down until you've moved 
    for(let i=0; i<str.length; i++) {
      let currLetter = str.substring(i, i+1);
      //if i is zero the below conveniently prints an empty string
      let prevLetters = str.substring(0, i);
      let afterLetters = str.substring(i+1);
      anagrams(prevLetters+afterLetters, prefix+currLetter)
    }
  }
} 
console.log(anagrams('east'));


/**
 * ===========================================================================
 * @function orgChart
 * @description formats input hierarchy obj as plain text with indents. think bullet points without the bullets 
 * @param {obj} chart 
 * @param {num} i def 1
 */
//this was completed after reviewing the solution. 
//note: unsupervised employees have an empty obj for the base case. base case isn't provided because it has a limit per the loop. forEach loop also takes care of the new lines.
const orgChart = (chart, i=1) => {
  let indent = ' '.repeat(4 * i); 

  Object.keys(chart).forEach(key => {
    console.log(indent + key);
    i++;
    orgChart(chart[key], i);
  });
}
const hierarchy = {
  'Zuckerberg': {
    'Schroepfer': {
      'Bosworth': {
        'Steve': {},
				'Kyle': {},
				'Andra': {}
      },
      'Zhao': {
        'Richie': {},
				'Sofia': {},
				'Jen': {}
      }
    }, 
    'Schrage': {
      'VanDyck': {
        'Sabrina': {},
				'Michelle': {},
				'Josh': {}
      }, 
      'Swain': {
        'Blanch': {},
				'Tom': {},
				'Joe': {}
      }
    },  
    'Sandberg': {
      'Goler': {
        'Eddie': {},
				'Julie': {},
				'Annie': {}
      },
      'Hernandez': {
        'Rowi': {},
				'Inga': {},
				'Morgan': {}
      },
      'Moissinac': {
        'Amy': {},
				'Chuck': {},
				'Vinni': {}
      },
      'Kelley': {
        'Eric': {},
				'Ana': {},
				'Wes': {}
      }
    }
  }
}
console.log(orgChart(hierarchy));

/**
 * ===========================================================================
 * @function binaryRep
 * @param {num} int 
 * @returns binary equivalent of input
 */
const binaryRep = int => {
  if (int === 0) {
    return '';
  }
  
  const quotient = Math.floor(int/2)
  const binDigit = int % 2;
  return binDigit + binaryRep(quotient)
}
console.log(binaryRep(3)) // => 11
console.log(binaryRep(25)) // => 1101