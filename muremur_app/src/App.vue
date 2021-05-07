<!-- TEMPLATE -->
<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Fruits">Fruits</router-link> |
       <router-link to="/Legumes">Légumes</router-link> |
        <router-link to="/A_propos">A_propos</router-link> |
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<!-- SCRIPT -->
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<!-- STYLE -->
<style></style>
