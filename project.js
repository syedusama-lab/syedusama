
var curs = document.querySelector(".curssor")
var curs_blur = document.querySelector(".curssor_blur")

document.addEventListener("mousemove", function(dets){
    curs.style.left = dets.x+"px";
    curs.style.top = dets.y+"px"
    curs_blur.style.left = dets.x-200+"px";
    curs_blur.style.top = dets.y-200+"px"
})


gsap.to(".nav",{
    backgroundColor:"#000",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroll:"body",
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main", {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})

function makeBubbl(){
    var clutter = '';
    for(let i = 1; i<=108; i++)
    {
        let ranNum = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${ranNum}</div>`;
        // clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    
    document.querySelector(".pannel_bottom").innerHTML = clutter
}
makeBubbl();

var timer = 60;
function setTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--
            document.querySelector("#setTime").textContent = timer
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pannel_bottom").innerHTML = `<h1 class="gameover">Game Over</h1>`
            document.querySelector("#randomHit").textContent = 0
            document.querySelector("#score").textContent = 0
        }
    },1000)
}
setTimer();

var hitNum
function hitVal(){
    hitNum = Math.floor(Math.random()*10)
    document.querySelector("#randomHit").textContent = hitNum
}
hitVal()

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score
}


document.querySelector("#bubbleClick").addEventListener("click",function(dets){
    let clickedNum = Number(dets.target.textContent);
    if(clickedNum==hitNum){
        increaseScore()
        hitVal()
        makeBubbl()
    }
    else{
        document.querySelector("#score").textContent = 0
    }
})
