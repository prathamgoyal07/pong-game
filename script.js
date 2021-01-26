let leftPaddle = document.querySelector(".leftPaddle");
let rightPaddle = document.querySelector(".rightPaddle");
let ball = document.querySelector(".ball");
let lScoreBall = document.querySelectorAll(".l1");
let rScoreBall = document.querySelectorAll(".r1");
let board = document.querySelector(".board");
let docHeight = window.innerHeight;
let docWidth = window.innerWidth;
let boardBound = board.getBoundingClientRect();
let lScore = 3;
let rScore = 3;
let xCheck = true;
let yCheck = true;

requestAnimationFrame(moveball);

function moveball(){

    if(ball.getBoundingClientRect().left<boardBound.left){
        lScore--;
        manageScore("left");
    }else if(ball.getBoundingClientRect().right>boardBound.right){
        rScore--;
        manageScore("right");
    }
    let ballCords = ball.getBoundingClientRect();
    let leftCords = leftPaddle.getBoundingClientRect();
    let rightCords = rightPaddle.getBoundingClientRect();
    let top = ballCords.top;
    let bottom = ballCords.bottom;
    let left = ballCords.left;
    let right = ballCords.right;
    if(top<=boardBound.top || bottom>=boardBound.bottom){
        yCheck = !yCheck;
    }

    if(left<= leftCords.right && right>=leftCords.left && top+30>=leftCords.top && bottom-30<=leftCords.bottom ){
        xCheck = !xCheck;
    }

    if(right>= rightCords.left && left<=rightCords.right && top+30>=rightCords.top && bottom-30<=rightCords.bottom ){
        xCheck = !xCheck;
    }

   

    if(yCheck){
        ball.style.top = top + 4 + "px";
    }else{
        ball.style.top = top - 4 + "px";
    }
    if(xCheck){
        ball.style.left = left + 4 + "px";
    }else{
        ball.style.left = left - 4 + "px";
    }
    requestAnimationFrame(moveball);
}


function manageScore(check){


    if(check == "left"){
        if(lScore==0){
            alert("RIGHT👉🏻 WINS🎉🎉");
            window.location.reload();
        }
        for(let i = lScore;i<3;i++){
            lScoreBall[i].style.backgroundColor = "RED";
        }
        xCheck = false;
    }else{
        if(rScore==0){
            alert("LEFT👈🏻 WINS🎉🎉");
            window.location.reload();
        }
        for(let i = rScore;i<3;i++){
            rScoreBall[i].style.backgroundColor = "RED";
        }
        xCheck = true;
    }

    ball.style.top = (docHeight*0.40)+"px";
    ball.style.left = (docWidth*0.40)+"px";
  
}




document.addEventListener('keydown',function(e){
    // console.log(board.getBoundingClientRect());
    if(e.key=='w'){
        let change = - (docHeight*0.1)
        movePaddle(leftPaddle,change);
        
    }else if(e.key=='s'){
        let change =  (docHeight*0.1)
        movePaddle(leftPaddle,change);
    }else if(e.key=="ArrowUp"){
        let change = - (docHeight*0.1)
        movePaddle(rightPaddle,change);
    }else if(e.key=="ArrowDown"){
        let change =  (docHeight*0.1)
        movePaddle(rightPaddle,change);
    }
    
})

function movePaddle(paddle, change){
    let paddleBounds = paddle.getBoundingClientRect();
    if(boardBound.top <= paddleBounds.top+change && boardBound.bottom >= paddleBounds.bottom + change){
        paddle.style.top = paddleBounds.top + change + "px";
    }
       
}