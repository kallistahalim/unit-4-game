
        $(document).ready(function () {
            var userNumber;
            var computerNumber = Math.floor(Math.random() * 101 + 19);
            var num1 = Math.floor(Math.random() * 11 + 1);
            console.log(num1)
            var num2 = Math.floor(Math.random() * 11 + 1);
            var num3 = Math.floor(Math.random() * 11 + 1);
            var num4 = Math.floor(Math.random() * 11 + 1);

            function startNewGame() {
                userNumber = 0;
                computerNumber = Math.floor(Math.random() * 101 + 19);
                console.log(computerNumber);

                num1 = Math.floor(Math.random() * 11 + 1);
                num2 = Math.floor(Math.random() * 11 + 1);
                num3 = Math.floor(Math.random() * 11 + 1);
                num4 = Math.floor(Math.random() * 11 + 1);
                console.log(num1, num2, num3, num4);
                $('#computer-number').text(computerNumber);
                $('#user-number').text(userNumber);
            }

            startNewGame();

            $('#num1').on('click', function () {
                console.log(userNumber)
                userNumber = userNumber + num1;
                console.log(userNumber)
                $('#user-number').text(userNumber);
                if (userNumber === computerNumber) {
                    alert ("you win");
                    startNewGame();

                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    startNewGame();
                }
            })
            $('#num2').on('click', function () {
                userNumber = userNumber + num2;
                $('#user-number').text(userNumber);
                if (userNumber === computerNumber) {
                    alert ("you win");
                    startNewGame();
                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    startNewGame();
                }
            })
            $('#num3').on('click', function () {
                userNumber = userNumber + num3;
                $('#user-number').text(userNumber);
                if (userNumber === computerNumber) {
                    alert  ("you win");
                    startNewGame();
                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    startNewGame();
                }
            })
            $('#num4').on('click', function () {
                userNumber = userNumber + num4;
                $('#user-number').text(userNumber);
                if (userNumber === computerNumber) {
                    alert ("you win");
                    startNewGame();
                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    startNewGame();
                }
            })

        })
