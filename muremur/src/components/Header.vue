<!-- TEMPLATE -->
<template>
  <header>
    <div class="main_header">
      <router-link to="/">
      <img class="logo" src="@/assets/images/logo_muremur_petit.png" alt="logo"/></router-link>
      <div class="nav_header">
        <router-link class="router_link_title_modale" to="/" >ACCUEIL</router-link>
        <router-link class="router_link_title_modale" to="/Fruits" >FRUITS</router-link>
        <router-link class="router_link_title_modale" to="/Legumes">LÉGUMES</router-link>
        <router-link class="router_link_title_modale" to="/Histoire">HISTOIRE</router-link>
        <router-link class="router_link_title_modale" to="/A_propos">À PROPOS</router-link>
      </div>
      <div class="search_bar" style="display:none">
        <input class="input_search" type="search" placeholder="Recherche" />
      </div>
      <div class="burger" @click="openModale()">
        <div class="barre_burger"></div>
        <div class="barre_burger"></div>
        <div class="barre_burger"></div>
      </div>
      <transition name="fade">
        <div v-if="open_modale" @click="openModale()" class="nav_modale" id="nav">
         <router-link class="router_link_title_modale" to="/" >ACCUEIL</router-link>
         <router-link class="router_link_title_modale" to="/Fruits" >FRUITS</router-link>
         <router-link class="router_link_title_modale" to="/Legumes">LÉGUMES</router-link>
         <router-link class="router_link_title_modale" to="/Histoire">HISTOIRE</router-link>
         <router-link class="router_link_title_modale" to="/A_propos">À PROPOS</router-link>
         </div>
      </transition>
    </div>
    <div class="separateur"></div>
  </header>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Header",

  data() {
    return {
      open_modale: false,
    };
  },

  methods: {
    openModale() {
      this.open_modale = !this.open_modale;
    },
  },
};
</script>

<!-- STYLE -->
<style>
@media only screen and (min-device-width: 768px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
  .nav_header {
    width: 50%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    font-family: "Paytone";
    color: #5a7516;
    font-size: 14px;
    align-items: flex-end;
    margin: 0px 20px;
  }

  .main_header {
    height: 10%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    padding: 10px;
  }

  .logo {
    height: 70px;
  }

  .input_search {
    position: relative;
    height: 20px;
    padding: 0.5px;
    background-color: none;
    font-family: "Roboto";
    font-weight: 100;
    letter-spacing: 1px;
    color: #5a7516;
    border: none;
  }
  .search_bar {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .router_link_title {
    font-family: "Paytone";
  }

  a {
    text-decoration: none;
  }

  .burger {
    display: none;
  }

  .barre_burger {
    background-color: #5a7516;
    border-radius: 5px;
    margin-bottom: 5px;
    width: 40px;
    height: 8px;
  }
  .router_link_title_modale {
    font-family: "Paytone";
    color: #5a7516;
    font-size: 18px;
  }

  .nav_modale {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 180px;
    border-radius: 10px;
    position: absolute;
    background-color: rgb(242, 241, 241);
    font-size: 10em;
    background-image: url("~@/assets/images/AOP_fruits_legumes.png");
    background-size: 70%;
    justify-content: space-around;
    align-content: left;
    right: 15px;
    top: 90px;
    z-index: 100;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}

/* MOBILE et TABLETTE */
@media only screen and (max-device-width: 768px) and (-webkit-min-device-pixel-ratio: 2) {
  .main_header {
    height: 10%;
    display: flex;
    flex-direction: row;
    padding: 10px;
  }

  .logo {
    height: 70px;
  }

  .input_search {
    height: 20px;
    padding: 0.5px;
    background-color: none;
    font-family: "Roboto";
    font-weight: 100;
    letter-spacing: 1px;
    color: #5a7516;
    border: none;
  }

  .search_bar {
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;

  }

  .nav_header {
    display: none;
  }

  .router_link_title {
    font-family: "Paytone";
  }

  a {
    text-decoration: none;
  }

  .burger {
     width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;
  }

  .barre_burger {
    background-color: #5a7516;
    border-radius: 5px;
    margin-bottom: 5px;
    width: 40px;
    height: 8px;
  }
  .router_link_title_modale {
    font-family: "Paytone";
    color: #5a7516;
    font-size: 18px;
  }

  .nav_modale {
    padding: 15px;
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 180px;
    border-radius: 10px;
    position: absolute;
    background-color: rgb(242, 241, 241);
    font-size: 10em;
    background-image: url("~@/assets/images/AOP_fruits_legumes.png");
    background-size: 70%;
    justify-content: space-around;
    align-content: left;
    right: 15px;
    top: 90px;
    z-index: 100;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
