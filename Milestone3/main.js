var form = document.querySelector("form");
var nameInput = document.getElementById("name");
var dobInput = document.getElementById("start");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("number");
var nationalityInput = document.getElementById("nationality");
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var experienceInput = document.getElementById("experience");
var resumePreview = document.getElementById("resume-preview");
var generateResumePreview = function (data) {
    return "\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(data.name, "</p>\n        <p><b>Date of Birth:</b> ").concat(data.dob, "</p>\n        <p><b>Email:</b> ").concat(data.email, "</p>\n        <p><b>Phone:</b> ").concat(data.phone, "</p>\n        <p><b>Nationality:</b> ").concat(data.nationality, "</p>\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n    ");
};
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = {
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
