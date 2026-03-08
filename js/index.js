// --- 1. Footer & Copyright ---
const body = document.querySelector('body');
const footer = document.createElement('footer'); 
body.appendChild(footer); 

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement('p'); 
copyright.innerHTML = `Ashley Cherry &copy; ${thisYear}`; 
footer.appendChild(copyright);

// --- 2. Dark Mode Toggle Logic ---
const toggleSwitch = document.querySelector('#checkbox');

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }    
}

if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);

    // Check for saved user preference on load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
            document.body.classList.add('dark-mode');
        }
    }
}

// --- 3. List of Skills ---
const skills = [
    "JavaScript", 
    "HTML & CSS", 
    "Git & GitHub", 
    "React", 
    "Responsive Design", 
    "UI/UX Principles",
    "Data Visualization",
    "Problem Solving",
    "Team Collaboration",
    "WordPress",
    "LLM Prompt Creation & Evaluation",
];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');
skillsList.innerHTML = ''; 

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// --- 4. Message Form & Conditional Rendering ---
const messageForm = document.getElementsByName("leave_message")[0];
const messageSection = document.getElementById("messages");

function toggleMessageSection() {
    const messageList = messageSection.querySelector("ul");
    if (!messageList) return; 

    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    } else {
        messageSection.style.display = "block";
    }
}

// Initial call to hide messages header on load
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
    editButton.addEventListener("click", () => {
        const span = newMessage.querySelector("span");
        if (editButton.innerText === "edit") {
            const currentMsg = span.innerText.replace("wrote: ", "");
            span.innerHTML = `wrote: <input type="text" value="${currentMsg}">`;
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

// --- 5. Fetch GitHub Repositories ---
fetch('https://api.github.com/users/AshCherr96/repos')
  .then(response => response.json())
  .then(repositories => {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      const desc = repositories[i].description || "Personal project exploring web development.";
      const date = new Date(repositories[i].created_at).toLocaleDateString();

      project.innerHTML = `
        <a href="${repositories[i].html_url}" target="_blank"><strong>${repositories[i].name}</strong></a>
        <p>${desc}</p>
        <small>Created: ${date}</small>
      `;
      projectList.appendChild(project);
    }
  })
  .catch(error => console.error('Error fetching repositories:', error));