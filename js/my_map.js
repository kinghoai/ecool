var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(-33.91722, 151.23064),
    zoom: 16
  });

  var iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
  // "/images/map-icon-08.png";
  var icons = {
    small: {
      icon: "/images/gg-map-icon-small.png",
    },
    large: {
      icon: "/images/gg-map-icon-large.png"
    }
  };

  var features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.2263),
      type: "small",
    },
    {
      position: new google.maps.LatLng(-33.91747, 151.22912),
      type: 'small'
    }, {
      position: new google.maps.LatLng(-33.91910, 151.22907),
      type: 'small'
    }, {
      position: new google.maps.LatLng(-33.91725, 151.23011),
      type: 'small'
    }, {
      position: new google.maps.LatLng(-33.91872, 151.23089),
      type: 'small'
    }, {
      position: new google.maps.LatLng(-33.91784, 151.23094),
      type: 'small'
    },
    {
      position: new google.maps.LatLng(-33.91539, 151.22820),
      type: "large",
    }
  ];

  for (var i = 0; i < features.length; i++) {
    new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  }
}
