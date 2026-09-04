const cityInput = document.querySelector(".cityInput");
const form = document.querySelector(".weatherForm");
const submit = document.querySelector(".submit");

submit.addEventListener('click', (e)=>{
    e.preventDefault;
    getWeather(cityInput)
})

console.log(cityInput);
async function getWeather(cityInput) {
    
    const city = "multan";
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
    
}

getWeather()
displayWeather()