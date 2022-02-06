//Prompts User to input robot name
var playerName = window.prompt("What is you robot's name?");
//Player Hp and Ap
var playerHealth = 100;
var playerAttack = 10;

//Logging player values
console.log(playerName, playerAttack, playerHealth);

//enemy set up
var enemyName = "Robotron";
var enemyHealth = 50;
var enemyAttack = 12;

//Arena Greeting

var fight = function() {
    //Game Start Alert
    window.alert("Welcome to the Robot Gladiators!");
    
    //Subtrack 'playerAttack' from 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;
    
    //Log message to console
        console.log (playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining.");
    //enemy health check
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left." );
        }
    
    //Subtract 'enemyAttack' from 'playerHealth'
        playerHealth = playerHealth - enemyAttack;
    //player health check
        if (playerHealth <= 0) {
            window.alert(playerName + "has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //Log Message to console
        console.log(enemyName + " Attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining.");
};
//
fight();