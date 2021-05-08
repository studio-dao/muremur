<!-- TEMPLATE -->
<template>
  <header>
    <div class="main_header">
      <img src="" alt="" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Fruits">Fruits</router-link> |
       <router-link to="/Legumes">Légumes</router-link> |
        <router-link to="/A_propos">A_propos</router-link> |
    </div>

      <input type="search" value="votre recherche" />
    </div>
    <div class="separateur"></div>
  </header>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Header",
};
</script>

<!-- STYLE -->
<style>
.main_header {
  display: flex;
  flex-direction: row;
}

ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
}
a {
  text-decoration: none;
}
</style>
