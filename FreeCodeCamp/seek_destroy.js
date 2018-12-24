function destroyer(arr) {
    // Remove all the values
    var destroyers = Array.prototype.slice.call(arguments, 1);
    return arr.filter((item) => {
        return !destroyers.includes(item);
    });
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));