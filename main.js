var userWins = 0
var computerWins = 0
var choices = ["scissor", "rock", "paper"]


$(document).ready(function(){
    for(var i = 0; i < choices.length; i++){
        var button = $("<button>").addClass('button').text(choices[i])
        $('.game-box').append(button)
    }
    $('.button').on('click',function(){
            var userChoice = $(this).text().trim().toLowerCase()
            console.log('hello',userChoice)
            playGame(userChoice)
    })
})

function playGame(userChoice) {
    var computerChoice = choices[Math.floor(Math.random() * 3)]
  var result
  if (userChoice === computerChoice) {
    result = "It's a tie!"
  } else if (
    (userChoice === "scissor" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You win!"
    userWins++
  } else {
    result = "Computer wins!"
    computerWins++
  }

  document.getElementById("user-choice").innerHTML = "Your choice: " + userChoice
  document.getElementById("computer-choice").innerHTML = "Computer choice: " + computerChoice
  document.getElementById("result").innerHTML = "Result: " + result
  document.getElementById("user-wins").innerHTML = "Your wins: " + userWins
  document.getElementById("computer-wins").innerHTML = "Computer wins: " + computerWins

  if (userWins === 3) {
    document.getElementById("game-over").innerHTML = "Congratulations! You are the first winner!"
    disableButtons()
  } else if (computerWins === 3) {
    document.getElementById("game-over").innerHTML = "Oops! Computer is the first winner!"
    disableButtons()
  }
}

function disableButtons() {
  var buttons = document.getElementsByClassName("button")
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true
  }
}