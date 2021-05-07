<template>
  <div class="home">

 
    <Section_fruit_du_mois/>
    <Section_utiliser_muremur/>
    <Section_les_fruits/>
    <Section_les_legumes/>

  </div>
</template>

<script>

import Section_fruit_du_mois from '../components/Homepage/Section_fruit_du_mois.vue'
import Section_utiliser_muremur from '../components/Homepage/Section_utiliser_muremur.vue'
import Section_les_fruits from '../components/Homepage/Section_les_fruits.vue'
import Section_les_legumes from '../components/Homepage/Section_les_legumes.vue'
export default {
  name: 'Home',
  components: {

   Section_fruit_du_mois,
   Section_utiliser_muremur,
   Section_les_fruits,
   Section_les_legumes
   
  }
}
</script>
<!-- STYLE -->
<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center
}
</style>




