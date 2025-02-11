// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
      this.elements = [];
  }

  add(element) {
      this.elements.push(element);
  }

  remove() {
      if(this.elements.length > 0) {
          let element = this.elements[0];
          this.elements.splice(0, 1);
          debugger;
          return element;
      } else {
          return Error("queue is empty");
      }
  }

}


module.exports = Queue;
