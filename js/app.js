// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Join button interaction
  const joinBtn = document.getElementById('join-btn');
  joinBtn.addEventListener('click', () => {
    alert('Thanks for joining a cleanup! Stay tuned for more features.');
  });

  // Remove placeholder map text if iframe is present
  const mapContainer = document.getElementById('map-container');
  if (mapContainer && mapContainer.querySelector('iframe')) {
    // Do nothing, iframe is present
  } else if (mapContainer) {
    mapContainer.innerText = 'Map will appear here.';
  }

  // Fetch and display 4-day weather forecast from NEA API
  async function loadWeatherForecast() {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerText = 'Loading weather forecast...';
    try {
      const resp = await fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast');
      const data = await resp.json();
      if (data && data.items && data.items.length > 0) {
        const forecasts = data.items[0].forecasts;
        let html = '<div class="forecast-grid">';
        forecasts.forEach(day => {
          html += `<div class="forecast-day">
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-desc">${day.forecast}</div>
            <div class="forecast-temp">${day.temperature.low}&ndash;${day.temperature.high}&deg;C</div>
          </div>`;
        });
        html += '</div>';
        weatherInfo.innerHTML = html;
      } else {
        weatherInfo.innerText = 'Weather forecast unavailable.';
      }
    } catch (e) {
      weatherInfo.innerText = 'Failed to load weather forecast.';
    }
  }
  loadWeatherForecast();

  // Placeholder: Load events (to be replaced with real data)
  document.getElementById('event-list').innerHTML = '<li>Beach Cleanup @ Sandy Bay - June 8</li><li>Coastal Walk & Collect - June 15</li>';
});
