// Pass number n
// to both expressions, one nested in the other n * n or O(n^2) -- since it is exponential
// it becomes O(n^2) -- Becomes O(n^2 + n) -- drop the non dominant constant n
// doesn't effect the outcome so it stays O(n^2)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    // nest another for loop into the 1st expression
    for (let j = 0; j < n; j++) {
      console.log(i, j); // output to console each iteration for each expression
    }
  }

  // add another for loop onto the squared loop set above
  for (let k = 0; k < n; k++) {
    console.log(k); // output to console each iteration for each expression
  }
}

logItems(10); // run 10 times
