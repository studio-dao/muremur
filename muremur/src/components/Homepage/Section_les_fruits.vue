<!-- TEMPLATE -->
<template>
  <router-link class="router_link_title_modale" to="/Fruits" >
  <section class="section_produit" >
    <div class="illustration_produit" data-aos="zoom-in-up"  data-aos-duration="1000">
      <img class="ananas"  :src="fruits_illustration.ananas" alt="ananas" />
      <img class="poire" :src="fruits_illustration.poire" alt="poire" />
      <img class="pasteque" :src="fruits_illustration.pasteque" alt="pasteque" />
      </div>

    <article class="article_produit"  data-aos="fade-up"
     data-aos-duration="1000">
      <h1 class="h1_produit" >Les Fruits</h1>
      <div class="ligne_sous_titre_produit" ></div>
      <p class="texte_produit" >Toutes les infos pour bien choisir vos fruits</p>
    </article>
  </section>
  </router-link>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
export default {
  name: "Section_les_fruits",
  computed: {
    ...mapState(["fruits_illustration"]),
  },
};
</script>

<!-- STYLE -->
<style>

@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {
.section_produit{
  border-radius: 10px;
  margin-bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg,rgba(152,203,101, .5) 30%, rgba(255,235, .5) 80%);
}
.illustration_produit{
    display: flex;
    flex-direction: row;
    align-items: baseline;
    
}
.ananas{
  position:relative;
   width: 40%;
  height: 40%;
  bottom: 0px;
  left:20%;
  z-index: 1;
}
.pasteque{
  position: relative;
  width: 50%;
  height: 50%;
  bottom: 0px;
  right:30%;
  z-index: 2;
}

.poire{
  position: relative;
  width: 20%;
  height: 20%;

  bottom: 0px;
  z-index: 3;
}

.article_produit{
  padding: 10%;
  text-align: center;
  height: 50%;
  left: 0;
  right:0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h1_produit{
  margin:  5% 0 0 0;
color: #5a7516;
font-family: 'Paytone';
font-size: 2.5em;
}

.ligne_sous_titre_produit{
  background-color: #e9951d;
  width: 210px;
  height: 5px;
}
.texte_produit{
  font-family: 'Roboto';
  color:#778d78;
  font-size: 14px;
}

}
</style>
