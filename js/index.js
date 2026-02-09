// --- Footer Element & Copyright Text ---
const body = document.querySelector('body');
const footer = document.createElement('footer');
body.appendChild(footer);


const today = new Date(); 
const thisYear = today.getFullYear(); 

const copyright = document.createElement('p'); 

copyright.innerHTML = `Ashley Cherry-Mars &copy; ${thisYear}`; 

// Copyright to the footer
footer.appendChild(copyright); 


// --- List of Skills ---
const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Responsive Design", "Flexbox/Grid"]; 

const skillsSection = document.getElementById('skills'); 
const skillsList = skillsSection.querySelector('ul'); 

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li'); 
    skill.innerText = skills[i]; 
    skillsList.appendChild(skill); 
}