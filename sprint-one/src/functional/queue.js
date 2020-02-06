var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 1;
  var countArray = [];
  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (!storage.hasOwnProperty(count)) {
      storage[count] = value;
      countArray.push(count);
      }
      count ++;
  };

  someInstance.dequeue = function() {
    var deleted = [];

    deleted.push(storage[countArray[0]]);
    delete storage[countArray[0]];
    countArray.shift();
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