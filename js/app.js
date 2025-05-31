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

  // Placeholder: Load weather (to be replaced with real API)
  document.getElementById('weather-info').innerText = 'Sunny, 28°C (demo)';

  // Placeholder: Load events (to be replaced with real data)
  document.getElementById('event-list').innerHTML = '<li>Beach Cleanup @ Sandy Bay - June 8</li><li>Coastal Walk & Collect - June 15</li>';
});
