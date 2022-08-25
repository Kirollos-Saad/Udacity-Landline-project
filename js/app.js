/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let activeSection = document.querySelector('.your-active-class');
let activeSectionItem; 
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// building the nav
function buildNav() {

    let ul = document.querySelector('.navbar__menu ul');

    // Main container
    let navigation = document.querySelector('.navbar__menu');

    for (let i = 0; i < sections.length; i++)
    {
        let text = document.createElement("a");
        let li = document.createElement("li");
    
        if (i == 0) {
            text.classList.add("section__active");
            activeSectionItem = text;
        }

        // Setting up the links
        text.setAttribute("href", `#${sections[i].id}`);
        text.classList.add("menu__link");
        text.textContent = sections[i].getAttribute('data-nav');
        text.addEventListener('click', SectionScroll);
        
      li.appendChild(text);
        ul.appendChild(li);
    }

    navigation.appendChild(ul);
}
// The required function section scroll
function SectionScroll(event) {
    let newSection = document.querySelector(`${event.target.getAttribute("href")}`);
    event.preventDefault();
    window.scrollTo({
       top: newSection.offsetTop,
       behavior: 'smooth' 
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Add class 'active' to section when near the top of the viewport
function setActive(section) {
    // The Section
    activeSection.classList.remove('your-active-class');
    section.classList.add('your-active-class');
    activeSection = section;

    // The Nav items
    const item = document.querySelector(`.menu__link[href="#${section.id}"]`);
    activeSectionItem.classList.remove("section__active");
    item.classList.add("section__active");
    activeSectionItem = item;
}

// Scroll to anchor ID using scrollTO event
function sectionTo(section) {
    window.scrollTo({
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// calling the function to build a nav 
buildNav();

// Set the section as active
window.addEventListener("scroll", function () {
    
    let navigation = document.querySelector('.navbar__menu');
    navigation.style.display = "block";
    

    let currentSection;
    for (const section of sections) {
        currentSection = section.getBoundingClientRect();
       // Check if it is the active section or not
        if (currentSection.top >=0) {
            setActive(section);
            break;
        }
    }

   
});



