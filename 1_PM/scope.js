/**
 * Part 1:
 *    What will print and why?
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

function x() {
  var a;
  console.log(a);
}

function y() {
  var a = 2;
  console.log(a); // will print 2
  x();
}

var a = 1;
console.log(a); // will print 1
y();  // will not print 2, a's assignment is not in scope

// print statement: 
// 1 
// 2
// undefined

