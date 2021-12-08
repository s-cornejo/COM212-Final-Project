class Queue {
    constructor() {
      this.data = [];
      this.f = 0;
      this.size = 0;
    }
    
    qSize() {
      return this.size;
    }
    
    isEmpty() {
      return this.size == 0;
    }
    
    enqueue(e) {
      if (this.size == 60) {
        console.log("Error: queue is full.");
        return;
      }
      var pos = (this.f + this.size) % 60;
      this.data[pos] = e;
      this.size++;
    }
    
    dequeue() {
      if (this.size == 0) {
        console.log("Error: queue is empty.");
        return;
      }
      var val = this.data[this.f];
      this.data[this.f] = null;
      this.f = (this.f + 1) % 60;
      this.size--;
      return val;
    }
    
    first() {
      if (this.size == 0) {
        console.log("Error: queue is empty.");
        return null;
      }
      return this.data[this.f];
    }
    
    allElements() {
      return this.data;
    }
    
    toString() {
      if (this.size == 0) {
        return "The list is empty";
      }
      let outstr = "Elements in the stack:\n";
      var index;
      for (let i = 0; i < this.f + this.size; i++) {
        index = i % 60;
        outstr = outstr + i + this.data[index].toString() + "\n";
      }
      return outstr;
    }
  }
  
  
  