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
}

let myLinkedlist = new LinkedList(7);
myLinkedlist.push(4);
console.log(myLinkedlist);

/* 

our conmsole logs:

/mnt/c/node-stuff/LinkedLists$ node LinkedList.js

LinkedList {
    head: Node { value: 4, next: null },
    tail: Node { value: 4, next: null },
    length: 1
  }

*/
