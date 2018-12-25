function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let inter = str.replace(/([a-z])([A-Z])/g, `$1 $2`);
  return inter.toLowerCase().replace(/\s+|_+/g, "-");
}

console.log(spinalCase('thisIs spinalTap'));