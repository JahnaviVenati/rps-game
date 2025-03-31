let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice = ()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
//Math.random();-which gives a random values in float
//Math.floor(Math.random()*3)-which gives random numbers in int lessthan 3(bcoz we specified 3 there),(if 10 then the values are lessthan 9)

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    console.log("User Choice= ", userChoice);
    //comp choice
    const compChoice=genCompChoice();
    console.log("comp choice= ", compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="Scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    
    
};


choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})