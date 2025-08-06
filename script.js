let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('#reset') 
let newgame = document.querySelector('#newgamebtn') 
let msg = document.querySelector('#msg')
let winnerAnnounce= document.querySelector('.winner-announce')


let turnX= true;

let winPatterns=[

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

const resetGame =()=>{
    turnX =true;
    enableboxes();
     winnerAnnounce.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener('click', () =>{
       
        if (turnX) {
            box.innerText = "X";
            turnX= false;   
        }else {
            box.innerText= "O";
            turnX= true;
        }
             box.disabled = "true";
checkWinner()

    })

})

const disableboxes= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes= () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}



const showWinner= (winner) =>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    winnerAnnounce.classList.remove("hide");
    disableboxes();
        }

const checkWinner = () =>{
 for(let pattern of winPatterns)   {
    let pos0val= boxes[pattern[0]].innerText;
    let pos1val= boxes[pattern[1]].innerText;
    let pos2val=  boxes[pattern[2]].innerText;
        
if(pos0val != "" && pos1val!="" && pos2val != ""){
if(pos0val === pos1val && pos1val === pos2val){
    showWinner(pos0val);
}
}

 }
}


newgame.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);