// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', () => {
    //linksContainer.classList.toggle('show-links');

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
})


const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    }
    else{
        navBar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 700){
        topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach( (link) => {
    link.addEventListener('click', (e) => {
        //prevent default event
        e.preventDefault();

        //navigate to the specific element location on the page
        const id  = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        //Calculate heights
        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        // console.log(position);
        // console.log(navHeight);
        // console.log(element.offsetTop);

        if(fixedNav === false){
            position = position  - navHeight;
        } 
        if(navHeight > 85){
            position = position + containerHeight;
            // console.log(navHeight);
            // console.log(containerHeight);
            // console.log(position);
        }

        window.scrollTo(
            {
                left: 0,
                top: position
            }
        );
        linksContainer.style.height = 0; 
    });
});
