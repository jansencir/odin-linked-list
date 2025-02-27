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

  
}