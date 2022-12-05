// EventListeners
document.addEventListener('scroll', scrollPage);

// Drop contact me list on click
document.getElementById('contact-me-li').addEventListener('click', function(e){
    document.getElementById('contact-me-sub-menu').style.display === 'block' ? document.getElementById('contact-me-sub-menu').style.display = 'none' : document.getElementById('contact-me-sub-menu').style.display = 'block';
})


// svg, create and add stars, add blinking effect
function populateAndBlinkStars() {
    const starArr = [];
    const hero = document.getElementById('hero');
    const svg = document.getElementById('svg');
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;

    for(let i = 0; i < 40; i++){
        const cx = Math.ceil(Math.random() * width);
        const cy = Math.ceil(Math.random() * (height));
        const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', '1');
        circle.setAttribute('stroke', 'white');
        circle.setAttribute('stroke-width', '1');
        circle.setAttribute('fill', 'white');
        circle.classList.add('z-index-top');
        svg.appendChild(circle);
        starArr.push(circle);
    }
    blink(starArr, 1000);
}

// Star blinking effect
const blink = function(arr, ms) {
    const stars = arr;
    const milliseconds = ms;

    //Random number for setTimeout function in milliseconds
    let timeoutCallInMs = getRandomNum(milliseconds);

    setTimeout(function() {
        //Select random star in starsArr
        const num = getRandomNum(stars.length - 1);
        // Increase Radius of star
        stars[num].setAttribute('r', '2.5');
        
        // Return radius to normal size after 100ms
        setTimeout(function(){
            stars[num].setAttribute('r', '1');
        }, 200);
        blink(stars, milliseconds);
    }, timeoutCallInMs);
}

populateAndBlinkStars()

// Random Number function
function getRandomNum(range){
    let num = Math.ceil(Math.random() * range);
    return num;
}

/* SCROLL EFFECTS, CLOSE NAVBAR & PROJECT SECTION EFFECTS */
const projectNodeList = document.getElementById('projects-section').childNodes;
const projectArticles = [];

for(let i = 3; i < projectNodeList.length; i += 2){
    projectArticles.push(projectNodeList[i]);
}

function scrollPage(){

    const scrollPos = window.scrollY;
    let projectCards = []

    if(scrollPos > 500){ 
        document.getElementById('nav').style.left = '-32vw'; 
        hideShowElement(closeNav, 'none')
        hideShowElement(openNav, 'block');
        heroText.style.left = '0';
    }

    if(window.innerWidth > 1200){ projectCards = [[1167, 1826], [1467, 2126], [1767, 2426], [2067, 2726],[2367, 3026], [2467, 3000]]; }

    if(window.innerWidth <= 1200){ projectCards = [[1024, 2369], [1224, 2569], [1424, 2769], [1624, 2969],[1824, 3169], [2067, 3369]]; }

    if(window.innerWidth <= 1000){ projectCards = [[700, 3369], [700, 3369], [700, 3369], [700, 3369], [700, 3369], [700, 3369]]; }

    if(scrollPos >= projectCards[0][0] || scrollPos < projectCards[0][1]){ fadeInOut(projectArticles[0], true) };
    if(scrollPos > projectCards[0][1] || scrollPos < projectCards[0][0]){ fadeInOut(projectArticles[0], false) };

    if(scrollPos >= projectCards[1][0] || scrollPos < projectCards[1][1]) { fadeInOut(projectArticles[1], true) };
    if(scrollPos > projectCards[1][1] || scrollPos < projectCards[1][0]) { fadeInOut(projectArticles[1], false) };

    if(scrollPos >= projectCards[2][0] || scrollPos < projectCards[2][1]) { fadeInOut(projectArticles[2], true) };
    if(scrollPos > projectCards[2][1] || scrollPos < projectCards[2][0]) { fadeInOut(projectArticles[2], false) };

    if(scrollPos >= projectCards[3][0] || scrollPos < projectCards[3][1]) { fadeInOut(projectArticles[3], true) };
    if(scrollPos > projectCards[3][1] || scrollPos < projectCards[3][0]) { fadeInOut(projectArticles[3], false) };

    if(scrollPos >= projectCards[4][0] || scrollPos < projectCards[4][1]) { fadeInOut(projectArticles[4], true) };
    if(scrollPos > projectCards[4][1] || scrollPos < projectCards[4][0]) { fadeInOut(projectArticles[4], false) };

    if(scrollPos >= projectCards[5][0] || scrollPos < projectCards[5][1]) { fadeInOut(projectArticles[5], true) };
    if(scrollPos > projectCards[5][1] || scrollPos < projectCards[5][0]) { fadeInOut(projectArticles[5], false) };
        
}

function fadeInOut(element, inOut){
    if(inOut){ element.style.opacity = '1'; }
    if(!inOut){ element.style.opacity = '0'; }
}

// OPEN NAD CLOSE NAV BAR
const openNav = document.querySelector('.open');
const closeNav = document.querySelector('.close');
const nav = document.getElementById('nav');
const heroText = document.getElementById('hero-text');

openNav.addEventListener('click', function(){
    nav.style.left = '0';
    heroText.style.left = '16vw';
    hideShowElement(openNav, 'none');
    setTimeout(function(){
        hideShowElement(closeNav, 'block');
    }, 100)
});

closeNav.addEventListener('click', function(){
    nav.style.left = '-32vw';
    heroText.style.left = '0';
    hideShowElement(closeNav, 'none')
    hideShowElement(openNav, 'block');
})

function hideShowElement(el, display){
    el.style.display = display;
}



// // Cycle slide carosuell
// function nextSlide(element) {
//     const desktopArticle = document.getElementById('desktop');
//     const tabletArticle = document.getElementById('tablet');
//     const mobileArticle = document.getElementById('mobile');

//     if(element === 'next'){
//         if(desktopArticle.style.display === 'inline-grid' || desktopArticle.style.display === ''){
//             desktopArticle.style.display = 'none';
//             tabletArticle.style.display =  'inline-grid';
//             mobileArticle.style.display = 'none';
//         } else if(tabletArticle.style.display === 'inline-grid') {
//             desktopArticle.style.display = 'none';
//             tabletArticle.style.display = 'none';
//             mobileArticle.style.display = 'inline-grid';
//         } else if(mobileArticle.style.display === 'inline-grid') {
//             desktopArticle.style.display = 'inline-grid';
//             tabletArticle.style.display = 'none';
//             mobileArticle.style.display = 'none';
//         } 
//     } else if(element === 'previous'){
//         if(desktopArticle.style.display === 'inline-grid' || desktopArticle.style.display === ''){
//             desktopArticle.style.display = 'none';
//             tabletArticle.style.display = 'none';
//             mobileArticle.style.display = 'inline-grid';
//         } else if(tabletArticle.style.display === 'inline-grid'){
//             desktopArticle.style.display = 'inline-grid';
//             tabletArticle.style.display = 'none';
//             mobileArticle.style.display = 'none';
//         } else if(mobileArticle.style.display === 'inline-grid'){
//             desktopArticle.style.display = 'none';
//             tabletArticle.style.display =  'inline-grid';
//             mobileArticle.style.display = 'none';
//         }
//     }
// }

