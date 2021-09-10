console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name ) {
  return 'Hello, ' + name + '!';

}

console.log(helloName('Xibz'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber; //create variable to add numbers
  return answer;//return results
  // return firstNumber + secondNumber;
}

console.log('The sum of the two numbers from addNumbers is: ',addNumbers(23 , 15));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let prod = num1 * num2 * num3;//create variable to mulitply arguments
  return prod;//return the product
}

console.log('The product of these three numbers from multiplyThree function is: ', multiplyThree(20, 7, 3));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log('First test is positive, so true');
console.log( 'isPositive - should say false', isPositive(0) );
console.log('Second test is 0, so false');
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('Third test is negative, so false');


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
 if (array.length-1 === 0){ //checking to see if array is empty
   return undefined;//returns undefined if the case
 }
 return array[array.length-1];//return the last item in array
}

let groceryList = ['bananas', 'apples', 'kiwis'];//created an array for example purposes
console.log(getLast(groceryList));//run function and return kiwi

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for(let i = 0; i < array.length; i++){
    if(array[i] == value) return true;
  }
  return false;
}

let drinks = ['juice', 'soda', 'water', 'beer'];
console.log(find('water', drinks));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
