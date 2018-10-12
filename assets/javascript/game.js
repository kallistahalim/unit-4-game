
       
       
       $(document).ready(function () {
            var userNumber;
            var computerNumber = Math.floor(Math.random() * 101 + 19);
            var num1 = Math.floor(Math.random() * 11 + 1);
            var num2 = Math.floor(Math.random() * 11 + 1);
            var num3 = Math.floor(Math.random() * 11 + 1);
            var num4 = Math.floor(Math.random() * 11 + 1);
            var wins = 0;
            var losses = 0;
            
            
            function startNewGame() {
                userNumber = 0;
                computerNumber = Math.floor(Math.random() * 101 + 19);
                num1 = Math.floor(Math.random() * 11 + 1);
                num2 = Math.floor(Math.random() * 11 + 1);
                num3 = Math.floor(Math.random() * 11 + 1);
                num4 = Math.floor(Math.random() * 11 + 1);
                $('#computer-number').text(computerNumber);
                $('#user-number').text(userNumber);
            }

            startNewGame();

            var audioElement1 = document.createElement("audio");
            var audioElement2 = document.createElement("audio");
            var audioElement3 = document.createElement("audio");
            var audioElement4 = document.createElement("audio");
            var audioElement5 = document.createElement("audio");
            var audioElement6 = document.createElement("audio");
                audioElement1.setAttribute("src", "assets/sounds/beer.mp3");
                audioElement2.setAttribute("src", "assets/sounds/pop.mp3");
                audioElement3.setAttribute("src", "assets/sounds/slurp.mp3");
                audioElement4.setAttribute("src", "assets/sounds/cubes.mp3");
                audioElement5.setAttribute("src", "assets/sounds/win.mp3");
                audioElement6.setAttribute("src", "assets/sounds/lose.mp3");
            $('#num1').on('click', function () {
                userNumber = userNumber + num1;
                audioElement1.play();
                $('#user-number').text(userNumber);
                  if (userNumber === computerNumber) {
                    alert ("you win");
                    wins++;
                    $("#wins").text(wins);
                    audioElement5.play();
                    startNewGame();

                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    losses++;
                    $("#losses").text(losses);
                    audioElement6.play();
                    startNewGame();
                }
            })
            $('#num2').on('click', function () {
                userNumber = userNumber + num2;
                $('#user-number').text(userNumber);
                audioElement2.play();
                if (userNumber === computerNumber) {
                    alert ("you win");
                    wins++;
                    $("#wins").text(wins);
                    audioElement5.play();
                    startNewGame();
                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    losses++;
                    $("#losses").text(losses);
                    audioElement6.play();
                    startNewGame();
                }
            })
            $('#num3').on('click', function () {
                userNumber = userNumber + num3;
                $('#user-number').text(userNumber);
                audioElement3.play();
                if (userNumber === computerNumber) {
                    alert ("you win");
                    wins++;
                    $("#wins").text(wins);
                    audioElement5.play();
                    startNewGame();
                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    losses++;
                    $("#losses").text(losses);
                    audioElement6.play();
                    startNewGame();
                }
            })
            $('#num4').on('click', function () {
                userNumber = userNumber + num4;
                $('#user-number').text(userNumber);
                audioElement4.play();
                if (userNumber === computerNumber) {
                    alert ("you win");
                    wins++;
                    $("#wins").text(wins);
                    audioElement5.play();
                    startNewGame();
                } else if (userNumber > computerNumber) {
                    alert ("you lose");
                    losses++;
                    $("#losses").text(losses);
                    audioElement6.play();
                    startNewGame();
                }
            })
        })
