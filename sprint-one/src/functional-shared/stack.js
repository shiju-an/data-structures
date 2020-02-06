var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};

  newStack.storage = {};
  newStack.count = 0;

  extend(newStack, stackMethods);

  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.count ++;

  if (!this.storage.hasOwnProperty(this.count)) {
    this.storage[this.count] = value;
  }
};

stackMethods.pop = function() {
  var deleted = [];

  deleted.push(this.storage[this.count]);
  delete this.storage[this.count];
  this.count --;
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
};


