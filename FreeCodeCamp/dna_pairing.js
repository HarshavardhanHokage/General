function pairElement(str) {

    let strArr = str.split("");
    strArr = strArr.map((item) => {
        switch(item) {
            case "G":
                return ["G","C"];
            case "C":
                return ["C","G"];
            case "A":
                return ["A","T"];
            case "T":
                return ["T","A"];
        }
    });
    console.log(strArr);
    return strArr;
}

function pairElementIntermediate(str) {

    let dnaPairs = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    };
    let strArr = str.split("");
    strArr = strArr.map(item => [item, dnaPairs[item]])
    console.log(strArr);
    
    return strArr;
  }
  
pairElementIntermediate("GCG");