<!-- TEMPLATE -->

<template>
<router-link class="router_link_title_modale" to="/Legumes">
  <section class="section_produit section_legume" >
    <div class="illustration_produit" data-aos="zoom-in-up" data-aos-duration="1000">
      <img class="brocoli" :src="legumes_illustration.brocoli" alt="brocoli" />
      <img class="avocat"  :src="legumes_illustration.avocat" alt="avocat" />
      <img class="aubergine" :src="legumes_illustration.aubergine" alt="aubergine" />
    </div>

    <article class="article_produit " data-aos="fade-up"
     data-aos-duration="1000">
      <h1 class="h1_produit titre_legumes ">Les Légumes</h1>
      <div class="ligne_sous_titre_produit  ligne_titre_legume"></div>
      <p class="texte_produit">Toutes les infos pour bien choisir vos légumes</p>
    </article>
  </section>
    </router-link>
</template>

<!-- SCRIPT -->
<script>
import {mapState} from 'vuex'
export default {
  name: "Section_les_legumes",
  computed:{
    ...mapState(['legumes_illustration'])
  }
};
</script>

<!-- STYLE -->
<style>
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {

.section_legume{
padding: 5% 0 0 0;
}

.aubergine{
  position:relative;
  width: 60%;
  height: 60%;
  right: 60%;
  z-index: 4;
}
.brocoli{
  position: relative;
  width: 60%;
  height: 60%;
  left:30%;
  bottom: 0px;
  z-index: 3;
}

.avocat{
  position: relative;
  left: -30%;
  width: 20%;
  height: 20%;
  z-index: 5;
}

.titre_legumes{
  line-height: 36px;
}
.ligne_titre_legume{
  margin-top: 10px;
}

}
</style>
