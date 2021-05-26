<!-- TEMPLATE -->
<template>
  <section class="section_fruits_display">
   
    <!-- LIST CTA LEGUME -->
    <div class="main_CTA_produit">
      <div class="main_list_CTA_produit"  v-for="produit in liste_fruits" :key="produit.id" >
        <button class="button_produit" data-aos="fade-left" data-aos-duration="1000" @click="toggleModale();addToModale(produit);" >
          <img class="picto_produit"  :src="produit.picto" alt="icone fruit" />
          {{ produit.label }}
        </button>
      </div>

      <!-- MODALE -->

      <div  v-if="revele">
        <div class="main_modale" data-aos="zoom-in" data-aos-duration="600">
          <div class="corps_modale" v-for="item in modaleContent" :key="item.id">
            <!-- entête modale -->
            <div class="entete_modale">
             <div class="img_modale"><img class="picto_item" :src="item.picto" alt="icone fruit" /></div> 
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
    // ajouter contenu item à la modale
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

<!-- STYLE -->
<style>
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {

.main_CTA_produit {
  padding: 10px 0;
  border-radius: 10px;
  margin-bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  column-count: 2;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(152, 203, 101, 0.5) 30%,
    rgba(255, 235, 0.5) 80%
  );
}

.button_produit {
  width:400px;
  padding: 7px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    column-count: 2;
  background-color: rgba(255,255,255, .8) ;
  border: none;
  font-family: 'Paytone';
  font-size: 1.5em;
  color: #dfd512;
}

.button_produit :hover {
   box-shadow: 2px 2px 5px rgba(95, 92, 92, 0.3);
}

.picto_produit {
  width: 30px;
}

/* MODALE STYLE */

.fond_modale{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom: 0;
  z-index: 9;
  background-color: rgb(197, 194, 194, .5);
}
.main_modale{
  position: absolute;
  padding: 5%;
  border-radius: 10px;
  top:85%;
  right: 10%;
  left: 10%;
  z-index: 10;
  background-color: white;
}
.modale_label{
  width:50%;
  font-family: 'Paytone';
  color: #5a7516; 
}

.entete_modale{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.img_modale{
  width:30%;
    margin-right: 20px;
}

.title_maturite{
  font-family: 'Paytone';
  font-size:.7em;
 color: #5a7516; 
  margin: 0px;
}

.title_conservation{
  font-family: 'Paytone';
  font-size:.7em;
  color: #5a7516; 
  margin: 0px;
}

.modale_maturite, .modale_conservation{
  font-family: 'Roboto';
  font-size: 14px;
  color: rgb(167, 164, 164);
  line-height: 17px;
}

.far{
  position: relative;
  left: 85%;
  color: #5a7516;
  font-size: 200%;
}
}

@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {

.main_CTA_produit {
  padding: 10px 0;
  border-radius: 10px;
  margin-bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(152, 203, 101, 0.5) 30%,
    rgba(255, 235, 0.5) 80%
  );
}

.button_produit {
  width:200px;
  padding: 7px;
  margin: 10px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255,255,255, .8) ;
  border: none;
  font-family: 'Paytone';
  font-size: 1.5em;
  color: #dfd512;
}

.button_produit :hover {
   box-shadow: 2px 2px 5px rgba(95, 92, 92, 0.3);
}

.picto_produit {
  width: 30px;
}

/* MODALE STYLE */

.fond_modale{
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom: 0;
  z-index: 9;
  background-color: rgb(197, 194, 194, .5);
}
.main_modale{
  position: absolute;
  padding: 5%;
  border-radius: 10px;
  top:85%;
  right: 10%;
  left: 10%;
  z-index: 10;
  background-color: white;
}
.modale_label{
  width:50%;
  font-family: 'Paytone';
  color: #5a7516; 
}

.entete_modale{
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.img_modale{
  width:30%;
    margin-right: 20px;
}

.title_maturite{
  font-family: 'Paytone';
  font-size:.7em;
 color: #5a7516; 
  margin: 0px;
}

.title_conservation{
  font-family: 'Paytone';
  font-size:.7em;
  color: #5a7516; 
  margin: 0px;
}

.modale_maturite, .modale_conservation{
  font-family: 'Roboto';
  font-size: 14px;
  color: rgb(167, 164, 164);
  line-height: 17px;
}

.far{
  position: relative;
  left: 85%;
  color: #5a7516;
  font-size: 200%;
}
}
</style>
