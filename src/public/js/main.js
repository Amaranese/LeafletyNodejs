var map = L.map('map-template').setView([51.505, -0.09], 3);
const tileURL = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png' 
const tileURL2 = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';
const tile = L.tileLayer(tileURL2);
const socket = io.connect();
const marker = L.marker([50.5, 30.5]); // kiev, ukraine
marker.bindPopup('Hello There!');
map.addLayer(marker);