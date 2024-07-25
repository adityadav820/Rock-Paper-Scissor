console.log("hello!");
const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// console.log(msg.innerText);
let userScore=0;
let roboScore=0;
const userScorepara = document.querySelector("#user-score");
const roboScorepara = document.querySelector("#robo-score");

const getRoboChoice = ()=>{
    const options =["Rock", "Paper", "Scissors"];
    const randId=Math.floor(Math.random()*3);
    return options[randId];
};
const drawGame = ()=>{
    msg.innerText= "Game Draw, Play Again.";
    msg.style.backgroundColor="black";
};
const showResult = (userWin,userChoice,roboChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText= `You Won! ,Your "${userChoice}" beats "${roboChoice}"`;
        msg.style.backgroundColor="green";
    }
    else{
        roboScore++;
        roboScorepara.innerText= roboScore;
        msg.innerText= `You Lose. , "${roboChoice}" beats Your "${userChoice}"`;
        msg.style.backgroundColor="red";
    }
};

const playGame= (userChoice)=>{
        // console.log("User choice = ", userChoice);
        const roboChoice =getRoboChoice();
        // console.log("Robo choice = ", roboChoice);
        let userWin = true;
        if(userChoice===roboChoice){
            drawGame();
        }
        else{
            if(userChoice==="Rock"){
                userWin = roboChoice==="Paper"? false : true;
            }
            else if(userChoice==="Paper"){
                userWin = roboChoice==="Scissors"? false : true;
            }
            else{
                userWin = roboChoice==="Rock" ? false : true;
            }
            showResult(userWin,userChoice,roboChoice);
        }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});
