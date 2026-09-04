# Weather App

A simple weather app built with HTML, CSS, and vanilla JavaScript. Search for a city to view its current temperature, humidity, and weather description.

## Features

- Search for current weather by city name
- Displays temperature in Celsius
- Shows humidity and weather description
- Responsive, lightweight frontend with no build tools required
- Uses the OpenWeatherMap API

## Preview
https://usamakhan111.github.io/weather-app/
Open the app in a browser, enter a city name, and select **Get Weather**.

## Getting Started

### Prerequisites

- A modern web browser
- An OpenWeatherMap API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Open the project directory:

   ```bash
   cd weather-app
   ```

3. Open `index.html` in your browser.

### Configure the API key

Open `script.js` and replace the value of `apiKey` with your own OpenWeatherMap API key:

```javascript
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

For a public GitHub repository, avoid committing active API keys. A production version should store the key in a backend or use a secure environment-based setup.

## Project Structure

```text
weather-app/
├── index.html   # App structure
├── style.css    # Styling and layout
├── script.js    # API request and weather display logic
└── README.md    # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API

## License

This project is available for personal and educational use.
