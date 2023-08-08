// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase =["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
let upperCase =["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
let specialCar = ["!","@","#","$","%","^","&","*",];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let options =  [lowerCase, upperCase, specialCar, numbers];
let password = "";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ask user forparameters and generates password
function generatePassword() {
  
 
 //alert("here is my alert")

 let length = prompt("how many characters?")
console.log(length);
if(length < 8){
  alert("password must be between 8-128")
  return null
} 
if(length >128){
  alert("password must be less than 128")
  return null
} 

let includeLowercase = confirm("do you want lower case letters?")


let includeUppercase = confirm("do you want uppercase letters")


let includespecialCar=confirm("do you want special characters?")


let includenumbers=confirm("do you want numbers")

if(
  includeLowercase===false &&
  includeUppercase===false &&
  includespecialCar===false &&
  includenumbers=== false

){
  alert("must choose one type");
  return null;
}
let finalPassword=[]
let selections=[]
if(includeLowercase){
  selections=selections.concat (lowerCase)
}
if(includeUppercase){
  selections=selections.concat(upperCase)
}
if(includenumbers){ 
  selections=selections.concat(numbers)
}
if(includespecialCar){
  selections=selections.concat(specialCar)
}
console.log (selections)
for (let i=0; i<length; i++){
  let index= Math.floor(Math.random() *selections.length)
  let temp=selections[index]
 finalPassword.push(temp)
}
console.log(finalPassword)
return finalPassword.join("")
};




// let passwordSelection={
//   length:length,
//   includeLowercase:includeLowercase,
//   includeUppercase:includeUppercase,
//   includenumbers:includenumbers,
//   includespecialCar:includespecialCar,

// return passwordSelection


