function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }

  // O(a)

  for (let i = 0; i < b; i++) {
    console.log(i);
  }
}

// O(b)

// This example tries to get you to state that the time
// complexity is O(n) but it is NOT

// a,b is O(a + b) since both cannot equal n
// if the 2nd for loop was nested it would be O(a*b)
