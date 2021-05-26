<!-- TEMPLATE -->
<template>
  <section class="section_produit_display">

    <!-- LIST CTA LEGUME -->
      <div class="main_CTA_produit">
        <div class="list_CTA_produit"  v-for="produit in liste_legumes" :key="produit.id">
          <button class="button_produit" data-aos="fade-left" data-aos-duration="1000" @click="toggleModale();addToModale(produit)">
            <img class="picto_produit"  :src='produit.picto' alt="icone fruit" />
            {{ produit.label }}
          </button>
        </div>

      <!-- MODALE -->
      <div  v-if="revele">
        <div class="main_modale" data-aos="zoom-in" data-aos-duration="600">
          <div class="corps_modale" v-for="item in modaleContent" :key="item.id">
            <!-- entête modale -->
            <div class="entete_modale">
             <div class="img_modale"><img class="picto_item" :src="item.picto" alt="icone légume" /></div> 
              <h1 class="modale_label">{{ item.label }}</h1>
            </div>
            <!-- content modale -->
            <p class="title_maturite">Maturité :</p>
            <p class="modale_maturite">{{ item.maturite }}</p>
            <hr />
             <p class="title_conservation" >Conservation :</p>
            <p class="modale_conservation">{{ item.conservation }}</p>
          </div>
          <!-- button modale -->
          <i class="far fa-window-close"  @click="toggleModale();emptyModale();" ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";

export default {
  name: "Section_legumes_display",
  data() {
    return {
      modaleContent: [],
      revele: false,
    };
  },
  computed: {
    ...mapState(["liste_legumes"]),
  },
  methods: {
    // ajouter contenu item à la amodale
    addToModale(produit) {
      this.modaleContent.push({
        id: produit.id,
        picto: produit.picto,
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

<!-- STYLE  identique à celui de la section_fruit_display-->

