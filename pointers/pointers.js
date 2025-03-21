// examples of using a pointer

let obj1 = {
  value: 11,
};

let obj2 = obj1;

console.log(obj1, obj2);

// the console logs { value: 11 } { value: 11 }
// even if the obj1 value is changhed the obj value will change w/ and match it.

let obj3 = {
  value: 67,
};

obj2 = obj3;
obj1 = obj2;

console.log(obj1, obj2, obj3);

// console logs:
// { value: 11 } { value: 11 }
// { value: 67 } { value: 67 } { value: 67 }
