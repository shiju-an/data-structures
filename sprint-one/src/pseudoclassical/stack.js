var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.count ++;

  if (!this.storage.hasOwnProperty(this.count)) {
    this.storage[this.count] = value;
  }
};

Stack.prototype.pop = function() {
  var deleted = [];

  deleted.push(this.storage[this.count]);
  delete this.storage[this.count];
  this.count --;
  return deleted[0];
};

Stack.prototype.size = function() {
  var sum = 0;
  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      sum ++
    }
  }
  return sum;
};

var NewStack = new Stack();
