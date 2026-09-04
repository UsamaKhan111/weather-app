const cityInput = document.querySelector(".cityInput");
const form = document.querySelector(".weatherForm");
const card = document.querySelector(".card");
// const submit = document.querySelector(".submit");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    getWeather(cityInput.value)
    
    cityInput.value="";

})

async function getWeather(city) {
    //console.log(typeof(city));
    // const city = "multan";
    const apiKey = "c82157a45715485b8ca992ce3caa6de7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error("City Not Found")
        }

        const data = await response.json();

        displayWeather(data);
        
    }
    catch(error){
        console.error("Error fetching weather data");
        
    }
}

function displayWeather(data){
    card.style.display = "flex";
    card.textContent="";
    card.innerHTML = `
    <h1 class="city">${data.name}</h1>
    <p class="temp">${Math.floor(data.main.temp - 273.15)}℃</p>
    <p class="humidity">Humidity:${data.main.humidity}%</p>
    <p class="description">${data.weather[0].description}</p>
    `
}