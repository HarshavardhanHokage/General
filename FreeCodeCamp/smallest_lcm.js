// Euclid Algorithm for the Greatest Common Divisor
function gcd(a, b) {
    return !b
        ? a
        : gcd(b, a % b);
}
// Euclid Algorithm for the Least Common Multiple
function lcm(a, b) {
    return a * (b / gcd(a, b));
}
// LCM of all numbers in the range of arr = [a, b];
function smallestCommons(arr) {
    var i,
        result;
    // large to small - small to large
    if (arr[0] > arr[1]) {
        // only happens once. Means that the order of the arr reversed.
        arr.reverse();
    }
    for (i = result = arr[0]; i <= arr[1]; i++) { // all numbers up to arr[1] are arr[0].
        result = lcm(i, result); // lcm() makes arr int an integer because of the arithmetic operator.
    }
    return result;
}

smallestCommons([1,5]);