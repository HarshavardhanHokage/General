function steamrollArray(arr) {
    // I'm a steamroller, baby
    //console.log(arr);
    //arr = [...arr];
    arr.map((item) => {
        if(Array.isArray(item)) {
            //console.log(item);
            return steamrollArray(item);
        } else {
            newArr.push(item);
        }
    });
    return newArr;
  }
  let newArr = [];
  let temp = steamrollArray([1, {}, [3, [[4]]]]);
  console.log(temp.length);