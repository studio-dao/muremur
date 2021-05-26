<!-- TEMPLATE -->
<template>
  <footer class="footer">
    <div class="separateur"></div>
    <div class="footer_nav">
    <nav class="footer_ul">
      <ul class="ul_footer">
        <li class="li_footer"><a href="mailto:muremur@gmail.com">Contact</a></li>
        <li class="li_footer" @click="toggleMentionLegale();"> Mentions Légales</li>
        <li class="li_footer"><a href="">Copyright Muremur©</a></li>
      </ul>
    <div class="raison_sociale" v-if="mentionLegale" >Muremur est hébergé chez :<br> OVH SAS est une filiale de la société OVH Groupe SAS, <br>société immatriculée au RCS de Lille sous le numéro 537 407 926 sise<br> 2, rue Kellermann,<br> 59100 Roubaix.</div>
    </nav>
      <div class="nav_footer_pcpale">
        <router-link class="router_link_title_modale_footer" to="/" >ACCUEIL</router-link>
        <router-link class="router_link_title_modale_footer" to="/Fruits" >FRUITS</router-link>
        <router-link class="router_link_title_modale_footer" to="/Legumes">LÉGUMES</router-link>
        <router-link class="router_link_title_modale_footer" to="/Histoire">HISTOIRE</router-link>
        <router-link class="router_link_title_modale_footer" to="/A_propos">À PROPOS</router-link>
      </div>
    </div>
  </footer>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Footer",
  data(){
    return{
      mentionLegale:false 
    }
  },
  methods: {
    toggleMentionLegale(){
      this.mentionLegale = !this.mentionLegale
      return console.log(this.mentionLegale)
    }
  },
};
</script>

<!-- STYLE -->
<style>
@media only screen and (min-device-width: 768px) and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
 .li_footer  a{
  color: #5a7516;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 100;
  text-decoration: none !important;
}
.li_footer{
    color: #5a7516;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 100;
  text-decoration: none !important;
}

.router_link_title_modale_footer {
  font-size: 30px !important;
}
}
/* MOBILE */
.footer {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
}
.separateur {
  height: 6px;
  background: linear-gradient(
    90deg,
    rgba(152, 203, 101, 0.5) 30%,
    rgba(255, 235, 0.5) 80%
  );
}

.footer_nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px
}

.ul_footer {
  margin: 0px;
  padding: 0;
  font-size: 14px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
}

a{
  color: #5a7516;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 100;
  text-decoration: none !important;
}

.raison_sociale{
  margin-top: 20px;
  color: #5a7516;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 100;
  text-decoration: none !important;
}

.nav_footer_pcpale{
  display: flex;
  flex-direction: column;
}
.router_link_title_modale_footer {
  margin: 0 10px 10px 10px;
  font-size: 10px ;
}
</style>
