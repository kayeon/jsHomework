// Loops

// The loop function returns a list of all the numbers from 0 to 9.

// 1. Change the loop() function to return the list in reverse order.

function loop () {
  var result = []
  for (var i = 9; i >= 0; i--) {
    result.push(i)
  }
  return result
}

// 2. Change the loop_while() function to use "while" instead of "for".

function loop_while () {
  var result = [];
  var i = 10;
  while (i >= 1) {
    i--;
    result.push(i)
  }
  return result
}

// 3. Change the loop_recursion() function to use recursion.

console.log(loop_recursion_2(100))

/**
* loop_recursion_1 function which takes no params
*
*/
function loop_recursion_1 () {
  loop_recursion_helper([], 10)
}

/**
* loop_recursion_2 function which takes i as a param
* @param {number} i - number from the user when calling the function  
*/
function loop_recursion_2 (i) {
  loop_recursion_helper([], i)
}

function loop_recursion_helper(result, i) {
  // conditional (base case)
  if (i == 0) {
    return result;
  } else {
    // result.push
    result.push(i);
    return loop_recursion_helper(result, i--)
  }
}

// using the length of the array to calculate i,
// so you don't need to pass it in
function loop_recursion_helper2(result) {
  // result = [] which has a .length of 0
  // result = [9]
  var i = 10 - result.length; // i item in array [9] so 10 - 1 = 9
  // conditional (base case)
  if (i == 0) {
    return result; // return the full array at this point [9...0]
  } else {
    result.push(i--); // result which is an [] ... push to this i which is equal to 10 - result.length 0 = 10 -- so you get 9
    return loop_recursion_helper2(result)
  }
}

// ================== Test code =======================

function test (loopfunc) {
  var answer = loopfunc()
  var expected = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  if (answer == expected) {
    console.log('Success!')
  } else {
    console.log(loopfunc.name + ': Expected ' + expected + ', got ' + answer)
  }
}

test(loop)
test(loop_while)
test(loop_recursion)
