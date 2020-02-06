class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.count++;

    if (!this.storage.hasOwnProperty(this.storage[this.count])) {
      this.storage[this.count] = value;
    }
  };

  pop() {
    var deleted = [];

    deleted.push(this.storage[this.count]);
    delete this.storage[this.count];
    this.count --;
    return deleted[0];
  };

  size() {
    var sum = 0;
    for (var key in this.storage) {
      if (this.storage.hasOwnProperty(key))
        sum++
    }
    return sum;
  };

}

var NewStack = new Stack();