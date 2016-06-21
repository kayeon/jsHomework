// Loops

// The loop function returns a list of all the numbers from 0 to 9.

// 1. Change the loop() function to return the list in reverse order.

function loop () {
  var result = []
  for (var i = 0; i < 10; i++) {
    result.push(i)
  }
  return result
}

// 2. Change the loop_while() function to use "while" instead of "for".

function loop_while () {
  var result = []
  for (var i = 0; i < 10; i++) {
    result.push(i)
  }
  return result
}

// 3. Change the loop_recursion() function to use recursion.

function loop_recursion () {
  var result = []
  for (var i = 0; i < 10; i++) {
    result.push(i)
  }
  return result
}

// ================== Test code =======================

function test (loopfunc) {
  var answer = loopfunc()
  var expected = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  if (answer === expected) {
    console.log('Success!')
  } else {
    console.log(loopfunc.name + ': Expected ' + expected + ', got ' + answer)
  }
}

test(loop)
test(loop_while)
test(loop_recursion)
