    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");


    function playGame(playerChoice){

        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === computerChoice){
            result = "It's a tie";
        }
        else if (playerChoice === 'rock' && computerChoice === 'scissors'){
            
            result = "You won, rock beats scissors!";
        }
        else if (playerChoice === 'scissors' && computerChoice === 'paper'){
            
            result = "You won, scissors beats papper!";
        }
        else if (playerChoice === 'paper' && computerChoice === 'rock'){
            
            result = "You won, paper beats rock!";
        }
        else {
            
            result = "You lose!";
        }
        

        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;
    
    }
