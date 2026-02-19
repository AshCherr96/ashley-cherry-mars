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

// --- Message Form ---
const messageForm = document.getElementsByName("leave_message")[0];
const messageSection = document.getElementById("messages");

// Function to hide/show the "Messages" section 
function toggleMessageSection() {
    const messageList = messageSection.querySelector("ul");
    if (!messageList) return; 

    if (messageList.children.length === 0) {
        messageSection.classList.add("hidden");
    } else {
        messageSection.classList.remove("hidden");
    }
}

toggleMessageSection();

messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log("Form Submitted:", usersName, usersEmail, usersMessage);

    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a> 
        <span>wrote: ${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", () => {
        const entry = removeButton.parentNode;
        entry.remove();
        toggleMessageSection(); 
    });


// Create Edit button
const editButton = document.createElement("button");
editButton.innerText = "edit";
editButton.type = "button";
editButton.style.marginLeft = "10px"; 

editButton.addEventListener("click", () => {
    const entry = editButton.parentNode;
    const span = entry.querySelector("span");
    const currentMessage = span.innerText.replace("wrote: ", "");

    if (editButton.innerText.toLowerCase() === "edit") {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = currentMessage;
        
        span.innerText = "wrote: ";
        span.appendChild(editInput);
        
        editButton.innerText = "save";
    } else {
        const editInput = span.querySelector("input");
        const newMessage = editInput.value;
        
        span.innerText = `wrote: ${newMessage}`;
        editButton.innerText = "edit";
    }
});

newMessage.appendChild(editButton);
newMessage.appendChild(removeButton); 

    messageList.appendChild(newMessage);

    toggleMessageSection(); 
    messageForm.reset();    
});