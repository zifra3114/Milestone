const myButton = document.getElementById("myButton") as HTMLButtonElement
 const skills = document.getElementById("Skills") as HTMLElement

 myButton.addEventListener("click",() =>{
    if(skills.style.display == "none"){
        skills.style.display = "block"
    }else{
        skills.style.display = "none"
    }
 });