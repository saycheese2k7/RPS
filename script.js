let computerscore = 0;
let userscore = 0;
let initialuserchoice

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

function rockbtn() {

    initialuserchoice = 'rock';
    return initialuserchoice;
}


function paperbtn() {

    initialuserchoice = 'paper';
    return initialuserchoice;
}


function scissorbtn() {

    initialuserchoice = 'scissor';
    return initialuserchoice;
}

function getUserChoice() {

    let userchoice = initialuserchoice;
    return userchoice
}

function playRound(user, computer){

    if(user===computer){
        console.log("Tie!");
    }
    else if(user==='rock' && computer==='scissor'){
        console.log(`You win! ${user} beats ${computer}. Your score is ${userscore + 1} and computer's score is ${computerscore}`);
        return userscore += 1;
    }
    else if(user==='rock' && computer==='paper'){
        console.log(`You lose! ${computer} beats ${user}. Your score is ${userscore} and computer's score is ${computerscore + 1}`);
        return computerscore += 1;
    }
    else if(user==='paper' && computer==='scissor'){
        console.log(`You lose! ${computer} beats ${user}. Your score is ${userscore} and computer's score is ${computerscore + 1}`);
        return computerscore += 1;
    }
    else if(user==='paper' && computer==='rock'){
        console.log(`You win! ${user} beats ${computer}. Your score is ${userscore + 1} and computer's score is ${computerscore}`);
        return userscore += 1;
    }
    else if(user==='scissor' && computer==='rock'){
        console.log(`You lose! ${computer} beats ${user}. Your score is ${userscore} and computer's score is ${computerscore + 1}`);
        return computerscore += 1;
    }
    else{
        console.log(`You win! ${user} beats ${computer}. Your score is ${userscore + 1} and computer's score is ${computerscore}`);
        return userscore += 1;
    }
    
}

function letsplay() {
    userchoice = getUserChoice();
    computerchoice = getComputerChoice();
    playRound(userchoice, computerchoice)
}

if(userscore > computerscore){
    console.log(`You win the game! Your score is ${userscore} and computer's score is ${computerscore}`);
}
else if(userscore < computerscore){
    console.log(`You lose the game! Your score is ${userscore} and computer's score is ${computerscore}`);
}
else{
    console.log(`It's a tie! Your score is ${userscore} and computer's score is ${computerscore}`);
}


