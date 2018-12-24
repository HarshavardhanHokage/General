function diffArray(arr1, arr2) {
   var newArr = [];
   // Same, same; but different.

   arr1.forEach(element => {
      if(arr2.indexOf(element) < 0) {
         newArr.push(element);
      }
   });
   arr2.forEach(element => {
      if(arr1.indexOf(element) < 0) {
         newArr.push(element);
      }
   });
   console.log(newArr);
 }
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);