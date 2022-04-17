"use strict";
let userName = prompt("Please enter your name");
console.log(userName);
let userGender = prompt("Please enter your gender");
console.log(userGender);
let userAge = prompt("Please enter your age");
console.log(userAge);
console.log(typeof userAge); 
while (Number (userAge) <= 0){
    alert("Unacceptable age ... please inter a valid one");
     userAge = prompt("Please enter your age");
    console.log(userAge);
} 
let userAnswer = confirm("Wolud you skip the welcoming message ?");
if (userGender.toLocaleLowerCase() == "female") {
    alert(`Welcom Ms ${userName} it's a pleasure to visit our website `);
}
else if (userGender.toLocaleLowerCase () == "male"){ 
    alert(`Welcom Mr ${userName} it's a pleasure to visit our website `);
}
else {
    alert(`Welcom  ${userName} it's a pleasure to visit our website `);
}

