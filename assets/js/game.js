var playerInfo ={
name: window.prompt("What is your robot's name?");
health: 100;
attack = 10;
money = 10;
}

//console.log(playerName, playerInfo.attack, playerInfo.health);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random()*21) + 40;
var enemyAttack = 12;

//fight function 
var fight = function (enemyName) {
  while (playerInfo.health >0 && enemyHealth > 0) {
    //fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player picks "skip" confirm and then stop the loop  
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerMoney: ", playerInfo.money);
          break;
        }
    }
      //remove enemy's health by subtracting the amount set in the playerInfo.attack Variable
      var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
      enemyHealth = Math.max(0, enemyHealth - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerInfo.name +" attacked " +enemyName +". " +enemyName +" now has " +enemyHealth +"health reamining."
      );
      
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        
        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

        //leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
      var damage = randomNumber(enemyAttack-3, enemyAttack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemyName +" attacked " +playerInfo.name +". " +playerInfo.name +" now has " +playerInfo.health +"health reamining."
      );

      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        //leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
  } //end of while loop
};//end of fight function



//function to start a new game
var startGame =function() {
  //reset player stats
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

  //other logic remians the same
  for (var i = 0; i < enemyNames.length; i++) {
    //if player is still alive, keep fighting
    if (playerInfo.health > 0){
      //let player know what round they are in
        window.alert("Welcome to Battlebots! Round"+ (i+1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40, 60);

        fight(pickedEnemyName);

      //if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyNames.length -1){
        //ask if palyer want to use store vefore next round
        var storeConfim = window.confirm("The fight is over, visit the store before the next round?");
        //if yes, take them to the store() function
        if(storeConfim) {
          shop();
        }
      }
    }
    //if player is not alive, break out of the loop and let endGame function run 
    else {
        window.alert("You have lost your boot in battle! Game Over!");
        break;
    }
  }
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  startGame();
}

// function to end the entire game
var endGame = function() {
  window.alert("the game has now ended. Let's see how you did!");

  //if player is still alive, player wins!
  if (playerInfo.health >0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
};

//go to shop between battles function
var shop = function(){
  //ask player what they's like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" TO MAKE A CHOICE. '
  );

  //use switch case to carry out action
  switch(shopOptionPrompt) {
    case 'REFILL':
    case 'refill':
      if (playerInfo.money >= 7 ) {
        window.alert("refilling player's health by 20 for 7 dollars.");

        //increase health and decrease money
        playerInfo.health = playerInfo.health +20;
        playerInfo.money = playerInfo.money -7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      break;
    case 'UPGRADE':
    case 'upgrade':
      if (playerInfo.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        
        //increase attack and decrease money
        playerInfo.attack = playerInfo.attack + 6;
        playerInfo.money = playerInfo.money -7;
      } else {
        window.alert("You don't have enough money!");
      }
      break;
    case 'LEAVE':
    case 'leave':
      window.alert('Leave the store.');
      //do nothing, so function will end
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');

      //call shop() to for play to pick a valid option
      shop();
      break;
  }
};

//function to generate a random numeric value
var randomNumber = function(min, max){
  var value = Math.floor(Math.random()*(max-min +1) + min);
  
  return value;
}

//start first game when page loads
startGame();



