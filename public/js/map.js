maptilersdk.config.apiKey=MapApiKey;

  const map = new maptilersdk.Map({
    container: 'map', // the ID of your div
    style: maptilersdk.MapStyle.STREETS, // Choose a map style
    center: listing.geometry.coordinates, // starting position [lng, lat] (New Delhi)
    zoom: 10 // starting zoom
  });

  

const marker=new maptilersdk.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({offset: 25}).setHTML(
  `<h6>${listing.location}</h6><p>Exact location</p>`
)
  )
  .addTo(map);
