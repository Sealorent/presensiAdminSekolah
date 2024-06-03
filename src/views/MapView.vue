<template>
  <div class="w-full h-screen">
    <div ref="map" style="height: 100%; width: 100%;"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import * as turf from '@turf/turf';

export default {
  data() {
    return {
      mapboxAccessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN, // Replace this with your Mapbox access token
      center : [112.04807212661497, -7.817955868336021],// Replace with the initial map center coordinates
      zoom: 10, // Replace with the initial map zoom level
      currentLocation: [0, 0],
      distance: 0,
    };
  },
  mounted() {
    mapboxgl.accessToken = this.mapboxAccessToken;
    this.initializeMap();
    this.calculateDistance();
  },
  methods: {
    initializeMap() {
      const map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v11', // Replace with your desired map style
        center: this.center,
        zoom: this.zoom,
      });

    map.on('load', () => {
        this.addCurrentLocation(map);
        this.addCircleLayer(map);
      });
    },
    addCurrentLocation(map) {
      if (navigator.permissions) {
        navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
          if (permissionStatus.state === 'granted') {
            this.getCurrentLocation(map);
          } else if (permissionStatus.state === 'prompt') {
            this.getCurrentLocation(map);
          } else {
            console.error('Geolocation permission denied.');
          }
        });
      } else {
        console.error('Geolocation API not supported by this browser.');
      }
    },
    getCurrentLocation(map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentLocation = [position.coords.longitude, position.coords.latitude];
          new mapboxgl.Marker({ color: 'red' }).setLngLat(this.currentLocation).addTo(map);
        },
        (error) => {
          console.error('Error getting current location:', error);
        },
        {
          enableHighAccuracy: true,
        }
      );
    },
    addCircleLayer(map) {
        new mapboxgl.Marker({color: 'blue'}).setLngLat(this.center).addTo(map);
        // new mapboxgl.Marker().setLngLat(this.currentLocation).addTo(map);
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));
        map.addLayer({
        id: 'circle-layer',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: this.center,
            },
          },
        },
        paint: {
          'circle-radius': 20,
          'circle-color': 'blue',
          'circle-opacity': 0.1,
          'circle-stroke-width': 1,
          // 'border-color': 'blue', // Outline color of the circle
        },
        });
    },
    calculateDistance() {
        const from = turf.point(this.center);
        const to = turf.point(this.currentLocation);
        const options = { units: 'kilometers' };
        this.distance = turf.distance(from, to, options).toFixed(2) / 1000 ?? 0;
        // if(this.distance > 10) {
        //     alert('Anda berada di luar radius dari lokasi yang ditentukan')
        // }
    }
  },
};
</script>
