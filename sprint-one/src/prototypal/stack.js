var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.count = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count ++;

  if (!this.storage.hasOwnProperty(this.count)) {
    this.storage[this.count] = value;
  }
};

stackMethods.pop = function() {
  var deleted = [];

  deleted.push(this.storage[this.count]);
  delete this.storage[this.count];
  this.count --
  return deleted[0];
};

stackMethods.size = function() {
  var sum = 0;

  for (var key in this.storage) {
    if (this.storage.hasOwnProperty(key)) {
      sum ++
    }
  }
  return sum;
}
