import React, { Component } from 'react';

class AntelopeValleyMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const antelopeValleyCoords = [
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

    const mapOptions = {
      center: { lat: 34.7419, lng: -118.1644 }, // Center of Antelope Valley
      zoom: 9,
    };

    const map = new window.google.maps.Map(this.mapRef.current, mapOptions);

    // Create a Polygon to outline Antelope Valley
    const antelopeValleyPolygon = new window.google.maps.Polygon({
      paths: antelopeValleyCoords,
      strokeColor: '#FF0000', // Outline color (red)
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: '#FF0000', // Fill color (red)
      fillOpacity: 0.10,
    });

    antelopeValleyPolygon.setMap(map);
  }

  render() {
    return <div className='lg:h-96' ref={this.mapRef} style={{ opacity: '.9', borderRadius: '20px', width: '100%', height: '390px', marginBottom: '5px', marginTop: '5px', boxShadow: 'black 3px 3px 5px 2px' }}></div>;
  }
}

export default AntelopeValleyMap;
