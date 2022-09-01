# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* Project descritpion
* Some functions and a brief description about it
* Some of the project additions and main points to be considered

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Project descritpion

* The Landing Page project wants us to convert the startup and static web page code that contains HTML and CSS files into a responsive and interactive page using the javascript. 

## Some functions and a brief description about it

* Function buildNav: This function is used to build and display the navigation bar shown in the landline page

* Function setActive: This function is used to consider the section which  is near the view port as the active section.

* At the end of the project code, there is a variable called current section followed by a for loop, and this part of code is used to check whether the currentsection variable is the active section or not using section.getBoundingClientRect(). if cuurectsection is equal or bigger than zero, then it will be set as the active section. 

## Some of the project main points to be considered

* Adding a function to check whether this section is in the viewport or not.

* Adding an active state that determines which section is active and in the viewport.

* Adding a fucntion that when a specific section is selected, it scrolls smoothly till reaching this section.