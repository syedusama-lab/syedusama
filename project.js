
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
        // markers:true,
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
