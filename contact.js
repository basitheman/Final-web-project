const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");
const yearSpan = document.getElementById("year");

/* ===== SET YEAR ===== */
yearSpan.textContent = new Date().getFullYear();

/* ===== THEME LOAD ===== */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

/* ===== THEME TOGGLE ===== */
themeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", 
        document.body.classList.contains("dark") ? "dark" : "light"
    );
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* ===== EMAIL VALIDATION ===== */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    
    // Regex: Must end in @gmail.com or @yahoo.com
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;

    // Reset styles
    formMessage.style.color = "";
    emailInput.style.borderColor = "";

    if (!regex.test(email)) {
        // Error State
        formMessage.textContent = "❌ Please use a Gmail or Yahoo email address.";
        formMessage.style.color = "#c70101";
        emailInput.style.borderColor = "#c70101";
        
        // Shake animation effect
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 500);
        return;
    }

    // Success State
    formMessage.textContent = "✔ Message sent successfully!";
    formMessage.style.color = "#28a745"; // Green
    
    // Clear form
    emailInput.value = "";
    messageInput.value = "";
});