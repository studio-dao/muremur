<!-- TEMPLATE -->
<template>
  <router-link class="router_link_title_modale" to="/Fruits" >
  <section class="section_produit_vert">
    <div class="illustration_produit_vert">
     <img class="brocoli_vert" :src="legumes_illustration.brocoli" alt="brocoli" />
      <img class="avocat_vert"  :src="legumes_illustration.avocat" alt="avocat" />
      <img class="aubergine_vert" :src="legumes_illustration.aubergine" alt="aubergine" />
      </div>

    <article class="article_produit_vert">
      <h1 class="h1_produit_vert">Les Légumes</h1>
      <div class="ligne_sous_titre_produit_vert"></div>
      <p class="texte_produit_vert">Toutes les infos pour bien choisir vos légumes</p>
    </article>
  </section>
  </router-link>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
export default {
  name: "Section_les_legumes_vertical",
  computed: {
    ...mapState(["legumes_illustration"]),
  },
};
</script>

<!-- STYLE -->
<style>

@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait){
.section_produit_vert{
  border-radius: 10px;
  margin: 10px 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg,rgba(152,203,101, .5) 30%, rgba(255,235, .5) 80%);
}
.illustration_produit_vert{
  width: 40%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    
}
.brocoli_vert{
  position:relative;
  width: 65%;
  bottom: 0px;
  left: 15%;
      top: 10%;
  z-index: 4;
}
.aubergine_vert{
  position: relative;
  width: 55%;
  bottom: 0px;
  right: 75%;
  top: 10%;
  z-index: 5;
}

.avocat_vert{
  position: relative;
  right:50%;
  width: 20%;
  bottom: 0px;
  top: 10%;
  z-index: 6;
}

.article_produit_vert{
  padding: 5% 0;
  width: 70%;
  text-align: center;
  left: 0;
  right:0;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.h1_produit_vert{
  margin:  5% 0 0 0;
color: #5a7516;
font-family: 'Paytone';
font-size: 1.3em;
letter-spacing: 1px;
}

.ligne_sous_titre_produit_vert{
  background-color: #e9951d;
  width: 62%;
  height: 2px;
}
.texte_produit_vert{
  font-family: 'Roboto';
  color:#778d78;
  font-size: 10px;
}


}
</style>
