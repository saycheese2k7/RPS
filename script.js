let computerscore = 0;
let userscore = 0;

function getComputerChoice() {

    let initialcomputerchoice = Math.random();

    if(initialcomputerchoice < 0.33){
        return 'rock';
    }
    else if(initialcomputerchoice < 0.66){
        return 'paper';
    }
    else{
        return 'scissor';
    }

}

let computerchoice = getComputerChoice()

function getUserChoice() {

    let initialuserchoice = prompt();
    let userchoice = initialuserchoice.toLowerCase();
    return userchoice
}

let userchoice = getUserChoice()

function playRound(user, computer){

    if(user===computer){
        console.log("Tie!");
    }
    else if(user==='rock' && computer==='scissor'){
        console.log("You win!");
        return userscore += 1;
    }
    else if(user==='rock' && computer==='paper'){
        console.log("You lose!");
        return computerscore += 1;
    }
    else if(user==='paper' && computer==='scissor'){
        console.log("You lose!");
        return computerscore += 1;
    }
    else if(user==='paper' && computer==='rock'){
        console.log("You win!")
        return userscore += 1;
    }
    else if(user==='scissor' && computer==='rock'){
        console.log("You lose!");
        return computerscore += 1;
    }
    else{
        console.log("You win!")
        return userscore += 1;
    }
    
}

playRound(userchoice, computerchoice)