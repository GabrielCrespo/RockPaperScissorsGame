let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
}

function convertToWords(letter){
    if(letter === "r"){
        return "Rock";
    } 
    else if (letter === "p"){
        return "Paper";
    } 
    else{
        return "Scissors";
    }
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = `${convertToWords(user)} beats ${convertToWords(computer)}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout( () =>  
        userChoice_div.classList.remove('green-glow')
    , 300)
}


function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = `${convertToWords(user)} does not beats ${convertToWords(computer)}. You lost!`
    userChoice_div.classList.add('red-glow');
    setTimeout( () =>  
        userChoice_div.classList.remove('red-glow')
    , 300)
}


function draw(user, computer){
    const userChoice_div = document.getElementById(user)
    result_p.innerHTML = `${convertToWords(user)} is equals to ${convertToWords(computer)}. It's a Draw!`
    userChoice_div.classList.add('gray-glow');
    setTimeout( () => 
        userChoice_div.classList.remove('gray-glow')
    , 300)
}

function game(userChoice){
    const computerChoice = getComputerChoice();
   
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){

    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));

}

main();
