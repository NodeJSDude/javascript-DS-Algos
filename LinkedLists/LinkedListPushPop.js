/* 

class LinkedList {
    constructor(value) { // creates new node}
    push(value) {creates new node and adds tro the end}
    unshift(value) {creates new node adds to beginning}
    insert(index, value) {creates new node, inserts at specified index}
}

all the above methods create new nodes

the methods in the LinkedList class will call the Node classs to create nodes

so we create a separate class named Node

Step 1:

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const newNode = new Node(4);

Step 2:

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode               // creates a new head node
        this.tail = this.head             // make the tail point to the head value
        this.length = 1                   // keep track of length
    }
}

let myLknkedlist = new LinkedList(4)      // create a new LinkedList with head and tail pointing to
                                          // the new node value 4

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // O(1) operation adds a node

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // O(n) operation removes a node from the end

  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

// let's test the pop method

function test() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);

  // (2) Items in LL - Returns 2 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log("null");
  }

  // (1) Item in LL - Returns 1 Node
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log("null");
  }

  // (0) Items in LL - Returns null
  if (myLinkedList.length !== 0) {
    console.log(myLinkedList.pop().value);
  } else {
    console.log("null");
  }
}

test();
