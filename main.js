var userWins = 0;
var computerWins = 0;
var choices = ["scissor", "rock", "paper"];

$(document).ready(function(){
    $('.choice-image').on('click', function(){
        var userChoice = $(this).attr('alt').trim().toLowerCase();
        console.log('hello', userChoice);
        playGame(userChoice);
    });
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

    $("#user-choice").text("Your choice: " + userChoice);
    $("#computer-choice").text("Computer choice: " + computerChoice);
    $("#result").text("Result: " + result);
    $("#user-wins").text("Your wins: " + userWins);
    $("#computer-wins").text("Computer wins: " + computerWins);

    if (userWins === 3) {
        $("#game-over").text("Congratulations! You are the first winner!");
        disableButtons();
    } else if (computerWins === 3) {
        $("#game-over").text("Oops! Computer is the first winner!");
        disableButtons();
    }
}

function disableButtons() {
    $(".choice-image").off('click');
}