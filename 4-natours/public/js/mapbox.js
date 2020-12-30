/* eslint-disable */

console.log('Hello from client side.');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoieWtzYSIsImEiOiJja2piNjkzNXYwM3l2MnNuemYxaXpiZW9lIn0.Xjkb5Med5siVW6QaDYY5Gg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/yksa/ckjb7fkg65vx219p1gaxx8fc6',
  scrollZoom: false,
  //   center: [-118.6919205, 34.0201613],
  //   zoom: 10,
  //   interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Create marker
  const div = document.createElement('div');
  div.className = 'marker';

  //   Add Marker
  new mapboxgl.Marker({
    element: div,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extends map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: { top: 200, bottom: 150, left: 100, right: 100 },
});
