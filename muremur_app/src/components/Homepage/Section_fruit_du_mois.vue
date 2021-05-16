<!-- TEMPLATE -->
<template>
  <section class="section_fdm">
    <article class="article_fdm" >
      <h3 class="chapeau" data-aos="fade-left">Le fruit de la semaine</h3>
      <h1 class="h1-fdm" data-aos="fade-left">Le citron</h1>
      <p class="texte_fdm" data-aos="fade-left">
        Découvrez l'histoire étonnante d'un grand voyageur qui a revolutionné le
        goût en Europe...
      </p>
      <button class="button_fdm" data-aos="fade-left">SON HISTOIRE<i class="fas fa-caret-right fa-lg"></i></button>
    </article>
  </section>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Section_fruit_du_mois",
};
</script>

<!-- STYLE -->
<style>

@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)  {

  .section_fdm {
    left: 0;
    right: 0;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    background: linear-gradient(rgba(168, 168, 169, .4), rgba(168, 168, 169, .4)), url("~@/assets/images/photos/photo_citron.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .chapeau {
    margin: 0 0 15% 0;
    font-family: "Paytone";
    color: #5a7516;
    text-decoration: underline;
  }

  .h1-fdm {
    margin: 0;
    font-family: "Paytone";
    color: #efeeee;
    font-size: 3em;
  }
  .texte_fdm{
    font-family:'Roboto';
    font-size: 14px;
    margin: 0 0 10% 0;
    color: #efeeee;
  }

  .button_fdm{
    margin: 0 0 10% 0;
    padding:0 0 0 5%;
    font-family: 'Roboto';
    font-weight: 400;
    letter-spacing: 1px;
    text-align: left;
    color: #5a7516;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    background: linear-gradient(90deg,rgba(152,203,101, .5) 30%, rgba(255,235, .5) 80%);
  }
.fas{
  margin-left: 70px;
}
}
</style>
