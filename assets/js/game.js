//Prompts User to input robot name
var playerName = window.prompt("What is you robot's name?");
//Player Hp and Ap
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Logging player values
console.log(playerName, playerAttack, playerHealth);

//enemy set up
var enemyNames = ["Robotron", "Hey Arnold", "Robo Tum"];
var enemyHealth = 50;
var enemyAttack = 12;
//Arena Greeting


var fight = function(enemyName) {
while(enemyHealth > 0 && playerHealth > 0 ) 
{
     //Fight or Skip Prompt
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");                       
         //Player chooses Skip
         if (promptFight === "skip" || promptFight === "SKIP")
         {
                //Skip Confirm
                var confirmSkip = window.confirm("Are you sure you would like to quit ?");
                
                if (confirmSkip) 
                {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");                                
                playerMoney = playerMoney - 2;
                console.log("playerMoney", playerMoney);
                break;
                }
          }
                   enemyHealth = enemyHealth - playerAttack;
                   console.log (playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining."); 
                //Enemy Life Check
                if (enemyHealth <= 0)
                 {
                    window.alert(enemyName + " has died!");
                    break;
                 }
                else 
                {
                    window.alert(enemyName + " still has " + enemyHealth + " health left." );
                }
                //Enemy Attack
                    playerHealth = playerHealth - enemyAttack;
                    console.log(enemyName + " Attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining.");

                //Player Life check
                    if (playerHealth <= 0)
                    {
                        window.alert(playerName + " has died.");
                        break;
                    }
                    else {
                            window.alert(playerName + " still has " + playerHealth + " health left.");
                    }
                }

                
                
    }

for (var i = 0; i < enemyNames.length; i++) 
    {
        //welcome message + Round Count while player is alive
        if (playerHealth > 0)
        {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1) );
        
        var curEnName = enemyNames[i];
        enemyHealth = 50;
        debugger;
        fight(curEnName);
        }
        else
        {
            window.alert("You have lost your robot in battle! Game Over")
            break;
        }
    }
