var myButton = document.getElementById("myButton");
var skills = document.getElementById("Skills");
myButton.addEventListener("click", function () {
    if (skills.style.display == "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
