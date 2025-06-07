let userScore = 0 ;
let compScore = 0 ;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoices = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    // console.log("game was draw ");
    msg.innerText = " ITS A DRAW !"
     msg.style.backgroundColor = "#081B31" ; 
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore ;
        // console.log("you win! ");
msg.innerHTML = `YOU WON! YOUR CHOICE - <h6 class="dynamic-text">${userChoice}</h6> BEATS THE COMPUTER CHOICE - <h6 class="dynamic-text">${compChoice}</h6>`;        msg.style.backgroundColor = "green" ; 
    }else{
        compScore++;
        compScorePara.innerText = compScore ;
        // console.log("you lose !")
msg.innerHTML = `YOU LOST! COMPUTER CHOICE - <h6 class="dynamic-text">${compChoice}</h6> BEATS YOUR CHOICE - <h6 class="dynamic-text">${userChoice}</h6>`;         msg.style.backgroundColor = "red" ;
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = " , userChoice);
    const compChoice = genCompChoices();
    // console.log("comp choice = " , compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true ; 
        if(userChoice === "rock"){

            userWin = compChoice === "paper" ? false:true ; 
        }else if(userChoice === "paper"){

            userWin = compChoice === "scissors" ? false : true ; 
        }else{
            userWin = compChoice === "rock" ?false:true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice)
        playGame(userChoice);
    });
});










///////////////////////////
// my method 
///////////////////////////
// const choices = document.querySelectorAll(".choice");

// choices.forEach((choice) => {
//     choice.addEventListener("click", (event) => {
//         const choiceId = choice.getAttribute("id");
//         let chance = Math.floor(Math.random() * 3) + 1;
//         let computerChoice;

//         if (chance == 1) {
//             computerChoice = "rock";
//         } else if (chance == 2) {
//             computerChoice = "paper";
//         } else {
//             computerChoice = "scissors";
//         }



//         if (choiceId == "rock" && computerChoice == "paper") {
//             console.log("computer wins");
//         } else if (choiceId == "paper" && computerChoice == "rock") {
//             console.log("player wins");
//         } else if (choiceId == "rock" && computerChoice == "scissors") { // Fixed "stone" to "rock"
//             console.log("player wins");
//         } else if (choiceId == "scissors" && computerChoice == "rock") { // Fixed "stone" to "rock"
//             console.log("computer wins");
//         } else if (choiceId == "paper" && computerChoice == "scissors") {
//             console.log("computer wins"); // Fixed incorrect win assignment
//         } else if (choiceId == "scissors" && computerChoice == "paper") {
//             console.log("player wins");
//         } else {
//             console.log("It's a draw!"); // Added draw condition
//         }
//     });
// });

