gsap.to("#nav",{
    backgroundColor :"#000",
    height : "100px",
    marginTop: "-15px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 2
        


    }
})
gsap.to("#main" , {
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -90%",
        scrub: 2
    }
})
