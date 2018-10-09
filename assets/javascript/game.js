var userNumber;
var userInput;
var computerNumber = Math.floor(Math.random() * 101 + 19);
var num1;
var num2;
var num3;
var num4;


function startNewGame() {
    userNumber = 0;
    computerNumber = Math.floor(Math.random() * 101 + 19);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
}

startNewGame();




    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);


    $('#num1').on('click', function () {
        userNumber = userNumber + num1;
        if (userNumber = computerNumber) {
            alert = "you win"
        } else if (userNumber > computerNumber) {
            alert = "you lose"
        }
    })

    $('#num2').on('click', function () {
        userNumber = userNumber + num2;
        if (userNumber = computerNumber) {
            alert = "you win"
        } else if (userNumber > computerNumber) {
            alert = "you lose"
        }
    })

    $('#num3').on('click', function () {
        userNumber = userNumber + num3;
        if (userNumber = computerNumber) {
            alert = "you win"
        } else if (userNumber > computerNumber) {
            alert = "you lose"
        }
    })

    $('#num4').on('click', function () {
        userNumber = userNumber + num4;
        if (userNumber = computerNumber) {
            alert = "you win"
        } else if (userNumber > computerNumber) {
            alert = "you lose"
        }
    })

    startNewGame();



