let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");

const compChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

const Score = () =>{
    document.getElementById("user-score").innerHTML = userscore;
    document.getElementById("comp-score").innerHTML = compscore;
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You Win!");
        msg.innerHTML = ("You Win!")
        userscore++
        Score()
    } else {
        console.log("You lose!");
        msg.innerHTML = ("You lose!")
        compscore++
        Score()
    }
    console.log(`User Score: ${userscore}, Computer Score: ${compscore}`);
}

const drawGame = (userChoice, compchoice) => {
    let result = compchoice;
    if (userChoice === result) {
        console.log("It's a tie!");
        msg.innerHTML = ("Its a draw, Play again!")
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = result === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = result === "scissors" ? false : true;
        }
        else {
            userWin = result === "rock" ? false : true;
        }
        showWinner(userWin);
    };
}
const playgame = (userChoice) => {
    console.log("User Choice is ", userChoice);
    const compchoice = compChoice();
    console.log("Computer Choice is ", compchoice);
    drawGame(userChoice, compchoice);
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice)
    });
});






