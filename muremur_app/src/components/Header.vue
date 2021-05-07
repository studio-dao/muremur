<!-- TEMPLATE -->
<template>
  <header>
    <div class="main_header">
      <img src="" alt="" />
      <nav class="nav_header">
        <ul>
          <li><a href="">Fruits</a></li>
          <li><a href="">Légumes</a></li>
          <li><a href="">À propos</a></li>
        </ul>
      </nav>
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
