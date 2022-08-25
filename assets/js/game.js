var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttach = 10;
var playerMoney = 10;

//console.log(playerName, playerAttach, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (playerHealth >0 && enemyHealth > 0) {
    //fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney: ", playerMoney);
          break;
        }
    }
      enemyHealth = enemyHealth - playerAttach;
      // Log a resulting message to the console so we know that it worked.
      console.log(playerName +" attacked " +enemyName +". " +enemyName +" now has " +enemyHealth +"health reamining.");
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } else {
        window.alert(
          enemyName + " still has " + enemyHealth + " health left."
        );
      }
      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth = playerHealth - enemyAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(enemyName +" attacked " +playerName +". " +playerName +" now has " +playerHealth +"health reamining."
      );
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
  } //end of while loop
};//end of fight function



//function to start a new game
var startGame =function() {
  //reset player stats
  playerHealth = 100;
  playerAttach = 10;
  playerMoney = 10;
  //other logic remians the same
  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth>0){
        window.alert("Welcome to Battlebots! Round"+ (i+1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth=50;
        //debugger;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your boot in battle! Game Over!");
        break;
    }
  // }
  startGame();
}
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame()
}

// function to end the entire game
var endGame = function() {
  //if player is still alive, player wins!
  if (playerHealth >0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in a battle.");
  }
  // ask player if they'd like to paly again
  var playAgainConfirm = window.confirm("Would you like to paly again?");
  if (playAgainConfirm) {
    //restart the game
    startGame();
  } 
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
  // window.alert("The game has now ended. Let's see how you did!");
}


//start the game when the page loads
startGame();