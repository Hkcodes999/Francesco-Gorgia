//===============lenis================================//

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);



/*
//=======================LOCOMITIVE==========================================//

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


*/




//=====================click auto scroll======================================//

document.querySelectorAll('#GALLERY').forEach(elem => {
    elem.addEventListener('click', () => {
      document.getElementById('page6').scrollIntoView({ behavior: 'smooth' });
    });
});
  

document.querySelectorAll('#CONTACT').forEach(elem => {
    elem.addEventListener('click', () => {
      document.getElementById('page7').scrollIntoView({ behavior: 'smooth' });
    });
});


document.querySelectorAll('#AWARDS').forEach(elem => {
    elem.addEventListener('click', () => {
      document.getElementById('page8').scrollIntoView({ behavior: 'smooth' });
    });
});


//======================SCROLL HELPER=========================================//


window.addEventListener('load', function(){
  ScrollTrigger.refresh();
});


//=====================TEXT ANIMATION=========================================//

var h1texts = document.querySelectorAll("#page2 #scroll-text h2");

h1texts.forEach(function(elem){
    var clutter = "";
    var text = elem.textContent;
    var splittext = text.split("");

    splittext.forEach(function(e) {
        clutter += `<span>${e}</span>`;
    });

    elem.innerHTML = clutter;
});



gsap.from("#scroll-text h2 span",{
    opacity:0,
    stagger:2,
    scrollTrigger:{
        trigger:"#page2 #scroll-text h2",
        start:"top 70%",
        end:"top 50%",
        scrub:3,
    }
})


//--------------------------------HUMBURGER-----------------------------------//

var hamburger = document.querySelector("#nav i");
var rnav = document.querySelector("#nav-right");
var links = document.querySelectorAll("#nav-right a");

function closeNav() {
    rnav.classList.remove("active1");
    hamburger.classList.add("ri-close-circle-line");
    hamburger.classList.remove("ri-menu-line");
    gsap.FromTo(rnav, 
        {   x: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power2.in" }
        ,
        {
            x: 300, 
            duration:0.5,
            opacity: 0
        }
    );
}

// Toggle nav panel
hamburger.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling to document
    var show = rnav.classList.toggle("active1");

    this.classList.toggle("ri-menu-line");
    this.classList.toggle("ri-close-circle-line");

    if (show) {
        gsap.fromTo(rnav, 
            { x: 300, opacity: 0 },  
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" } 
        );

        gsap.fromTo("#nav-right a", 
            { y: 100, opacity: 0 },  
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 } 
        );
    } else {
        closeNav();
    }
});

// Close nav when a link is clicked
links.forEach(function(link) {
    link.addEventListener('click', closeNav);
});


// Close nav when clicking outside
document.addEventListener('click', function (e) {
    // Check if click was outside nav and hamburger
    if (rnav.classList.contains("active1") &&
        !rnav.contains(e.target) &&
        !hamburger.contains(e.target)) {
        closeNav();
    }
});


//----------------------------------------page 1------------------------------//
var tl = gsap.timeline()

tl.from("#nav h1",{
    y:-50,
    opacity:0,
    duration:0.50,
})

tl.from("#nav-right a,#nav-right i",{
    y:-50,
    opacity:0,
    duration:0.20,
    stagger: 0.50,
})

tl.from("#page1 img",{
    duration:0.50,
    rotate:25,
    opacity: 0,
    stagger:0.55,
    scrub:2
})

tl.from("#main-text h2",{
    x:-60,
    opacity:0,
    duration:0.50,
    stagger: 0.50
})

tl.from("#bottom h2",{
    y:50,
    opacity:0,
    duration: 0.50,
    stagger:0.75,
})

document.getElementById('GALLERY').addEventListener('click', function() {
    document.getElementById('page6').scrollIntoView({ behavior: 'smooth' });
});
  
document.getElementById('CONTACT').addEventListener('click', function() {
    document.getElementById('page7').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('AWARDS').addEventListener('click', function() {
    document.getElementById('page8').scrollIntoView({ behavior: 'smooth' });
});

// --------------------------------page 2------------------------------------//

gsap.to("#page2 #side-img1",{
    left:0,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 100",
        end:"top -0",
        scrub:3,
    }
})


gsap.to("#page2 #side-img2",{
    right:0,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 100",
        end:"top 0",
        scrub:3,
    }
})

//--------------------------page 3-------------------------------------------//

let page3TL = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      start: "top 70%",
      end: "top 20%",
      scrub: 2,
    }
});
  

page3TL.from("#img1",{ 
    y: 100, 
    opacity: 0,
    duration: 2 
})

page3TL.from("#img2",{ 
    y: 100,
    opacity: 0,
    duration: 1 
}, "-=0.6");

page3TL.from("#img3",{ 
    y: 100,
    opacity: 0,
    duration: 1 
}, "-=0.6");
  
page3TL.from("#img1 h2",{
    y: 50,
    opacity: 0,
    duration: 1 
})

page3TL.from("#img2 h2",{
    y: 50,
    opacity: 0,
    duration: 1 
})

page3TL.from("#img3 h2",{ 
    y: 50,
    opacity: 0,
    duration: 1 
})

//-------------------------------PAGE 4-----------------------------------------//

let page4TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        start:"top 50%",
        end:"top 5%",
        scrub:3
    }
});

page4TL.from("#page4-img img",{
    x:"-50%",
    opacity:0,
})

page4TL.from("#page4-texts h2",{
    y:50,
    opacity:0,
    stagger:0.75
})


//------------------------PAGE 5-----------------------------------------------//

let page5TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        start:"top 50%",
        end:"top 5%",
        scrub:3
    }
})

page5TL.from("#page5-right img",{
    x:"50%",
    opacity:0,
})


page5TL.from("#page5-left h2",{
    y:50,
    stagger:0.75,
    opacity:0
})



//------------------------PAGE 6-----------------------------------------------//

var text = document.querySelector("#normal-text");

var textBoxes = [
    document.querySelector("#text-img1"),
    document.querySelector("#text-img2"),
    document.querySelector("#text-img3"),
    document.querySelector("#text-img4")
];

function resetAll() {
    text.classList.remove("show");
    text.classList.add("hidden");
    textBoxes.forEach(box => box.classList.remove("active"));
}

document.querySelector("#d-img1").addEventListener("mouseover", () => {
    resetAll();
    textBoxes[0].classList.add("active");
    textBoxes[0].style.display = "block";
    gsap.fromTo("#text-img1 h2, #text-img1 h4",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.3,
            scrub: 5
        }
    );    

});

document.querySelector("#d-img2").addEventListener("mouseover", () => {
    resetAll();
    textBoxes[1].classList.add("active");
    textBoxes[1].style.display = "block";
    gsap.fromTo("#text-img2 h2, #text-img2 h4",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.3,
            scrub: 5
        }
    ); 
});

document.querySelector("#d-img3").addEventListener("mouseover", () => {
    resetAll();
    textBoxes[2].classList.add("active");
    textBoxes[2].style.display = "block";
    gsap.fromTo("#text-img3 h2, #text-img3 h4",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.3,
            scrub: 5
        }
    ); 
});

document.querySelector("#d-img4").addEventListener("mouseover", () => {
    resetAll();
    textBoxes[3].classList.add("active");
    textBoxes[3].style.display = "block";
    gsap.fromTo("#text-img4 h2, #text-img4 h4",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.4,
            scrub: 5
        }
    ); 
});

["#d-img1", "#d-img2", "#d-img3", "#d-img4"].forEach(sel => {
    document.querySelector(sel).addEventListener("mouseout", () => {
        resetAll();
        text.classList.remove("hidden");
        text.classList.add("show");
    });
});


let page6TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#page6",
        start:"top 80%",
        end:"top 20%",
        scrub: 2
    }
})


page6TL.from("#page6-top h2",{
    x:-100,
    opacity:0
})


page6TL.from("#page6-middle .display",{
    x:-100,
    opacity:0,
    stagger:1
})



//------------------------PAGE 7-----------------------------------------------//

let page7TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#page7",
        start:"top 60%",
        end:"top 30%",
        scrub:5
    }
})

page7TL.from("#page7-left-top a",{
    x:200
})

page7TL.from("#page7-left-center img, #page7-left-center h2, #page7-left-center a",{
    x:-200,
    opacity:0,
    stagger:1,
})

page7TL.from("#page7-right img",{
    x:200,
    opacity:0,
})

page7TL.from("#page7-overlay h2, #page7-overlay h3",{
    x:-200,
    opacity:0,
    stagger:1,
})

page7TL.from("#page7-left-bottom h3, #page7-left-bottom h2",{
    x:-200,
    opacity:0,
    stagger:1,
})


//-------------------------PAGE 8---------------------------------------------//

let page8TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#page8",
        start:"top 90%",
        end:"top 20%",
        scrub:1.5
    }
});

page8TL.from("#title h2",{
    x:"-50%",
    opacity:0,
    stagger:2
})

page8TL.fromTo(".ele", 
    {   y: 100, 
        opacity: 0,
    }, 
    {   
        y: 0,
        opacity: 1, 
        stagger: 0.50,
    }
);
  

//-------------------------PAGE 8---------------------------------------------//

let page9TL = gsap.timeline({
    scrollTrigger:{
        trigger:"#page9",
        start:"top 70%",
        end:"top 0%",
        scrub:2
    }
});

page9TL.from(".page9-elem h2, .page9-elem h3",{
    y:50,
    opacity:0,
    stagger:1
})


page9TL.from("#page9-bottom h3",{
    y:50,
    opacity:0,
})

page9TL.from("#page9-bottom h2",{
    opacity:0,
})



