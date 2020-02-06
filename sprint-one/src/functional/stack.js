var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count ++;

    if (!storage.hasOwnProperty(count)) {
      storage[count] = value;
    }
  };

  someInstance.pop = function() {
    var deleted = [];

    deleted.push(storage[count]);
    delete storage[count];
    count --;
    return deleted[0];
  };

  someInstance.size = function() {
    var sum = 0;

    for (var key in storage) {
      if (storage.hasOwnProperty(key)) {
        sum ++
      }
    }
    return sum;
  };

  return someInstance;
};
