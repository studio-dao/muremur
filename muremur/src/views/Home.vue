<template>
  <div class="home">
    <Section_fruit_du_mois />
    <Section_utiliser_muremur />
    <Section_les_fruits class="Section_fruit" />
    <Section_les_legumes class="Section_legume" />
    <Section_les_fruits_vertical class="Section_fruit_vert_home" />
    <Section_les_legumes_vertical class="Section_legume_vert_home" />
  </div>
</template>

<script>
import Section_fruit_du_mois from "../components/Homepage/Section_fruit_du_mois.vue";
import Section_utiliser_muremur from "../components/Homepage/Section_utiliser_muremur.vue";
import Section_les_fruits from "../components/Homepage/Section_les_fruits.vue";
import Section_les_legumes from "../components/Homepage/Section_les_legumes.vue";
import Section_les_fruits_vertical from "../components/Homepage/Section_les_fruits_vertical.vue";
import Section_les_legumes_vertical from "../components/Homepage/Section_les_legumes_vertical.vue";
export default {
  name: "Home",
  components: {
    Section_fruit_du_mois,
    Section_utiliser_muremur,
    Section_les_fruits,
    Section_les_legumes,
    Section_les_fruits_vertical,
    Section_les_legumes_vertical,
  },
};
</script>
<!-- STYLE -->
<style>
@media only screen and (min-device-width: 568px)and (max-device-width: 2560px) and (-webkit-min-device-pixel-ratio: 2) {
  .Section_fruit {
    display: none;
  }
  .Section_legume {
    display: none;
  }
}

@media only screen and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Section_fruit_vert_home {
    display: none;
  }
  .Section_legume_vert_home {
    display: none;
  }

}
</style>
