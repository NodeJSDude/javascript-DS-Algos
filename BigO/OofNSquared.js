// Pass number n
// to both expressions, one nested in the other n * n or O(n^2) -- since it is exponential
// it becomes O(n^2) -- NOT EFFICIENT!

function logItems(n) {
  for (let i = 0; i < n; i++) {
    // nest another for loop into the 1st expression
    for (let j = 0; j < n; j++) {
      console.log(i, j); // output to console each iteration for each expression
    }
  }
}

logItems(10); // run 10 times
