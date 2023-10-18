document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'cbdd76b10e12baeb3858303d3547b471';
    const getWeatherButton = document.getElementById('get-weather');
    const cityInput = document.getElementById('city');
    const temperature = document.getElementById('temperature');
    const windspeed = document.getElementById('windspeed');
    const winddirection = document.getElementById('winddirection');

    getWeatherButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(response => response.json())
                .then(data => {
                    temperature.textContent = `Temperature: ${data.main.temp} °C`;
                    windspeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                    winddirection.textContent = `Wind Direction: ${getWindDirection(data.wind.deg)}`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }
    });

    // Function to convert wind direction in degrees to a human-readable form
    function getWindDirection(degrees) {
        const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
        const index = Math.round((degrees % 360) / 45);
        return directions[index % 8];
    }
});
