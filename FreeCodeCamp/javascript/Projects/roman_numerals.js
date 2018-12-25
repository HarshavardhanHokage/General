function convertToRoman(num) {

    let m = ["", "M", "MM", "MMM"];
    let c = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let x = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let i = ["", "I", "II", "III", "IV", "V",  "VI", "VII", "VIII", "IX"];

    // console.log(m[num/1000]);
    // console.log(c[(num%1000)/100]);
    // console.log(x[(num%100)/10]);
    // console.log(i[num%10]);
    console.log(((num%100)/10));
    return m[Math.floor(num/1000)] + c[Math.floor((num%1000)/100)] + x[Math.floor((num%100)/10)] + i[num%10];
   }
   

   console.log(convertToRoman(36));