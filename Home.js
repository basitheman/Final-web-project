const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const themeToggle = document.getElementById("themeToggle");
const yearSpan = document.getElementById("year");

const apiKey = "eec398132076f772aa5ea742655d89d0";


yearSpan.textContent = new Date().getFullYear();


const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
});


weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();
    if (!city) {
        showError("Please enter a place name");
        return;
    }

    try {
        const data = await fetchWeather(city);
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    }
});


async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        
        if(response.status === 404) throw new Error("not found 😕");
        throw new Error("Could not fetch weather");
    }

    return await response.json();
}


function displayWeather(data) {
    const { name: city, main: { temp, humidity, feels_like }, weather: [{ description, id }], wind: { speed } } = data;

    card.textContent = ""; 
    card.style.display = "block"; 

   
    const cityDisplay = document.createElement("h2");
    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    
    const tempDisplay = document.createElement("p");
    tempDisplay.textContent = `${Math.round(temp)}°`;
    tempDisplay.classList.add("tempDisplay");

   
    const emojiDisplay = document.createElement("p");
    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add("weatherEmoji");

    
    const descDisplay = document.createElement("p");
    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");


    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("weather-details");

   
    detailsDiv.innerHTML = `
        <div class="detail-item">
            <i class="fa-solid fa-water"></i>
            <span>${humidity}% Hum</span>
        </div>
        <div class="detail-item">
            <i class="fa-solid fa-wind"></i>
            <span>${speed} km/h</span>
        </div>
        <div class="detail-item">
            <i class="fa-solid fa-temperature-half"></i>
            <span>Feels ${Math.round(feels_like)}°</span>
        </div>
    `;

   
    card.appendChild(cityDisplay);
    card.appendChild(emojiDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(descDisplay);
    card.appendChild(detailsDiv);
}


function getWeatherEmoji(id) {
    if (id >= 200 && id < 300) return "⛈️";
    if (id >= 300 && id < 400) return "🌦️";
    if (id >= 500 && id < 600) return "🌧️";
    if (id >= 600 && id < 700) return "❄️";
    if (id >= 700 && id < 800) return "🌫️";
    if (id === 800) return "☀️";
    if (id > 800) return "☁️";
    return "❓";
}


function showError(message) {
    card.textContent = "";
    card.style.display = "block";
    
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    
    card.appendChild(errorDisplay);
}