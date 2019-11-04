'use strict';

//Counts how many sheep jump over the fence
const countingSheep = num => {
  //base case
  if (!num) {
    return console.log('All sheep jumped over the fence');
  }

  //recursion case - nothing returned here because we only need to print a countdown for each sheep that jumps over
  console.log(`${num}: Another sheep jumps over the fence`);
  const newNum = num-1
  countingSheep(newNum);
}
countingSheep(5);

//Returns the value of input base (integer) raised to the power of the input exponent (integer)
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

  // if exp > 1, subtract one from exp and multiply base by a new recursion
  exp = exp - 1;
  
  return base * powerCalculator(base, exp);
}
powerCalculator(2,3)

//returns the reverse of the input 
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

const nthTriNum = (n, i=0) => {
  //base call
  if (i === n) {
    return 0;
  }

  //recursion call 
  i++;
  return i + nthTriNum(n, i);
}
console.log(nthTriNum(4))

//make a function that splits based on a specified separator
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

//returns fibonacci seq of param num
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

//returns factorial of a given number
const factorial = (num, i=1) => {
  //base case
  if (num + 1 === i) {
    return 1;
  }

  //recursion case 
  return i * factorial(num, ++i)
}
console.log(factorial(5))

