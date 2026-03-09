// Select toggle switch
const toggle = document.getElementById("themeToggle");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
toggle.checked = true;
}

// Toggle theme
toggle.addEventListener("change", () => {

if(toggle.checked){

document.body.classList.add("dark");
localStorage.setItem("theme","dark");

}else{

document.body.classList.remove("dark");
localStorage.setItem("theme","light");

}

});
