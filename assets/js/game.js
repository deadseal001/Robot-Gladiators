var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttach = 10;
var playerMoney =10;

//console.log(playerName, playerAttach, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyNames) {
  // Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");
  //fight or skip
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = enemyHealth - playerAttach;
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth +"health reamining.");
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyNames + " has died!");
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(enemyNames +" attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health reamining.");
            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
    } else if (promptFight === "skip" || promptFight ==="SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney-2;
            } 
            // if no (false), ask question again by running fight() again
            else {
                fight();
            }  
    } else {
            window.alert("You need to choose a valid option. Try again!");
    }
};

for(var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}