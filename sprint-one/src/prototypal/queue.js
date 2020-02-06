var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.count = 1;
  newQueue.countArray = [];

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  if (!this.storage.hasOwnProperty(this.count)) {
    this.storage[this.count] = value;
    this.countArray.push(this.count);
  }
  this.count ++
};

queueMethods.dequeue = function() {
  var deleted = [];

  deleted.push(this.storage[this.countArray[0]]);
  delete this.storage[this.countArray[0]]
  this.countArray.shift();
  return deleted[0]
};

queueMethods.size = function() {
  var sum = 0;

  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      sum ++
    }
  }
  return sum;
}


