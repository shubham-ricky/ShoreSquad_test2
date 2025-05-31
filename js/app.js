// ShoreSquad App JS

document.addEventListener('DOMContentLoaded', () => {
  // Join button interaction
  const joinBtn = document.getElementById('join-btn');
  joinBtn.addEventListener('click', () => {
    alert('Thanks for joining a cleanup! Stay tuned for more features.');
  });

  // Placeholder: Load map (to be replaced with real map integration)
  document.getElementById('map-container').innerText = 'Map will appear here.';

  // Placeholder: Load weather (to be replaced with real API)
  document.getElementById('weather-info').innerText = 'Sunny, 28°C (demo)';

  // Placeholder: Load events (to be replaced with real data)
  document.getElementById('event-list').innerHTML = '<li>Beach Cleanup @ Sandy Bay - June 8</li><li>Coastal Walk & Collect - June 15</li>';
});
