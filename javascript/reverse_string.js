function reverseString(str) {
  let reverseWord = ""
  for (let i=str.length-1; i>=0; i--) { 
    reverseWord += str[i]
  }
  return reverseWord
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

//Create a new string variable to hold the new string
//Iterate through each letter in the string 
//Grab the last letter and move to the front 
//Grab the second to last letter and move to the second to front letter etc. 
//Return the 

// And a written explanation of your solution

//Created a new variable that holds an empty string 
//Create for loop, with i beginning at the last position for the string that is passed in 
//i has to be greater than or equal to 0, which is the last index 
//i decrements on every loop 
//The variable holding the empty string will add the letter at "i" on every loop 
//Return the word