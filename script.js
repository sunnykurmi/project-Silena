var circle = document.querySelector("#circlehover")
document.addEventListener("mousemove",function(dets){
    circle.style.left = `${dets.clientX}px`
    circle.style.top = `${dets.clientY}px`
})



var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box1",
        scrub:4,
        pin:true
    },
})
tl.to("#circle1",{
    clipPath:"circle(10% at 50% 50%",
    y:-200
})
tl.fromTo("#pngg1 img",{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0
})
tl.fromTo("#txt1,#txt2,#txt3",{
    opacity:0,
    y:150
},{
    opacity:1,
    stagger:.5,
    y:0
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box2",
        // start:"top top",
        // end:"100% 200%",
        scrub:4,
        pin:true
    },
})
tl.to("#circle2",{
    clipPath:"circle(10% at 50% 50%",
    y:-200,
})
tl.fromTo("#pngg2 img",{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0
})
tl.fromTo("#txt4,#txt5,#txt6",{
    opacity:0,
    y:150
},{
    opacity:1,
    stagger:.5,
    y:0
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box3",
        // start:"top top",
        scrub:4,
        pin:true
    },
})
tl.to("#circle3",{
    clipPath:"circle(10% at 50% 50%",
    y:-200,
})
tl.fromTo("#pngg3 img",{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0
})
tl.fromTo("#txt7,#txt8,#txt9",{
    opacity:0,
    y:150
},{
    opacity:1,
    stagger:.5,
    y:0
})
var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:("#box4"),
        scrub:2,
        start:"top top",
        // markers:true,
        pin:true
    }
})
tl1.fromTo("#box4 svg",{
    scale:.8
},{
    scale:60
})
tl1.fromTo("#ulla",{
    scale:.5,
    opacity:0
},{
    opacity:1,
    scale:1
})
tl1.fromTo("#txt10,#txt11",{
    color:"#675D51",
},{
    stagger:.2,
    color:"#d5c7a3",
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box5",
        // markers:true,
        // start:"100% top",
        scrub:4,
        pin:true
    },    
})    
tl.to("#circle4",{
    clipPath:"circle(10% at 50% 50%",
      y:-200,
})      
tl.fromTo("#pngg4 img",{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0
})    
tl.fromTo("#txt12,#txt13,#txt14",{
    opacity:0,
    y:150
},{
    opacity:1,
    stagger:.5,
    y:0
})    
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box6",
        // markers:true,
        // start:"100% top",
        scrub:4,
        pin:true
    },    
})    
tl.to("#circle5",{
    clipPath:"circle(10% at 50% 50%",
      y:-200,
})     
tl.fromTo("#pngg5 img",{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0
})    
tl.fromTo("#txt15,#txt16,#txt17",{
    opacity:0,
    y:150
},{
    opacity:1,
    stagger:.5,
    y:0
})    


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#box7",
        // start:"top top",
        scrub:4,
        pin:true
    },
})
tl.to("#circle6",{
    clipPath:"circle(50% at 50% 50%",

})


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:("#box8"),
        scrub:2,
        start:"top top",
        // markers:true,
        pin:true
    }
})
tl2.fromTo("#box8 svg",{
    scale:.8
},{
    scale:60
})
tl2.fromTo("#ulla1,#txt19",{
    scale:.5,
    opacity:0
},{
    opacity:1,
    scale:1
})
tl2.fromTo("#txt18",{
    color:"#675D51",
},{
    color:"#d5c7a3",
})

var box9 = gsap.timeline({
    scrollTrigger:{
        trigger:("#box9"),
        scrub:2,
        // pinSpacing: false ,
        start:"top top",
        pin:true
    },
})
box9.to("#box10",{
    y:"-100%"
},"hello")
box9.fromTo("#box10 img",{
    y:-780
},{
    y:0
},"hello")
box9.fromTo("#box10 h1",{
    y:-700
},{
    y:0
},"hello")


var bar1 = document.querySelector("#bar1")
var bar2 = document.querySelector("#bar2")
var bar3 = document.querySelector("#bar3")
var bar4 = document.querySelector("#bar4")


bar1.addEventListener("click",function(){
    bar1.style.transform="translatey(-8px)"
    bar1.style.scale=1.2
    document.querySelector("#box11a img").style.scale=1
    document.querySelectorAll("#box11a img,#box11a h1,#box11a h3,#box11a button")
    .forEach(function(elem){
        elem.style.opacity=1})

    document.querySelectorAll("#box11a h1,#box11a h3,#box11a button")
    .forEach(function(elem){
        elem.style.transform="translatey(0px)"})

    document.querySelectorAll("#bar2,#bar3,#bar4")
    .forEach(function(elem){
        elem.style.transform="translatey(0px)"
        elem.style.scale=1})
    document.querySelectorAll("#box11b img,#box11c img,#box11d img")
    .forEach(function(elem){
        elem.style.scale=.2})
    document.querySelectorAll("#box11b img,#box11b h1,#box11b h3,#box11b button,#box11c img,#box11c h1,#box11c h3,#box11c button,#box11d img,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.opacity=0})
    document.querySelectorAll("#box11b h1,#box11b h3,#box11b button,#box11c h1,#box11c h3,#box11c button,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.transform="translatey(-50px)"})
})

bar2.addEventListener("click",function(){
    bar2.style.transform="translatey(-8px)"
    document.querySelector("#box11b img").style.scale=1
    document.querySelectorAll("#box11b img,#box11b h1,#box11b h3,#box11b button")
    .forEach(function(elem){
        elem.style.opacity=1})
        
        document.querySelectorAll("#box11b h1,#box11b h3,#box11b button")
        .forEach(function(elem){
            elem.style.transform="translatey(0px)"})
            
    document.querySelectorAll("#bar1,#bar3,#bar4")
    .forEach(function(elem){
        elem.style.transform="translatey(0px)"
        elem.style.scale=1})
    document.querySelectorAll("#box11a img,#box11c img,#box11d img")
    .forEach(function(elem){
        elem.style.scale=.2})
    document.querySelectorAll("#box11a img,#box11a h1,#box11a h3,#box11a button,#box11c img,#box11c h1,#box11c h3,#box11c button,#box11d img,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.opacity=0})
    document.querySelectorAll("#box11a h1,#box11a h3,#box11a button,#box11c h1,#box11c h3,#box11c button,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.transform="translatey(-50px)"})

})


bar3.addEventListener("click",function(){
    bar3.style.transform="translatey(-8px)"
    document.querySelector("#box11c img").style.scale=1
    document.querySelectorAll("#box11c img,#box11c h1,#box11c h3,#box11c button")
    .forEach(function(elem){
        elem.style.opacity=1})
        
        document.querySelectorAll("#box11c h1,#box11c h3,#box11c button")
        .forEach(function(elem){
            elem.style.transform="translatey(0px)"})
            
    document.querySelectorAll("#bar2,#bar1,#bar4")
    .forEach(function(elem){
        elem.style.transform="translatey(0px)"
        elem.style.scale=1})            
    document.querySelectorAll("#box11a img,#box11b img,#box11d img")
    .forEach(function(elem){
        elem.style.scale=.2})
    document.querySelectorAll("#box11a img,#box11a h1,#box11a h3,#box11a button,#box11b img,#box11b h1,#box11b h3,#box11b button,#box11d img,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.opacity=0})
    document.querySelectorAll("#box11a h1,#box11a h3,#box11a button,#box11b h1,#box11b h3,#box11b button,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.transform="translatey(-50px)"})

})


bar4.addEventListener("click",function(){
    bar4.style.transform="translatey(-8px)"
    document.querySelector("#box11d img").style.scale=1
    document.querySelectorAll("#box11d img,#box11d h1,#box11d h3,#box11d button")
    .forEach(function(elem){
        elem.style.opacity=1})
        
        document.querySelectorAll("#box11d h1,#box11d h3,#box11d button")
        .forEach(function(elem){
            elem.style.transform="translatey(0px)"})
            
    document.querySelectorAll("#bar2,#bar3,#bar1")
    .forEach(function(elem){
        elem.style.transform="translatey(0px)"
        elem.style.scale=1})           
    document.querySelectorAll("#box11a img,#box11b img,#box11c img")
    .forEach(function(elem){
        elem.style.scale=.2})
    document.querySelectorAll("#box11a img,#box11a h1,#box11a h3,#box11a button,#box11b img,#box11b h1,#box11b h3,#box11b button,#box11c img,#box11c h1,#box11c h3,#box11c button")
    .forEach(function(elem){
        elem.style.opacity=0})
    document.querySelectorAll("#box11a h1,#box11a h3,#box11a button,#box11b h1,#box11b h3,#box11b button,#box11c h1,#box11c h3,#box11c button")
    .forEach(function(elem){
        elem.style.transform="translatey(-50px)"})

})
