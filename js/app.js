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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//defining the global variables
const sections = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// function to create the nav
const Nav_Builder = () => {

  let nav_list = '';
  // looping through each section
  sections.forEach(section => {

      const section_ID = section.id;
      const section_Data_Nav = section.dataset.nav;

      nav_list += `<li> <a class="menu__link" href="#${section_ID}">${section_Data_Nav}</a></li>`;

  });
  // append the elements to the navigation
  navigation.innerHTML = nav_list;

  };

 Nav_Builder();

// Checking the viewed port
const port = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// function to remove the active class
const remove_Active = (section) => {
  section.classList.remove('your-active-class');
};
// function to add the active class
const add_Active = (conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');    
  };
};

// function to implement the actual function

const Section_Activation = () => {
  // looping through all sections
  sections.forEach(section => {
      const element_Offset = port(section);

      viewport = () => element_Offset < 200 && element_Offset >= -200;

      remove_Active(section);
      add_Active(viewport(),section);
  });
};
// activate the section when scrolling
window.addEventListener('scroll' ,Section_Activation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

  const links = document.querySelectorAll('.navbar__menu a');
  links.forEach(link => {
      link.addEventListener('click', () => {
          for(i = 0 ; i< sections ; i++){
              sections[i].addEventListener("click",sectionScroll(link));
          }
      });
  });

};

scrolling();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active