//function to generate a random numeric value
var randomNumber = function(min, max){
  var value = Math.floor(Math.random()*(max-min +1) + min);
  
  return value;
}

//function to set name
var getPlayerName = function() {
  var name ="";
//**************
//ADD LOOP here with PROMPT and condition
//***************
while (name === "" || name === null) {
  name = prompt( "What is your robot's name?")
}

console.log("Your robot's name is "+ name);
return name;
}

var test = function(){
  var response = prompt("Question?");
  if (response === "" || response === null) {
    test();
  }
  return response;
}

var playerInfo ={
name: getPlayerName(),
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

var fightOrSkip = function(){
  //ask player if they'd liek to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like to fight or SKIP this battle?Enter "FIGHT" or "SKIP" to choose.');

  //Enter the conditional recursive function call here!
  if(promptFight ==="" || promptFight === null) {
    window.alert("You need to provide a valid answer! please try again.");
    fightOrSkip();
  }

  promptFight = promptFight.toLowerCase();

  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    //CONFIRM PLAYER WANTS TO SKIP
    var confirmSkip = window.confirm("Are you sure you'd like to qutie?");
    
    //if yes (ture), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
      //substract money from playMoney for skipping
      playerInfo.money = playerInfo.money -10;
      //return true if palyer wants to leave
      return true;
    }
  }
return false;
}

//fight function 
var fight = function(enemy) {
  var isPlayerTurn = true;
  if (Math.random() > 0.5){
    isPlayerTurn = false;
  }

  console.log(enemy)

  while (playerInfo.health >0 && enemy.health>0 ){
    if (isPlayerTurn){
      //ask player if they'd like to fight or skip using fightOrSkip function 
      if (fightOrSkip()) {
        //if true, leave fight by breaking loop
        break;
      }

      var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
      //remove enemy's health by subtracting the amount we set in the damage variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

      //check enemy's health
      if(enemy.health <= 0){
        window.alert(enemy.name + " has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;
        //leave while() loop since enemy is dead
        break;
      }else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
      }
      //palyer gets attacked first
    } else {
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
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  } //end of while loop
};//end of fight function



//function to start a new game
var startGame =function() {
  //reset player stats
playerInfo.reset();
debugger;
  //other logic remians the same
  for (var i = 0; i < enemyInfo.length; i++) {
    
    //if player is still alive, keep fighting
    if (playerInfo.health > 0){
      //let player know what round they are in
        window.alert("Welcome to Battlebots! Round"+ (i+1));
        debugger;
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
  endGame();
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
  //check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null){
    highScore = 0;
  }
debugger
  //if player has more money than the high score, player has new high score!
  if (playerInfo.money > highScore) {
    localStorage.setItem("sighscore",playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the highest score of " + playerInfo.money + "!" );
  } else {
    alert(playerInfo.name + "did not beat the highest score of " + highScore + " played by " + localStorage.getItem("name") + ". Maybe next time!");

  }

  // ask player if they'd like to paly again
  var playAgainConfirm = window.confirm("Would you like to play again?");

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

  shopOptionPrompt = parseInt(shopOptionPrompt);

  debugger;
  //use switch case to carry out action
  switch(shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
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



