function initMap() {
	var uluru = {lat: 49.200726, lng: -122.816573};
	var map = new google.maps.Map(document.getElementById('googlemap'), {
		zoom: 10,
		center: uluru,
		gestureHandling: 'none',
		mapTypeId: 'roadmap',
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ['roadmap', 'terrain', 'satellite']
		}
	});
	var marker = new google.maps.Marker({
		//position: uluru,
		map: map
	});
}