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
}