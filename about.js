const toggle = document.getElementById("themeToggle");
const yearSpan = document.getElementById("year");

/* ===== SET YEAR ===== */
yearSpan.textContent = new Date().getFullYear();

/* ===== THEME LOAD ===== */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}

/* ===== THEME TOGGLE ===== */
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    toggle.textContent = isDark ? "☀️" : "🌙";
});