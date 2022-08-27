//function to generate a random numeric value
var randomNumber = function(min, max){
  var value = Math.floor(Math.random()*(max-min +1) + min);
  
  return value;
}

var playerInfo ={
name: window.prompt("What is your robot's name?"),
health: 100,
attack: 10,
money: 10,
reset:function(){
  this.health = 100;
  this.money =10;
  this.attack = 10;
},
refillHealth:function(){
  if(this.money >=7){
    window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -=7;
  }
  else {
    window.alert("You don't have enough money!");
  }
},
upgradeAttack: function() {
  if (this.money >= 7){
    window.alert("Upgrading palyer's attack by 6 for 7 dollars.")
    this.attack += 6;
    this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
}

}

//console.log(playerName, playerInfo.attack, playerInfo.health);
var enemyInfo =[
  {
    name: "Roborto",
    attack:randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack:randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack:randomNumber(10,14)
  }
]

// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = Math.floor(Math.random()*21) + 40;
// var enemyAttack = 12;

//fight function 
var fight = function (enemy) {
  console.log(enemy)
  while (playerInfo.health >0 && enemy.health > 0) {
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
      enemy.health = Math.max(0, enemy.health - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerInfo.name +" attacked " +enemy.name +". " +enemy.name +" now has " +enemy.health +"health reamining."
      );
      
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        
        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

        //leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }

      // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
      var damage = randomNumber(enemy.attack-3, enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemy.name +" attacked " +playerInfo.name +". " +playerInfo.name +" now has " +playerInfo.health +"health reamining."
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
playerInfo.reset();

  //other logic remians the same
  for (var i = 0; i < enemyInfo.length; i++) {
    //if player is still alive, keep fighting
    if (playerInfo.health > 0){
      //let player know what round they are in
        window.alert("Welcome to Battlebots! Round"+ (i+1));
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);

        fight(pickedEnemyObj);

      //if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length -1){
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
      playerInfo.refillHealth();
      break;
    case 'UPGRADE':
    case 'upgrade':
      playerInfo.upgradeAttack();
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



//start first game when page loads
startGame();



