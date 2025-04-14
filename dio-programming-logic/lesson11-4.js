let result = sum(5, 10);

console.log("The result is: " + result);
// The function sum is defined to take two parameters, numA and numB, and return their sum.

function sum(numA, numB) {
  let sumatory = numA + numB;
  return sumatory;
}

let userName = getFirstName("Diego-Velasques-Rodrigo",  "-");
console.log("The first name is: " + userName);
userName = getFirstName("Rodrigo Velasques Diego",  " ");
console.log("The first name is: " + userName);

// The function getFirstName is defined to take a name as a parameter, split it by spaces, and return the first part (the first name).
function getFirstName(name, splitChar) {
  let firstName = name.split(splitChar)[0];
  return firstName;
}
// The function is called with the arguments 5 and 10, and the result is stored in the variable result. Finally, the result is printed to the console using string concatenation.
