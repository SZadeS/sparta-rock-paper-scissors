var winsByComputer = 0;
var winsByPlayer = 0;
var computerWeapon = (Math.random());

while (winsByComputer < 3 && winsByPlayer < 3 ) {
  if (computerWeapon < 0.33) {
  computerWeaponByName = "rock";
} else if(computerWeapon <0.66) {
  computerWeaponByName = "paper";
} else {
  computerWeaponByName = "scissors";
}
var inputPrompt = prompt('Hit 1 for rock, 2 for paper and 3 for scissors');

alert("The computer chose " + computerWeaponByName);


  var battle = function(choice1, choice2) {
    if (choice1 == choice2) {
    alert("This round is a tie. Computer score is zero. Your score is zero");
  }else if (choice1 == 1 && choice2=="paper") {
      winsByComputer += 1
      alert("Computer Wins. Your score : " + winsByPlayer + " Computer's score: " + winsByComputer);
    }
    else if (choice1 == 2 && choice2 == "scissors") {
     winsByComputer += 1
     alert("Computer Wins. Your score : " + winsByPlayer + " Computer's score: " + winsByComputer);
    }
    else if (choice1 == 3 && choice2 == "rock") {
      winsByComputer += 1
      alert("Computer Wins. Your score : " + winsByPlayer + " Computer's score: " + winsByComputer);
     }
    else {
      winsByPlayer += 1
      alert("You win. Your score : " + winsByPlayer + " Computer's score: " + winsByComputer);
    }
  }
battle(inputPrompt, computerWeaponByName);
}
