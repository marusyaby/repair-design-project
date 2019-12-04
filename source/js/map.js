function initMap() {
  var coordinatesMap = {lat: 47.2448472, lng: 39.7209855},

    coordinatesMarker = {lat: 47.2448472, lng: 39.7209855},

    map = new google.maps.Map(document.getElementById('map'), {
      center: coordinatesMap,
      zoom: 15,
      disableDefaultUI: false,
    });

  var marker = new google.maps.Marker({
    position: coordinatesMarker,
    title: 'Repair Design',
    map: map,
    // animation: google.maps.Animation.BOUNCE,
  });

  marker.setMap(map);

  // function toggleBounce() {
  //   if (marker.getAnimation() !== null) {
  //     marker.setAnimation(null);
  //   } else {
  //     marker.setAnimation(google.maps.Animation.BOUNCE);
  //   }
  // }

  // marker.addListener('click', toggleBounce);
};
