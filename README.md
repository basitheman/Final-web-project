🌤 Weather App
A modern, responsive Weather Web Application that provides real-time weather information for any city using the OpenWeather API.
The application includes Home, About, and Contact pages, supports dark/light mode, and features a clean glassmorphism-inspired UI.

📌 Features
🏠 Home Page
Search weather by city name
Displays: 
Temperature (°C)
Weather condition
Humidity
Wind speed
Weather icon (emoji)
Real-time data fetched from OpenWeather API
Smooth animations and glassmorphism card design
ℹ️ About Page
Brief description of the application
Explains the purpose and technologies used
Dark/Light mode supported
📞 Contact Page
Contact form with email validation
Accepts only: 
@gmail.com
@yahoo.com
Message submission confirmation
Dark/Light mode supported
🌗 Dark / Light Mode
Toggle available on all pages
Theme preference saved using localStorage
Automatically applied across all pages
📱 Responsive Design
Fully responsive for mobile, tablet, and desktop
Uses Flexbox and CSS Grid
Optimized layout for small screens

🛠️ Technologies Used
HTML5 – Semantic structure
CSS3 
Flexbox & Grid
Glassmorphism UI
Animations & transitions
JavaScript (ES6) 
Fetch API
DOM manipulation
Local Storage
OpenWeather API – Real-time weather data
Font Awesome – Icons
Google Fonts (Outfit) – Typography

📂 Project Structure
weather-app/ │ 
├── Home.html # Home page
├── style.css # Main styling 
├── index.js # Home page logic 

│ 
├── about.html # About page 
├── about.css # About page styling 
├── about.js # About page logic 

│ ├── contact.html # Contact page 
├── contact.css # Contact page styling
├── contact.js # Contact page logic
│ └── README.md 

⚙️ How to Run the Project
Download or clone the project
Open the project folder
Open index.html in any modern web browser
Enter a city name and click Search
⚠️ Internet connection is required to fetch weather data.

🔑 API Configuration
The app uses OpenWeather API.
Example API call:
https://api.openweathermap.org/data/2.5/weather?q=CityName&units=metric&appid=YOUR_API_KEY 
Replace with YOUR_API_KEY in Home.js with your own OpenWeather API key that you generate from OpenWeather Api Key but you can run the program with the already existent api.

📸 UI Highlights
Gradient header inspired by modern sports websites
Glassmorphism weather card
Smooth entrance animations
Clean footer fixed at the bottom

🚀 Future Enhancements
5-day weather forecast
Geolocation-based weather
Weather charts
Loading spinner
Error animations
Progressive Web App (PWA) support
👨‍💻 Author
Weather App Web Project
Built using HTML, CSS, and JavaScript for learning and demonstration purposes.
📄 License
This project is free to use for educational purposes.
