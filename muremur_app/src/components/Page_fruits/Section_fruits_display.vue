<!-- TEMPLATE -->
<template>
  <section class="section_fruits_display">

    <!-- LIST CTA LEGUME -->
      <div class="main_CTA_produit">
        <div class="list_CTA_produit"  v-for="produit in liste_fruits" :key="produit.id">
          <button class="button_produit" @click="toggleModale();addToModale(produit)">
            <img src="#" alt="icone fruit" />
            {{ produit.label }}
          </button>
        </div>

      <!-- MODALE -->
      <div v-if="revele">
        <div class="main_modale">
          <div class="corps_modale" v-for="item in modaleContent" :key="item.id">
            <!-- entête modale -->
            <div class="entete_modale">
            <img src="" alt="" />
            <h1 class="modale_label">{{ item.label }}</h1>
            </div>
            <!-- content modale -->
            <p class="modale_maturite">{{ item.maturite }}</p>
            <hr />
            <p class="modale.conservation">{{ item.conservation }}</p>
          </div>
          <!-- button modale -->
          <button class="bouton_close_modale" @click="toggleModale();emptyModale();">x</button>
          </div>
        </div>
      </div>
  </section>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";

export default {
  name: "Section_fruits_display",
  data() {
    return {
      modaleContent: [],
      revele: false,
    };
  },
  computed: {
    ...mapState(["liste_fruits"]),
  },
  methods: {
    // ajouter contenu item à la amodale
    addToModale(produit) {
      this.modaleContent.push({
        id: produit.id,
        label: produit.label,
        maturite: produit.maturite,
        conservation: produit.conservation,
      });
      return this.modaleContent;
    },
    // vider la modale après le click
    emptyModale() {
      this.modaleContent.splice(0);
    },
    // afficher la modale   
    toggleModale() {
      this.revele = !this.revele;
    },
  },
};
</script>

<!-- STYLE -->
