function uniteUnique(arr) {
    var newArr = [];
    for(let i = 0; i < arguments.length; i++) {
        var temp = arguments[i].filter((item) => {
            return !newArr.includes(item);
        });
        newArr.push(...temp);
    }
    console.log(newArr);
    return arr;
  }
  
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);