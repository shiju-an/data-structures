class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 1;
    this.countArray = [];
  };

  enqueue(value) {
    if (!this.storage.hasOwnProperty(this.storage[this.count])) {
      this.storage[this.count] = value;
      this.countArray.push(this.count);
    }
    this.count ++;
  };

  dequeue() {
    var deleted = [];

    deleted.push(this.storage[this.countArray[0]]);
    delete this.storage[this.countArray[0]];
    this.countArray.shift();
    return deleted[0];
  };

  size() {
    var sum = 0;
    for (let key in this.storage) {
      if (this.storage.hasOwnProperty(key)) {
        sum ++
      }
    }
    return sum;
  };
}

var NewInstance = new Queue();