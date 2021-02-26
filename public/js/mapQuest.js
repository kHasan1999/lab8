function initMap() {
	L.mapquest.key = 'Key'

	L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	  });

	  L.map([32.88, -117.236]).addTo(map)
}