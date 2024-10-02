<template>
     <div class="flex justify-center">
        <div class="flex flex-col w-full md:w-1/3 h-screen">
            <headerMenusComponent :title="'Masuk'"/>
            <div class="flex flex-grow">
                <div ref="map" style="height: 100%; width: 100%;"></div>
            </div>
            <div class="sticky bottom-0 flex flex-col items-center m-2 gap-y-2">
                <div class="flex flex-row items-center justify-center w-full gap-x-2">
                    <p class="text-sm font-mulish">Pilih Lokasi</p>
                    <select class="w-full max-w-xs select select-info" @change="handleSelectChange"  v-model="selectedOption">
                        <option
                            v-for="item in selectComponent.options"
                            :key="item"
                            :value="item"
                            > 
                            {{ item.lokasi }}
                        </option>
                    </select>
                </div>
                <button class="text-white w-96 btn bg-primaryColors text-thin font-mulish" @click="setLocation">KONFIRMASI LOKASI</button>
            </div>
        </div>
    </div>

</template>


<script>

import headerMenusComponent from '@/components/HeaderMenusComponent.vue';
import MainLocalStorage from '@/services/mainLocalStorage.js';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import * as turf from '@turf/turf';

export default {
    name : 'ArrivalView',
    components : {
        headerMenusComponent
    },
    data(){
        return {
            mapboxAccessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN, // Replace this with your Mapbox access token
            center : [MainLocalStorage.getDataUser().data.area[0].longitude, MainLocalStorage.getDataUser().data.area[0].latitude],// Replace with the initial map center coordinates
            zoom: 10, // Replace with the initial map zoom level
            currentLocation: [0, 0],
            distance: 0,
            selectedOption: MainLocalStorage.getDataUser().data.area[0],
            selectComponent : {
                selectedOption: null,
                options: MainLocalStorage.getDataUser().data.area,
            }
        };
    },
    mounted(){
        mapboxgl.accessToken = this.mapboxAccessToken;
        this.initializeMap();
    },
    methods : {
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
            console.log('success');
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
        handleSelectChange() {
            this.center = [this.selectedOption.longitude, this.selectedOption.latitude];
            this.initializeMap();
        },
        setLocation(){
            if(this.selectedOption == null){
                alert('Pilih lokasi terlebih dahulu');
            }else{
                this.calculateDistance();
            }
        },
        calculateDistance() {
            const from = turf.point(this.center);
            const to = turf.point(this.currentLocation);
            const options = { units: 'kilometers' };
            this.distance = turf.distance(from, to, options).toFixed(2);
            var radius  = MainLocalStorage.getDataUser().data.jarak_radius;
            console.log('radius', parseInt(radius, 10));
            console.log('distance', parseInt(this.distance, 10));
            console.log('out of range', parseInt(this.distance, 10) > parseInt(radius, 10));
            // var radius  = MainLocalStorage.getDataUser().data.radius;

            if(parseInt(this.distance, 10) > parseInt(radius, 10) ) {
                this.$alertStore.showAlert('danger', 'Lokasi diluar radius');
            }else{
                MainLocalStorage.setSelectedLocation(this.selectedOption);
                this.$router.push({name: 'arrivalTime'});
            }
        }
    }
}

</script>