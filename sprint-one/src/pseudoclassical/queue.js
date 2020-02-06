var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 1;
  this.countArray = [];
};

Queue.prototype.enqueue = function(value) {
  if (!this.storage.hasOwnProperty(this.count)) {
    this.storage[this.count] = value;
    this.countArray.push(this.count);
  }
  this.count ++;
};

Queue.prototype.dequeue = function() {
  var deleted = [];

  deleted.push(this.storage[this.countArray[0]]);
  delete this.storage[this.countArray[0]];
  this.countArray.shift();
  return deleted[0];
};

Queue.prototype.size = function() {
  var sum = 0;
  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      sum ++
    }
  }
  return sum;
};

var NewQueue = new Queue();
