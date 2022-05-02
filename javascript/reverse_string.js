function reverseString(str) {
  // need a variable to return the revered string
  let reversed = ""
  // can't use .reverse
  // take the last letter save it to the reversed variable
  // then continue to iterate in that fashion
  // use index and remember to subtract one from the length since arrays index start at 0
  for (let i = str.length -1; i > -1; --i){
    reversed = reversed + str[i]
  }
  
  return reversed

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
