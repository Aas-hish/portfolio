//   NAV BAR FUNCTION

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    }
    else{
        menuBtn.className = "nav-menu";
    }
}
function closeNav() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.className = "nav-menu";
}

// Add event listeners to all menu links
var menuLinks = document.getElementsByClassName("nav-link");
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", closeNav);
}



// ADD DROP SHADOW ON SCROLL 

window.onscroll = function(){headerShadow()};

function headerShadow(){
    var header = document.getElementById("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
       
        header.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        header.style.height = "70px";
        header.style.lineHeight = "70px";

    }else{
        header.style.boxShadow = "none";
        header.style.height = "90px";
        header.style.lineHeight = "90px";
    }
}
// TYPING EFFECT
var  typingEffect = new Typed(".typedText",{
    strings: ["Developer", "Designer", "Coder"],
    loop :true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay : 2000
})
// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset : true
})

// HOME ANIMATION
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay:100})
sr.reveal('.featured-text-info',{delay:200})
sr.reveal('.featured-btn',{delay:100})
sr.reveal('.social-icons',{delay:200})
sr.reveal('.featured-image',{delay:300})


// PROJECT BOX ANIMATION
 sr.reveal('.project-box',{interval: 200})

 sr.reveal('.footer',{interval: 200})

//  HEADERS
sr.reveal('.top-header',{})

// ABOUT INFO  AND CONTACT INFO ANIMATION && LEFT ANIMATION
const srLeft = ScrollReveal({
    origin:'left',
    distance:'80px',
    duration:2000,
    reset: true
})

srLeft.reveal('.about-info',{delay : 100})
srLeft.reveal('.contact-info',{delay : 100})

// ABOUT SKILL AND FORM ANIMATION && RIGHT ANIMATION
const srRight = ScrollReveal({
    origin:'right',
    distance:'80px',
    duration:2000,
    reset: true
})

srRight.reveal('.skill-header',{delay : 100})
srRight.reveal('.form-control',{delay : 100})


// CHANGE ACTIVE LINK OF NAV LIST
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)




document.getElementById('view-more-btn').addEventListener('click',
    function(){
        document.querySelector('.pop-up-screen').style.display = 'flex';

});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.pop-up-screen').style.display = 'none';
})

 


