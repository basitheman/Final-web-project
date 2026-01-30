const toggle = document.getElementById("themeToggle");
const yearSpan = document.getElementById("year");


yearSpan.textContent = new Date().getFullYear();


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}


toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    toggle.textContent = isDark ? "☀️" : "🌙";
});
