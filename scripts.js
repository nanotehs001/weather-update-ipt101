
document.addEventListener('DOMContentLoaded', async function() {
   const apiKey = 'cc68bd4d6b26495ba2d60337241208';
   const cityName = 'Iligan City Lanao Del norte';
   const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=3`;


   try {
       const response = await fetch(apiEndpoint); // Wait for the fetch to complete
       const weatherData = await response.json(); // Wait for the response to be parsed into JSON
       console.log(weatherData);
       const weatherContainer = document.getElementById('weather');
       const temperatureInCelsius = weatherData.current.temp_c;

       const weatherDescription = weatherData.current.condition.text;
       const humidityLevel = weatherData.current.humidity;

        // console.log(weatherData)

        weatherData.forecast.forecastday.forEach(element => {
            console.log(element)
            weatherContainer.innerHTML += `
            <div class="weather-data">
            <p><strong>Date:</strong> ${element.date}</p>
             <p><img src="https:${element.day.condition.icon}"></p>
           <p><strong>Temperature:</strong> ${element.day.avgtemp_c}°C</p>
           <p><strong>Weather:</strong> ${element.day.condition.text}</p>
           <p><strong>Humidity:</strong> ${element.day.avghumidity}%</p>
           </div>
       `;
        });

   } catch (error) {
       const weatherContainer = document.getElementById('weather');
       weatherContainer.innerHTML = `<p>Unable to retrieve weather data: ${error.message}</p>`;
   }
});