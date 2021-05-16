<template>
  <div class="main_fruits">
    <Section_les_fruits_vertical />
    <Section_fruits_display />
  
  </div>
</template>

<!-- SCRIPT -->
<script>
import Section_fruits_display from "../components/Page_fruits/Section_fruits_display.vue"
import Section_les_fruits_vertical from '../components/Homepage/Section_les_fruits_vertical.vue'


export default {
  name: "Fruits",
  components: {
    Section_fruits_display,
    Section_les_fruits_vertical
  },

};
</script>


