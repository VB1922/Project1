let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turnO=true;
let newGame=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was Cliked:");
        if(turnO===true){
            box.innerText="O";
            
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });

});
const showWinner=(winner)=>{
msg.innerText=`Congratulations winner is ${winner}`;
msgContainer.classList.remove("hide");
disabledButtons();
}

const checkWinner=()=>{
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

let disabledButtons=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const gameDraw=()=>{
    msg.innerText="Game was draw";
    msgContainer.classList.remove("hide");
    disabledButtons();
}
let enabledButtons=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}
const resetGame=()=>{
turnO=true;
count=0;
enabledButtons();
msgContainer.classList.add("hide");
}

newGame.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);