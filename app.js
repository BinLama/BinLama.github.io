'use strict'

let tracitivity = document.getElementById("tractivity");
let shoptillyoudrop = document.getElementById("shoptillyoudrop")

let about = document.getElementById("li_about");
let skills = document.getElementById("li_skills");
let project = document.getElementById("li_project");
let edu = document.getElementById("li_edu");
let contact = document.getElementById("li_contact");

// currently selected value
let selected = about;


tracitivity.addEventListener("click", tracitivity_link_opener);

function tracitivity_link_opener() {
    window.open("https://replit.com/@BinLama/fitnesstracker#index.js", "_blank");
}

shoptillyoudrop.addEventListener("click", shoptillyoudrop_link_opener);

function shoptillyoudrop_link_opener() {
    window.open("https://replit.com/@BinLama/ShopTillYouDrop#index.html", "_blank");
}

// https://binlama.github.io/ECS163FINALPROJECT/

// adding event listeners for scroll function
about.addEventListener("click", aboutChangeClass);
skills.addEventListener("click", skillsChangeClass);
project.addEventListener("click", projectChangeClass);
edu.addEventListener("click", eduChangeClass);
contact.addEventListener("click", contactChangeClass);

// change class based on click for about
function aboutChangeClass() {
    about.classList.add("current_page");
    if (selected != about) {
        selected.classList.remove("current_page")
        selected = about; 
    }
    console.log(about.classList);
}

// change class based on click for skills
function skillsChangeClass() {
    skills.classList.add("current_page");
    console.log(selected);
    if (selected != skills) {
        selected.classList.remove("current_page")
        selected = skills; 
    }
    console.log(skills.classList);
}

// change class based on click for about
function projectChangeClass() {
    project.classList.add("current_page");
    if (selected != project) {
        selected.classList.remove("current_page")
        selected = project; 
    }
    console.log(project.classList);
}

// change class based on click for edu
function eduChangeClass() {
    edu.classList.add("current_page");
    if (selected != edu) {
        selected.classList.remove("current_page")
        selected = edu; 
    }
    console.log(edu.classList);
}

// change class based on click for contact
function contactChangeClass() {
    contact.classList.add("current_page");
    if (selected != contact) {
        selected.classList.remove("current_page")
        selected = contact; 
    }
    console.log(contact.classList);
}
