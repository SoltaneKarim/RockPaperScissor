var userWins = 0;
var computerWins = 0;
var choices = ["scissor", "rock", "paper"];

$(document).ready(function(){
    $('.choices-image').on('click', function(){
        var userChoice = $(this).attr('alt').trim().toLowerCase();
        playGame(userChoice);
    });
});

$(document).keydown(function(event) {
    if (event.keyCode === 32) {
        var audioElement = document.getElementById("audio");
        audioElement.play();
    }
});

function playGame(userChoice) {
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    var result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
        userWins++;
    } else {
        result = "Computer wins!";
        computerWins++;
    }

    $("#user-choice span").text("Your choice: " + userChoice);
    $("#computer-choice span").text("Computer choice: " + computerChoice);
    $("#result h1").text("Result: " + result);
    $("#user-wins span").text(userWins);
    $("#computer-wins span").text(computerWins);

    if (userWins === 3) {
        $("#game-over h1").text("Congratulations! You are the first winner!").css("color", "green").toggle();
        disableButtons();
    } else if (computerWins === 3) {
        $("#game-over h1").text("Oops! Computer is the first winner!").css("color", "red");
        disableButtons();
    }
}

$('#reset button').on('click', function(){
    restartGame()
});

function enableButtons() {
    $(".choices-image").on('click', function() {
        var userChoice = $(this).attr('alt').trim().toLowerCase();
        playGame(userChoice);
    });
}
function disableButtons() {
    $(".choices-image").off('click');
}
function restartGame() {
    userWins = 0
    computerWins = 0
    $("#user-wins span").text(0);
    $("#computer-wins span").text(0);
    $("#user-choice span").text("");
    $("#computer-choice span").text("");
    $("#result h1").text("");
    $("#game-over h1").text("");
    enableButtons()
}