function initMap() {
        if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(function (position) {
                lat_n = position.coords.latitude;
                lng_n = position.coords.longitude;
                map = new google.maps.Map(document.getElementById('map'), {
                  center: {lat: lat_n, lng: lng_n},
                  zoom: 15
                });
            }
        }       
}
