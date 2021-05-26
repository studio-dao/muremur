<!-- TEMPLATE -->
<template>
  <router-link class="router_link_title_modale" to="/Fruits">
    <section class="section_produit_vert" >
      <div class="illustration_produit_vert" data-aos="zoom-in"  data-aos-duration="1000">
        <img
          class="ananas_vert"
          :src="fruits_illustration.ananas"
          alt="ananas"
        />
        <img class="poire_vert" :src="fruits_illustration.poire" alt="poire" />
        <img
          class="pasteque_vert"
          :src="fruits_illustration.pasteque"
          alt="pasteque"
        />
      </div>

      <article class="article_produit_vert">
        <h1 class="h1_produit_vert">Les Fruits</h1>
        <div class="ligne_sous_titre_produit_vert"></div>
        <p class="texte_produit_vert">
          Toutes les infos pour bien choisir vos fruits
        </p>
      </article>
    </section>
  </router-link>
</template>

<!-- SCRIPT -->
<script>
import { mapState } from "vuex";
export default {
  name: "Section_les_fruits_vertical",
  computed: {
    ...mapState(["fruits_illustration"]),
  },
};
</script>

<!-- STYLE -->
<style>
@media only screen and (min-device-width:568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {


  .ananas_vert {
    position: relative;
    width: 30%;
    bottom: 0px;
    left: 10%;
    z-index: 1;
  }
  .pasteque_vert {
    position: relative;
    width: 40%;
    bottom: 0px;
    right: 15%;
    z-index: 2;
  }

  .poire_vert {
    position: relative;
    width: 20%;
    bottom: 0px;
    z-index: 3;
  }


}

@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  .section_produit_vert {
    left: 0;
    right: 0;
    border-radius: 10px;
    margin: 10px 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    background: linear-gradient(
      180deg,
      rgba(152, 203, 101, 0.5) 30%,
      rgba(255, 235, 0.5) 80%
    );
  }

  .illustration_produit_vert {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .ananas_vert {
    position: relative;
    width: 30%;
    bottom: 0px;
    left: 10%;
    z-index: 1;
  }
  .pasteque_vert {
    position: relative;
    width: 40%;
    bottom: 0px;
    right: 15%;
    z-index: 2;
  }

  .poire_vert {
    position: relative;
    width: 20%;
    bottom: 0px;
    z-index: 3;
  }

  .article_produit_vert {
    padding: 5% 0;
    width: 50%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .h1_produit_vert {
    margin: 5% 0 0 0;
    color: #5a7516;
    font-family: "Paytone";
    font-size: 1.3em;
    letter-spacing: 1px;
  }

  .ligne_sous_titre_produit_vert {
    background-color: #e9951d;
    width: 62%;
    height: 2px;
  }
  .texte_produit_vert {
    font-family: "Roboto";
    color: #778d78;
    font-size: 10px;
  }
}
</style>
