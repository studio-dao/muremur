<!-- TEMPLATE -->
<template>
  <div id="app">
    <Header />
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://use.fontawesome.com/releases/v5.13.0/css/all.css');

@font-face {
  font-family: "Paytone";
  src: local("Paytone"),
  url('./assets/fonts/PaytoneOne-Regular.ttf') format("truetype");
}

#app{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #f2f1f1;
}
</style>
