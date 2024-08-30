let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector ( "h2" );
let Start=document.querySelector(".startBtn");

Start.addEventListener("click", function () {
    if ( started == false ) {
        console.log("Game is started");
        started = true;

        levelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout (function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout (function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector (`.${randColor}`);
    

     console.log ( randIdx );
     console.log ( randColor );
     console.log ( randBtn );

     gameFlash(randBtn);
    gameSeq.push(randColor );
    console.log(gameSeq );
    gameFlash(randBtn);
}

function checkAns(idx){
   
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    else{
        h2.innerHTML =`Game Over! Your Score was <b>${level}</b><br> Press Start to Restart the Game`;
        document.querySelector("body").style.backgroundColor="red";
        Start.style.backgroundColor="red";
        setTimeout(function(){
            //color
            document.querySelector("body").style.backgroundColor="";
            Start.style.backgroundColor="#1976D2";
            
    })
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=0;
    gameSeq=[];
    userSeq=[];
    level=0;
}
