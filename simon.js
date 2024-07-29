let gameseq = [];
let userseq = [];
let btns = ["red","yellow","blue","purple"];

let h2 = document.querySelector("h2");

let started= false;
let level=0;
let max = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game was started");
        started=true;
        levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    flash(randbtn);
}


function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        max = Math.max(level-1,max); 
        h2.innerHTML = `Game is over,Your score is <b>${level-1}</b> <br> press any key to restart<br> Highest Score is ${max}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
let allBtns = document.querySelectorAll(".box");


function btnpress(){
    let btn = this;
    flash(btn);
    let userColor =btn.getAttribute("id");

    userseq.push(userColor);
    checkAns(userseq.length-1);
}
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];
}

