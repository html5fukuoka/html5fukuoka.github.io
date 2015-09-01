function initialize() {
    var latlng = new google.maps.LatLng(33.671432326353795 , 130.44625282287598);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapArea"), myOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: latlng
    });
    
    var infowindow = new google.maps.InfoWindow({
        content: "<p>福岡県福岡市東区松香台２丁目３−１<br>九州産業大学　情報科学部</p>"
    });

    infowindow.open(map,marker);
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}
