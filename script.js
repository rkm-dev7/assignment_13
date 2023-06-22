// Toggle between light and dark mode
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        modeToggle.innerText = "Light Mode";
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        modeToggle.innerText = "Dark Mode";
    }
});
