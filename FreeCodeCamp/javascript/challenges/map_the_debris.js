function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    let calculateOrbital = function(avgAlt) {
        return Math.round((2 * Math.PI) * (Math.sqrt((Math.pow((earthRadius + avgAlt), 3))/GM)));
    }

    let result = arr.map((item) => {
        return {
            name: item.name,
            orbitalPeriod: calculateOrbital(item.avgAlt)
        }
    });

    //console.log(result);

    return result;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);