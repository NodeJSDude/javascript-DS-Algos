// Pass number n
// to both expressions n + n or O(2n) -- since it is constant we can drop
// the constant -- it remains O(n)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    // increment until it reaches n times
    console.log(i); // output to console each iteration
  }

  for (let j = 0; j < n; j++) {
    // increment until it reaches n times
    console.log(j); // output to console each iteration
  }
}

logItems(3); // run 3 times
