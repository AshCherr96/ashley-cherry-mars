// Footer & Copyright
const footer = document.querySelector('footer');

const today = new Date();
const thisYear = today.getFullYear();

const copyright = footer.querySelector('p');
copyright.innerHTML = `&copy; ${thisYear} Ashley Cherry`;


// List of Skills
const skills = [
    "JavaScript", 
    "HTML & CSS", 
    "Git & GitHub", 
    "React", 
    "Responsive Design", 
    "UI/UX Principles",
    "Data Visualization"
];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');
skillsList.innerHTML = ''; 

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}