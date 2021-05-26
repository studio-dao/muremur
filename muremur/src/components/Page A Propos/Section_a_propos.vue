<template>
<div class="main_apropos">
  <section class="main_a_propos">
    <h1 class="titre_a_propos">À Propos</h1>
    <p class="texte_a_propos">
      Cette application a pour but de faciliter le choix de vos légumes et
      fruits au moment de les acheter. Les infos fournies ne sont pas
      scientifiques, et n’engagent pas leurs auteurs. Les infos que vous
      trouverez ici ont été récoltés auprès de personnes connaissants bien les
      legumes et fruits cités.
    </p>
    <h3 class="muremure_copyright">Muremur©</h3>
  </section>
  </div>
</template>


<style>

  
  .main_apropos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
  }
  
  .main_a_propos {
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
  }

  .texte_a_propos {
        margin: 10% ;
    font-family: "Roboto";
    font-size: 14px;
    text-align: center;
    color: #5a7516;
  }

  .titre_a_propos {
   font-size: 2.5em;
    width: 100%;
    text-align: center;
    margin: 0% 0 2% 0;
    color: #dfd512;
    font-family: "Paytone";
  }

  .muremure_copyright {
    font-family: "Paytone";
    font-size: 20px;
    text-align: center;
    color: #5a7516;
  }

</style>
