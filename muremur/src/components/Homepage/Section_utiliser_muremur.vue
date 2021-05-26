<!-- TEMPLATE -->
<template>
  <section class="section_umm">
    <h1 class="h1-umm">Utiliser Muremur©</h1>
    <p class="texte_umm">
      Choisir ses fruits et légumes, en magasin ? mûr pas mûr ? C’est simple
      comme banane !
    </p>
    <ul class="liste_actions_muremur">
      <li class="li_actions_muremur">
        Selectionnez la catégorie fruit ou légume
      </li>
      <li>Choississez le légume ou fruit que vous voulez tester</li>
      <li>Cliquez sur sa fiche pour avoir toutes les infos</li>
    </ul>
  </section>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Section_utiliser_muremur",
};
</script>

<!-- STYLE -->
<style>
@media only screen and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2)  {
  .section_umm {
    border-radius: 20px;
    margin: 2% 0;
    left: 0;
    right: 0;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;
    background-image: url("~@/assets/images/AOP_fruits_legumes.png");
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 2px 5px rgba(119, 141, 120);
    background-size: 20%;
  }

  .liste_actions_muremur {
    font-family: "Roboto";
    font-size: 20px;
    text-align: left;
  }

  .liste_actions_muremur li {
    margin-bottom: 10px;
    color: #5a7516;
    font-family: "Roboto";
  }

  .h1-umm {
    width: 100%;
    text-align: left;
    font-size: 100px;
    margin: 0% 0 2% 0;
    color: #dfd512;
    font-family: "Paytone";
        line-height: 90%;
  }

  .texte_umm {
    font-family: "Roboto";
    font-size: 14px;
    text-align: left;
    color: #5a7516;
  }
}

/* MOBILE */
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {
  .section_umm {
    border-radius: 10px;
    width: 80%;
    margin: 10% 0;
    left: 0;
    right: 0;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url("~@/assets/images/AOP_fruits_legumes.png");
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 2px 5px rgba(119, 141, 120);
    background-size: 50%;
  }

  .liste_actions_muremur {
    font-family: "Roboto";
    font-size: 12px;
    text-align: left;
  }

  .liste_actions_muremur li {
    margin-bottom: 10px;
    color: #5a7516;
    font-family: "Roboto";
    font-size: 12px;
    text-align: left;
  }

  .h1-umm {
    width: 100%;
    font-size: 30px;
    text-align: left;
    margin: 0% 0 2% 0;
    color: #dfd512;
    font-family: "Paytone";

  }

  .texte_umm {
    font-family: "Roboto";
    font-size: 10px;
    text-align: left;
    color: #5a7516;
  }
}
</style>
