// Create a Node class that holds a value property and a nextNode property
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
};

// Create a Linked List class that will represent the full list
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add a new node, containing a value, to the end of the list
  append(value) {
    // Create a new node with class Node, and pass in the value
    let node = new Node(value);
    // Create a variable to hold the current node in the linked list
    let current;

    // If the linked list is empty, make the head the node
    if (!this.head) {
      this.head = node;
    } else {
      // If it's not empty, traverse the list until you hit the end
      // Set current to the head of the liked list
      current = this.head;

      // While the current node has a next node, change current to it's next node
      while(current.nextNode) {
        current = current.nextNode;
      }

      // Once you've hit the end of the linked list, set the next node to node
      current.nextNode = node;
    }
    this.size++;
  }

  // Add a new node, containing a value, to the start of the list
  prepend(value) {
    // Set the head to the new value, and make the next node the current node
    this.head = new Node(value, this.head);
    this.size++;
  }

  // Return the total number of nodes in the list
  sizeOf() {
    console.log(this.size);
  }

  // Return the first node in the list
  headOf() {
    console.log(this.head);
  }

  // Return the last node in the list
  tailOf() {
    // Set current to the head
    let current = this.head;

    // If it's empty, log it's value (null)
    if (!current) {
      console.log(current.nextNode);
    }
    
    // While current has a next node, traverse the linked list by setting current to the next node
    while (current.nextNode) {
      current = current.nextNode
    }
    console.log(current);
  }

  // Return the node at a given index
  atIndex(index) {
    // Set a variable, current, to the head of the linked list
    let current = this.head;
    // Set a variable, count, to 0
    let count = 0;

    // Traverse the linked list until count matches value
    while (current) {
      if (count == index) {
        console.log(current.value);
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  // Remove the last element from the list
  pop() {
    // If empty, return
    if (this.size === 0) {
      return;
    }

    let current = this.head;
    // When we get to the end, current will be null, meaning we need a variable to hold what was before it
    let previous;

    while (current) {
      if (current.nextNode !== null) {
        previous = current;
        current = current.nextNode;
      } else if (current.nextNode === null) {
        previous.nextNode = null;
        this.size--;
        return;
      }
    }
  }


  // Return true if the given value is in the list, or false if otherwise
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value == value) {
        console.log("True");
      } else if (current.nextNode == null) {
        console.log("False");
      }
      current = current.nextNode;
    }
  }
}