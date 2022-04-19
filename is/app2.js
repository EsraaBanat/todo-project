'use strict';
let userAnswers = [];

function quesOne() {
    let questionOne = prompt("Are you doing well ?");
    if (questionOne == "") {
        questionOne = "invalid";
}
    userAnswers.push(questionOne);
}

 quesOne()

function quesTwo() {
    let questionTwo = prompt("Have you ever learn Java Script?");
    if (questionTwo == "") {
        questionTwo = "invalid";
}
    userAnswers.push(questionTwo);
}

quesTwo()

function quesThree() {
    let questionThree = prompt("Would you like to join us ?");
    if (questionThree == "") {
        questionThree = "invalid";
}
    userAnswers.push (questionThree);
}

quesThree()


console.log(userAnswers);
for (let i = 0; i < userAnswers.length; i++){
    console.log(userAnswers[i]);
}


 