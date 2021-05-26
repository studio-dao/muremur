<!-- TEMPLATE -->
<template>
  <section class="section_fdm">
    <article class="article_fdm">
      <h3 class="chapeau" data-aos="fade-left">Le fruit du mois</h3>
      <h1 class="h1-fdm" data-aos="fade-left">Le Citron</h1>
      <p class="texte_fdm" data-aos="fade-left">
        Découvrez l'histoire étonnante d'un grand voyageur qui a revolutionné le
        goût en Europe...
      </p>
      <router-link class="router_link_title_modale" to="/Histoire">
        <button class="button_fdm" data-aos="fade-left">
          SON HISTOIRE<i class="fas fa-caret-right fa-lg"></i></button
      ></router-link>
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
@media only screen and (min-device-width: 568px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2)  {
  .section_fdm {
    left: 0;
    right: 0;
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
    background: linear-gradient(
        rgba(168, 168, 169, 0.4),
        rgba(168, 168, 169, 0.4)
      ),
      url("~@/assets/images/photos/photo_citron.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
  }
  .chapeau {
    font-family: "Paytone";
    color: #5a7516;
    text-decoration: underline;
  }

  .h1-fdm {
    margin: 0;
    font-family: "Paytone";
    color: #efeeee;
    font-size: 5em;
    letter-spacing: 5px;
  }
  .texte_fdm {
    font-family: "Roboto";
    font-size: 20px;
    margin: 0 0 5% 0;
    color: #efeeee;
  }

  .router_link_title_modale{
    text-decoration: none;
  }

  .button_fdm {
    text-decoration: none;
    margin: 0px;
    width: 500px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 5%;
    font-family: "Roboto";
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 1px;
    text-align: left;
    color: #5a7516;
    border: none;
    border-radius: 5px;
    background: linear-gradient(
      90deg,
      rgba(152, 203, 101, 0.5) 30%,
      rgba(255, 235, 0.5) 80%
    );
  }
  .fas {
    margin-left: 70px;
    margin-right: 10px;
  }
}

/* RESPONSIVE MOBILE */
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
    background: linear-gradient(
        rgba(168, 168, 169, 0.4),
        rgba(168, 168, 169, 0.4)
      ),
      url("~@/assets/images/photos/photo_citron.jpg");
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
    letter-spacing: 2px;
  }
  .texte_fdm {
    font-family: "Roboto";
    font-size: 14px;
    margin: 0 0 10% 0;
    color: #efeeee;
  }

  .button_fdm {
    display: flex;
    flex-direction: row;
    margin: 0 0 10% 0;
    padding: 0 0 0 5%;
    font-family: "Roboto";
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 1px;
    text-align: left;
    justify-content: center;
    align-items: center;
    color: #5a7516;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    background: linear-gradient(
      90deg,
      rgba(152, 203, 101, 0.5) 30%,
      rgba(255, 235, 0.5) 80%
    );
  }
  .fas {
    margin-left: 70px;
  }
}
</style>
