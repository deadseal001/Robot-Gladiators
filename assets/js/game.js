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
    // if player choses to fight, then fight
    //if (promptFight === "fight" || promptFight === "FIGHT") {
      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
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
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
  } //end of while loop
};//end of fight function


for (var i = 0; i < enemyNames.length; i++) {
    debugger;
    //window.alert(i);
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
}
