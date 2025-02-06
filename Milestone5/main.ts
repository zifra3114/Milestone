const form = document.getElementById("resume") as HTMLFormElement;
const shareableLinkContainer = document.getElementById("link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("Shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download") as HTMLButtonElement;
const resumePreview = document.getElementById("resume-preview") as HTMLElement;
type ResumeFormData = {
    name: string;
    dob: string;
    email: string;
    phone: string;
    nationality: string;
    education: string;
    skills: string;
    experience: string;
};


const username = (document.getElementById("username") as HTMLInputElement).value;
const nameInput = document.getElementById("name") as HTMLInputElement;
const dobInput = document.getElementById("start") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("number") as HTMLInputElement;
const nationalityInput = document.getElementById("nationality") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;



const generateResumePreview = (data: ResumeFormData): string => {
    return `
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Date of Birth:</b> ${data.dob}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Nationality:</b> ${data.nationality}</p>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Skills</h3>
        <p>${data.skills}</p>
        <h3>Experience</h3>
        <p>${data.experience}</p>
    `;
};


form.addEventListener("submit", (event: Event) => {
    event.preventDefault(); 

    
    const formData: ResumeFormData = {
        name: nameInput.value,
        dob: dobInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        nationality: nationalityInput.value,
        education: educationInput.value,
        skills: skillsInput.value,
        experience: experienceInput.value,
    };

    
    resumePreview.innerHTML = generateResumePreview(formData);
});
const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

downloadPdfButton.addEventListener('click', () => {
    window.print(); 
});
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
    }
});