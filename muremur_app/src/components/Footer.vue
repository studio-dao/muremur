<!-- TEMPLATE -->
<template>
  <footer class="footer">
    <div class="separateur"></div>
    <nav class="nav_footer">
      <ul class="ul_footer">
        <li><a href="">Contact</a></li>
        <li><a href="">Mentions Légales</a></li>
        <li><a href="">Copyright Muremur©</a></li>
      </ul>
    </nav>
  </footer>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Footer",
};
</script>

<!-- STYLE -->
<style>
.footer {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.separateur {
  width: 100%;
  height: 4px;
background: rgb(33,93,9);
background: linear-gradient(90deg, rgba(33,93,9,1) 0%, rgba(41,121,9,1) 5%, rgba(255,235,0,1) 61%);
}

.ul_footer {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
