<!-- TEMPLATE -->
<template>
  <section class="section_legume_display">
    <div class="CTA_legume">
      <img src="" alt="" />
      <div v-for="legume in liste_legumes" :key="legume.id">
        <button @click="toggleModale">{{ legume.label }}</button>
      </div>
    <div v-if='revele'>
        <Modale :revele="revele" :toggleModale='toggleModale' />
    </div>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
import Modale from "../Modale.vue";

export default {
  name: "Section_legumes_display",
  data() {
    return {
      revele: false,
    };
  },
  components: {
    Modale,
  },
  computed: {
    ...mapState(["liste_legumes"]),
  },
    methods: {
      toggleModale(){
          this.revele = !this.revele
      }
  },

};
</script>

<!-- STYLE -->
