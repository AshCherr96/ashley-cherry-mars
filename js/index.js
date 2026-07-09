// --- Footer & Copyright --- 
const body = document.querySelector('body');
const footer = document.createElement('footer'); 
body.appendChild(footer); 

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p'); 
copyright.innerHTML = `Ashley Cherry &copy; ${thisYear}`; 
footer.appendChild(copyright);

// --- List of Skills ---
const skills = [
    "JavaScript", "HTML & CSS", "Git & GitHub", "React", 
    "Responsive Design", "UI/UX Principles", "Data Visualization", 
    "Problem Solving", "Team Collaboration", "WordPress", 
    "LLM Prompt Creation & Evaluation"
];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');
skillsList.innerHTML = ''; 

skills.forEach(skillText => {
    const skill = document.createElement('li');
    skill.innerText = skillText;
    skillsList.appendChild(skill);
});

// --- Message Form ---
const messageForm = document.getElementsByName("leave_message")[0];
const messageSection = document.getElementById("messages");

function toggleMessageSection() {
    const messageList = messageSection.querySelector("ul");
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

toggleMessageSection();

messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a> 
        <span>wrote: ${usersMessage}</span>
    `;

    // Edit Button
    const editButton = document.createElement("button");
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.style.marginLeft = "10px"; 

    editButton.addEventListener("click", () => {
        const span = newMessage.querySelector("span");
        if (editButton.innerText === "edit") {
            const currentMessage = span.innerText.replace("wrote: ", "");
            span.innerHTML = `wrote: <input type="text" value="${currentMessage}">`;
            editButton.innerText = "save";
        } else {
            const input = span.querySelector("input");
            span.innerText = `wrote: ${input.value}`;
            editButton.innerText = "edit";
        }
    });

    // Remove Button
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", () => {
        newMessage.remove();
        toggleMessageSection(); 
    });

    newMessage.appendChild(editButton);
    newMessage.appendChild(removeButton); 
    messageList.appendChild(newMessage);

    toggleMessageSection(); 
    messageForm.reset();    
});

// --- Fetch GitHub Repositories ---
fetch('https://api.github.com/users/AshCherr96/repos')
  .then(response => response.json())
  .then(repositories => {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    repositories.forEach(repo => {
        const project = document.createElement('li');
        project.innerHTML = `<a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a>`;
        projectList.appendChild(project);
    });
  })
  .catch(error => console.error('Error fetching repositories:', error));

// --- Mobile nav: auto-close when a link is tapped ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!menuToggle) return;
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // close the checkbox-driven mobile menu
            menuToggle.checked = false;
        });
    });
});