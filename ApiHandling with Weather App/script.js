document.addEventListener('DOMContentLoaded', () => {
    const weatherInput = document.getElementById("weatherInput");
    const showWeatherButton = document.getElementById("showWeatherButton");
    const weatherDataContainer = document.getElementById("weatherData");


    const API_KEY = "94f71d712bffbd8fb4dfd240dca92efb";

    showWeatherButton.addEventListener('click', async () => {
        const InputCity = weatherInput.value.trim();
        if (!InputCity) {
            return;
        }

        try {
            const weatherData = await fetchWeather(InputCity)
            showWeather(weatherData);
        } catch (error) {
            showError(error);
        }

        weatherInput.value = ""

    })


    async function fetchWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message); // This will go to catch block
        }

        return data;
    }

    function showWeather(weatherData) {

        weatherDataContainer.innerHTML = ""; // clear pehle wala
        console.log(weatherData);
        const { name, main, wind, weather } = weatherData;



        const cityName = document.createElement('h2');
        cityName.textContent = `City : ${name}`;
        cityName.className = "text-xl font-bold text-blue-800";
        weatherDataContainer.append(cityName);

        const temprature = document.createElement('h2');
        temprature.textContent = `Temprature : ${main.temp}`;
        temprature.className = "text-xl font-bold text-blue-800";
        weatherDataContainer.append(temprature);


        const windSpeed = document.createElement('h2');
        windSpeed.textContent = `Wind Speed : ${wind.speed}`;
        windSpeed.className = "text-xl font-bold text-blue-800";
        weatherDataContainer.append(windSpeed);


        const description = document.createElement('h2');
        description.textContent = `Description : ${weather[0].description}`;
        description.className = "text-xl font-bold text-blue-800";
        weatherDataContainer.append(description);



    }
    function showError(error) {
        weatherDataContainer.innerHTML = ""; // 
        const newErrorTag = document.createElement('p');
        newErrorTag.textContent = `❌ Error: ${error.message}`;
        newErrorTag.className = "text-red-600 font-semibold";
        weatherDataContainer.append(newErrorTag);
    }
})