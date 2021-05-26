<template>
  <section class="main_fruit_story">
    <div class="photo_citron"></div>
    <p class="txt_intro">
      L’origine géographique du citron se situerait à proximité de
      <strong> la Chine et de l’Inde</strong>, sans doute au Kashmir, il y a
      environ
    </p>
    <p class="date2">1300 av JC</p>
    <!-- chine -->
    <div class="div_section">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="carte_chine"
        src="@/assets/images/illustration_hdc/hdc_carte_chine_inde.png"
        alt="carte_chine"
      />
      <img
        class="fleche_chine"
        src="@/assets/images/illustration_hdc/hdc_fleche_carte_chine.png"
        alt="fleche"
      />
      <div class="art_txt" data-aos="fade-up" data-aos-duration="800">
        <p>
          Il est produit en Asie depuis très longtemps, les premières traces de
          culture, en Chine, datent de <strong>2500 ans</strong>. Quittant sa
          région originelle, il voyage sur la route de la soie jusqu’au
          Moyen-Orient.
        </p>
      </div>
    </div>
    <!-- citronier -->
    <div class="div_section div_citronier">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="carte_chine"
        src="@/assets/images/illustration_hdc/hdc_citronier_prisonier.png"
        alt="citronier_prisonier"
      />
      <img
        class="fleche_citronier"
        src="@/assets/images/illustration_hdc/hdc_fleche_citroniers.png"
        alt="fleche"
      />
      <div class="art_txt" data-aos="fade-up" data-aos-duration="800">
        <p>
          Les Hébreux le découvrent alors et le plantent durant la captivité de
          Babylone. Il deviendra et restera l’une des quatre espèces végétales
          brandies lors de la fête de <strong> Soukkot </strong>, fête en
          mémoire de la captivité. Il est d’ailleurs, pour les Hébreux, le
          symbole de la
          <strong>perfection et de la beauté.</strong>
        </p>
      </div>
    </div>
    <!-- empereur -->
    <div class="div_section">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="portrait_empereur"
        src="@/assets/images/illustration_hdc/hdc_portrait_empereur.png"
        alt="empereur"
      />
      <img
        class="fleche_empereur"
        src="@/assets/images/illustration_hdc/hdc_fleche_empereur.png"
        alt="fleche"
      />

      <div class="art_txt" data-aos="fade-up" data-aos-duration="800">
        <p class="date2">Du 1er au 3ème siècle</p>
        <p>
          le citron est connu des Grecs, des Romains et des Arabes. Il est
          utilisé à cette époque uniquement pour ses
          <strong>vertus thérapeutiques</strong>. On le retrouve dans les écrits
          de Pline l’Ancien, célèbre botaniste romain, il est également prescrit
          par les médecins comme <strong>Athénée de Naucratis</strong>.
          D’ailleurs l’empereur <strong>Néron</strong>, craignant d’être
          empoisonné, en consommait très régulièrement.
        </p>
      </div>
    </div>
    <!-- seringue -->
    <div class="div_section div_empereur">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="seringue"
        src="@/assets/images/illustration_hdc/hdc_seringue.png"
        alt="seringue"
      />
      <img
        class="fleche_empereur"
        src="@/assets/images/illustration_hdc/hdc_fleche_empereur.png"
        alt="fleche"
      />

      <div class="art_txt" data-aos="fade-up" data-aos-duration="800">
        <p>
          Les Arabes répandirent le précieux fruit en Tunisie, en Espagne et en
          Provence. <strong>Au 10° siècle</strong>, Avicenne, grand médecin et
          philosophe perse, prescrit le citron pour lutter contre la fièvre et
          comme <strong>antipoison et antivenin</strong>.
        </p>
      </div>
    </div>
    <!-- serpent -->
    <div class="div_section">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="serpent"
        src="@/assets/images/illustration_hdc/hdc_serpent.png"
        alt="seringue"
      />
      <img
        class="fleche_serpent1"
        src="@/assets/images/illustration_hdc/hdc_fleche_serpent1.png"
        alt="fleche"
      />
      <div class="art_txt" data-aos="fade-up" data-aos-duration="800">
        <p class="date2">Du 1er au 3ème siècle</p>
        <p>
          Les Arabes répandirent le précieux fruit en Tunisie, en Espagne et en
          Provence. <strong>Au 10° siècle</strong>, Avicenne, grand médecin et
          philosophe perse, prescrit le citron pour lutter contre la fièvre et
          comme <strong>antipoison et antivenin</strong>.
        </p>
      </div>
    </div>
    <!-- caravelle -->
    <div class="div_section div_caravelle">
      <img
        data-aos="zoom-in-up"
        data-aos-duration="800"
        class="caravelle"
        src="@/assets/images/illustration_hdc/hdc_caravelle.png"
        alt="caravelle"
      />

      <div class="art_txt" data-aos="fade-up" data-aos-duration="800">
        <p>
          il continuera ensuite à voyager avec
          <strong>Christophe Colomb</strong> (comme de nombreux autres produits)
          pour atteindre <strong>Haïti et la République Dominicaine</strong> en
        </p>
        <p class="date2">1493</p>
        <p>
          À la même époque, les portugais commencent la culture de l’agrume au
          <strong>Brésil</strong>. Il finit sa conquête du monde par la Floride
          au <strong>16° siècle</strong>, état américain qui reste un grand
          producteur de citron.
        </p>
      </div>
    </div>
  </section>
</template>

<!-- SCRIPT-->
<script>
export default {
  name: "Section_histoire_citron",
};
</script>

<!-- STYLE -->
<style>
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
  /* global */
  .main_fruit_story {
    padding: 10px;
    margin-bottom: 20px;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .main_fruit_story p {
    margin: 10px;
    text-align: center;
    font-family: "Roboto";
    color: #5a7516;
    font-size: 30px;
  }

  /* entete citron */
  .photo_citron {
    width: 100%;
    height: 200px;
    left: 0;
    right: 0;
    margin-bottom: 10px;
    background: url("~@/assets/images/photos/photo_citron.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .citron_titre {
    margin: 0;
    font-family: "Paytone";
    color: #efeeee;
    font-size: 3em;
  }
  .texte_intro {
    font-family: "Roboto";
    font-size: 14px;
    margin: 30% 0 !important;
    color: #efeeee !important;
  }

  .date {
    position: relative;
    line-height: 30px;
    left: 60px;
    top: -20px;
    margin: 20px 10px !important ;
    text-align: center !important;
    font-family: "Paytone" !important;
    color: #dfd512 !important;
    font-size: 4em !important;
  }

  /* section chine */
  .div_section {
    margin: 30px 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .carte_chine {
    width: 80%;
  }
  .art_txt {
    position: relative;
    padding: 30px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .fleche_chine {
  display: none;
  }
  /* section-citronier */
  .div_citronier{
    display: flex;
    flex-direction: row-reverse;
  }
  .fleche_citronier {
  display: none;
  }
  /* empereur */
  .div_empereur{
    display: flex;
    flex-direction: row-reverse;
  }
  .portrait_empereur {
    width: 70%;
  }
  .fleche_empereur {
  display: none;
  }
  .date2 {
    margin: 20px 10px !important ;
    line-height: 50px !important ;
    text-align: center !important;
    font-family: "Paytone" !important;
    color: #dfd512 !important;
    font-size: 4em !important;
  }
  /* seringue */
  .seringue {
    width: 65%;
  }
  /* serpent */
  .serpent {
    width: 80%;
  }
  .fleche_serpent1 {
  display: none;
  }
  /* caravelle */
  .div_caravelle{
    display: flex;
    flex-direction: row-reverse;
  }
  .caravelle {
    width: 80%;
  }
}

@media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
  /* global */
  .main_fruit_story {
    padding: 10px;
    margin-bottom: 20px;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .main_fruit_story p {
    margin: 10px;
    text-align: center;
    font-family: "Roboto";
    color: #5a7516;
    font-size: 14px;
  }

  /* entete citron */
  .photo_citron {
    width: 100%;
    height: 200px;
    left: 0;
    right: 0;
    margin-bottom: 10px;
    background: url("~@/assets/images/photos/photo_citron.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .citron_titre {
    margin: 0;
    font-family: "Paytone";
    color: #efeeee;
    font-size: 3em;
  }
  .texte_intro {
    font-family: "Roboto";
    font-size: 14px;
    margin: 30% 0 !important;
    color: #efeeee !important;
  }

  .date {
    position: relative;
    line-height: 30px;
    left: 60px;
    top: -20px;
    margin: 0 0 10px 0;
    text-align: center !important;
    font-family: "Paytone" !important;
    color: #dfd512 !important;
    font-size: 2em !important;
  }

  /* section chine */
  .div_section {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .carte_chine {
    width: 80%;
  }
  .art_txt {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .fleche_chine {
    display: none;
  }
  /* section-citronier */
  .fleche_citronier {
    display: none;
  }
  /* empereur */
  .portrait_empereur {
    width: 70%;
  }
  .fleche_empereur {
    display: none;
  }
  .date2 {
    margin: 0 0 10px 0;
    line-height: 30px;
    text-align: center !important;
    font-family: "Paytone" !important;
    color: #dfd512 !important;
    font-size: 2em !important;
  }
  /* seringue */
  .seringue {
    width: 65%;
  }
  /* serpent */
  .serpent {
    width: 80%;
  }
  .fleche_serpent1 {
    display: none;
  }
  /* caravelle */
  .caravelle {
    width: 80%;
  }
}
</style>
