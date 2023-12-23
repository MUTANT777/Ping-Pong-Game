//canvas
const canvas =document.querySelector("#pong");
const ctx = canvas.getContext('2d');

//Global Variables ********
const PLAYER_WIDTH=20;
const PLAYER_HEIGHT=100;
const BALL_START_SPEED=1;
//Game Object *******
const player={
    x:0,
    y:canvas.height/2-PLAYER_HEIGHT/2,
    width:PLAYER_WIDTH,
    height:PLAYER_HEIGHT,
    color:"#3559E0",
    score:0,
}
const computer ={
    x:canvas.width-PLAYER_WIDTH,
    y:canvas.height/2-PLAYER_HEIGHT/2,
    width:PLAYER_WIDTH,
    height:PLAYER_HEIGHT,
    color:"#B80000",
    score:0,
}
const ball={
    x:canvas.width/2,
    y:canvas.height/2,
    radius:10,
    speed:BALL_START_SPEED,
    velocityX:5,
    velocityY:5,
    color:"#0F2167",

}

const net={
    x:canvas.width/2-1,
    y:0,
    width:2,
    height:10,
    color:"#0F2167",
}




//Draw Shapes & Text Functions ******
function drawRect(x,y,w,h,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,w,h);
}
drawRect(0,0,canvas.clientWidth,canvas.clientHeight,"BLACK");

function drawCircle(x,y,r,color){
    ctx.fillStyle=color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}
drawCircle(100,100,50,"WHITE");

function drawText(text,x,y,color){
    ctx.fillStyle=color;
    ctx.font="45px fantasy";
    ctx.fillText(text,x,y);
}
//drawText("Something",300,200,"WHITE");

function drawNet(){
    for (let i=0;i<canvas.height;i+=15){
        drawRect(net.x,net.y+i,net.width,net.height,net.color);
    
    }
}

//  Redraw Canvas ********
function render(){
    //clear the canvs 
    drawRect(0,0,canvas.clientWidth,canvas.clientHeight,"#E8F9FD");
    //draw net
    drawNet()
    //draw score 
    drawText(player.score,canvas.width/4.5,canvas.height/5,"E8F9FD");
    drawText(computer.score,3*canvas.width/4,canvas.height/5,"E8F9FD");

    //draw the player &computer
    drawRect(player.x,player.y,player.width,player.height,player.color);
    drawRect(computer.x,computer.y,computer.width,computer.height,computer.color);

    //draw the ball
    drawCircle(ball.x,ball.y,ball.radius,ball.color);
}

//Game Init *************
function game(){
    render();
}

//Game Loop *************
const fps=60;
setInterval(game,1000/fps);