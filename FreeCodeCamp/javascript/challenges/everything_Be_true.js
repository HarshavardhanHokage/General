function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every((item) => {
        return item.hasOwnProperty(pre) && Boolean(item[pre])
    })
  }

  function truthCheckAdv(collection, pre) {
      return collection.every(obj => obj[pre]);
  }
  
  console.log(truthCheckAdv([{"single": "double"}, {"single": NaN}], "single"));