<template>
  <div class="main_legumes">
    <Section_les_legumes_vertical/>
    <Section_legumes_display/>
  </div>
</template>

<!-- SCRIPT -->
<script>
import Section_legumes_display from "../components/Page_legumes/Section_legumes_display.vue";
import Section_les_legumes_vertical from '../components/Homepage/Section_les_legumes_vertical.vue'

export default {
  name: "Legumes",
  components: {
    Section_legumes_display,
    Section_les_legumes_vertical
  },

};
</script>

