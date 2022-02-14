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

//fight function
var fight = function(enemyName) 
{
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
          //enemy life removal
             enemyHealth = enemyHealth - playerAttack;
             console.log (playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " remaining."); 
                //Enemy Life Check
                if (enemyHealth <= 0)
                 {
                    window.alert(enemyName + " has died!");
                    playerMoney = playerMoney + 20;
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
                    else 
                    {
                            window.alert(playerName + " still has " + playerHealth + " health left.");
                    }
                }                        
    };
var startGame = function()
{
  //player stats reset
   playerHealth = 100;
   playerAttack = 10;
   playerMoney + 10;
        
for (var i = 0; i < enemyNames.length; i++)        
{
        //welcome message + Round Count while player is alive
        if (playerHealth > 0)
        {
            window.alert("Welcome to the Robot Gladiators! Round " + (i + 1) );
        
        var curEnName = enemyNames[i];
        //enemy health reset
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
endGame();
};  

    var endGame = function()
    {
        window.alert("The game has now Ended. Let's see how you did!");
        if(playerHealth > 0)
        {
        window.alert("Great Job! You have survived the game! You now have a score of " + playerMoney + "." );
        }
        else
        {
            window.alert("You've lost your robot in battle.");
        }
        //Play again ?

        var playAgainConfirm = window.confirm("Would you like to play again?");
            if(playAgainConfirm)
            {
            startGame();
            }
            else
            {
            window.alert("Thank you for playing Battle Bots! Come Back Soon!");
            }
    };


startGame();