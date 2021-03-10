<template>
  <section class="container">
    <div class="about sub-container">
      <h1>About us</h1>
      <GmapMap
        ref="mapRef"
        :center="{ lat: 32.0853, lng: 34.781769 }"
        :zoom="mapZoom"
        map-type-id="terrain"
        class="my-google-map"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center = m.position"
        />
      </GmapMap>
      <div class="shop-branchers-container flex">
        <h3>Our Branchers</h3>
        <ul>
          <li @click="panTo(markers[0])">Tel Aviv</li>
          <li @click="panTo(markers[1])">Ariel</li>
          <li @click="panTo(markers[2])">Eilat</li>
          <li @click="panTo(markers[3])">Heifa</li>
        </ul>
      </div>
      <small>Build By Aviv Zohar, Fullstack developer, &copy; 2021</small>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mapZoom: 6,
      markers: [
        { position: { lat: 32.0853, lng: 34.781769 } },
        { position: { lat: 32.105952, lng: 35.185114 } },
        { position: { lat: 29.557669, lng: 34.951923 } },
        { position: { lat: 32.807765, lng: 34.998043 } },
      ],
    };
  },
  methods: {
    panTo(loc) {
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({ lat: loc.position.lat, lng: loc.position.lng});
      });
      this.mapZoom = 12;
    }
  },
};
</script>