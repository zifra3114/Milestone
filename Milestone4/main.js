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
    return "\n        <h2>RESUME</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b><span contenteditable=\"true\">".concat(data.name, "</span></p>\n        <p><b>Date of Birth:</b>contenteditable=\"true> ").concat(data.dob, "</span></p>\n        <p><b>Email:</b><span contenteditable=\"true\"> ").concat(data.email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(data.phone, "</span></p>\n        <p><b>Nationality:</b><span contenteditable=\"true\"> ").concat(data.nationality, "</span></p>\n        <h3>Education</h3>\n        <p><span contenteditable=\"true\">").concat(data.education, "</span></p>\n        <h3>Skills</h3>\n        <p><span contenteditable=\"true\">").concat(data.skills, "</span></p>\n        <h3>Work Experience</h3>\n        <p><span contenteditable=\"true\">").concat(data.experience, "</span></p>\n      ");
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
