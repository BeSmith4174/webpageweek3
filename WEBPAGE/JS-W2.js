//same function but made more efficent with loops
function countDownV2() {
    var count = 10;
//this sets how my count will be between 1 and 10
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            //this identifies 10 as my starting point
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
//numbercount represented in miliseconds
        }, 1000 * i);
    }
    setTimeout(function () {
        //this identifies Blastoff as my stopping point
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";
        count--;
//numbercount represented in miliseconds
    }, 11000 * i);


}






//create countdown fucntion from 10 to blast off
function countDown() {
    var count = 10;

    // start count at 10
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);


    //counts to 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);



    //counts to 8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    // counts to 7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    // counts to 6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);

    // counts to 5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);

    // counts to 4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);

    // counts to 3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);

    // counts to 2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);

    // counts to one
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 10000);

    //blastoff 
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "BLASTOFF!!!";
        count = count - 1;

    }, 11000);
}

function playCraps(){
//create die1 variable
var die1;
//create die2 variable
var die2;
//create the varience of the sum of 2 variables
var sum;
// rounds random generated number for die1 to the nearest whole number
die1 = Math.ceil(Math.random() * 6);
// rounds random generated number for die2 to the nearest whole number
die2 = Math.ceil(Math.random() * 6);
// shows that die1 and die2 will be used to determine the sum 
sum = die1 + die2;
// this line takes the number rolled for dice1 and displays it  
document.getElementById("die1Res").innerHTML = die1;
// this line takes the number rolled for dice2 and displays it 
document.getElementById("die2Res").innerHTML = die2;
// determines the sum of both die and displays it
document.getElementById("sumRes").innerHTML = sum;

// this line sets the parameters for what numbers cause a loss
if (sum == 7 || sum == 11) {
    document.getElementById("crapsResults").innerHTML = "Craps! You Loose!";
}
// this line sets parameters on what numbers win
else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("crapsResults").innerHTML = "Doubles, you win!!";
    // this line tells the user to reroll 
} else {
    document.getElementById("crapsResults").innerHTML = "Push. Please roll again.";
}




}