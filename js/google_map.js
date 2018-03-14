var google;

function initialize_map() {
    var myLatlng = new google.maps.LatLng(35.8203926131705, 10.5930894613266);
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        center: myLatlng
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var contentString = '';
    var infowindow = new google.maps.InfoWindow({
        content: '<div class="map-content"><ul class="address">' + $('.address').html() + '</ul></div>'
    });
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize_map);