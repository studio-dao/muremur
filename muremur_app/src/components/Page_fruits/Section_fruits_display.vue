<!-- TEMPLATE -->
<template>
  <section class="section_fruits_display">
    <div class="CTA_fruit">
      <img src="" alt="" />
      <div v-for="fruit in liste_fruits" :key="fruit.id">
        <button @click="toggleModale">{{ fruit.label }}</button>
      </div>
    </div>
    <div v-if='revele'>
        <Modale :revele="revele" :toggleModale='toggleModale' />
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
import Modale from "../Modale.vue";
export default {
  name: "Section_fruits_display",
  components: {
    Modale,
  },
  data() {
    return {
      revele: false,
    };
  },
  computed: {
    ...mapState(["liste_fruits"]),
  },
  methods: {
      toggleModale(){
          this.revele = !this.revele
      }
  },
};
</script>

<!-- STYLE -->
