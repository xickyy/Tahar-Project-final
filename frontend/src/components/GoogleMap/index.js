import React from "react";

class AntelopeValleyMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
    this.polygon = null;
  }

  componentDidMount() {
    // Wait for Google Maps API
    if (window.google && window.google.maps) {
      this.initMap();
    } else {
      // If the script loads later, try again shortly
      this.retry = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(this.retry);
          this.initMap();
        }
      }, 200);
    }
  }

  componentWillUnmount() {
    if (this.retry) clearInterval(this.retry);
    if (this.polygon) this.polygon.setMap(null);
    this.polygon = null;
    this.map = null;
  }

  initMap() {
    const gmaps = window.google.maps;

    // Center roughly on Lancaster/Palmdale
    const center = { lat: 34.76, lng: -118.14 };

    this.map = new gmaps.Map(this.mapRef.current, {
      center,
      zoom: 9,
      mapTypeControl: true,
      streetViewControl: false,
      fullscreenControl: true,
    });

    // Example polygon path (replace with your exact service-area path if you have one)
    const polygonPath = [
      { lat: 35.06982, lng: -118.24183 }, // Mojave-left
      { lat: 34.90070, lng: -118.23801 }, // willow springs-right
      { lat: 34.87145, lng: -118.44278 }, // willow springs-left
      { lat: 34.46506, lng: -118.70922 }, // left of Santa Clarita
      { lat: 34.32317, lng: -118.57040 }, // under santa Clarita
      { lat: 34.49343, lng: -118.00034 }, // Littlerock
      { lat: 34.48970, lng: -117.80379 }, // wrightwood
      // { lat: 34.38295, lng: -117.13070 }, // bottom right of hesperia
      // { lat: 34.63187, lng: -117.13678 }, // top right of victorville
      { lat: 34.64308, lng: -117.67246 }, // right of lake la
      { lat: 34.78644, lng: -117.73137 }, // top right of high vista
      { lat: 35.16004, lng: -117.86494 }, // right of california city
      { lat: 35.14396, lng: -118.19615 } // left of california city
    ];

    this.polygon = new gmaps.Polygon({
      paths: polygonPath,
      strokeColor: "#2563eb",      // blue-600
      strokeOpacity: 0.9,
      strokeWeight: 2,
      fillColor: "#3b82f6",        // blue-500
      fillOpacity: 0.08,
    });
    this.polygon.setMap(this.map);

    // Ensure map renders correctly after layout
    window.setTimeout(() => gmaps.event.trigger(this.map, "resize"), 0);
  }

  render() {
    return (
      <div
        ref={this.mapRef}
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl border border-blue-100"
        style={{ width: "100%" }}
      />
    );
  }
}

export default AntelopeValleyMap;
