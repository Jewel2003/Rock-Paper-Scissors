let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");// choices ko access kar rei
const msg=document.querySelector(".msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");
const genComputerChoice=()=>{
    const options =["rock","paper","scissors"];
    const randomIndex= Math.floor(Math.random()*3);//0-2 random generate no.
    // to yeh jo Math.floor hai wo sirf number leta hai decimal number nei leta,
    // aur math.random  randomly koi bhi no. generate karta hai 0 se leke,
    //hume agr 10 ke niche ki no. ke random no generate karni hogi toh Math.random() ko 10 se
    // multiply karni hogi ..aur isiliye hume 0--2 ka tak value chaiye toh 3 se mul * kiya hai.
    return options[randomIndex];// yeh jo  bhi random no generate hoga 0-2 tak yeh wo return karega

}
const drawGame = () =>{// draw function
    console.log("game was draw");
    msg.innerText="Game was draw. Try Again"
    msg.style.backgroundColor ="blue";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win")
        msg.innerText=`you win! your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lost")
        msg.innerText=`you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};
const playGame=(userChoice)=>{// yeh computer ki choice ke liye
    console.log("user choice =", userChoice);// idhr humne user ki choice ko pass kiya hai taki computer ko bhi user ke choice ke bare pata ho
    // Generate Computer Choice-->modular-->matlab future dobara use karne ke liye
    const compChoice=genComputerChoice();// idhr computer choice ko call kiya
    console.log("Comp choice =", compChoice);// idhr hum computer choice ko print kar rei
    
    if (userChoice === compChoice){//drawgame 
        drawGame();
    }else{
        let userWin = true;// hum assume kar rei user jit rah hai
        if(userChoice === "rock"){// agr user ne rock choose kiya toh computer paper yeah phi scissors chose karega ,, aur agr rock choose kiya toh game draw
            userWin = compChoice === "paper" ? false : true; // agr comp paper choose kiya toh userWin mein value false jayega warna user win hoga
        }else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);

    }
    
};
choices.forEach((choice)=>{// yeh har ek choice ko select karta hai
    choice.addEventListener("click",()=>{// uske bad har ek choice ke liye ek evenlistner add karenge jo humara "click" event ko track karega 
        const userChoice= choice.getAttribute("id")
        //console.log("choices was clicked", userChoice);// aur jeise hi individual choice ko click kiya jayega tab ye print hoga ki click kiya hai aur kya click kiya rock or paper or scissiors
         playGame(userChoice);
    });
});
