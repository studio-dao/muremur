<!-- TEMPLATE -->
<template>
  <footer class="footer">
    <div class="separateur"></div>
    <nav class="nav_footer">
      <ul class="ul_footer">
        <li class="li_footer"><a href="">Contact</a></li>
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
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(152, 203, 101, 0.5) 30%,
    rgba(255, 235, 0.5) 80%
  );
}

.ul_footer {
  padding: 0;
  font-size: 14px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

a{
  color: #5a7516;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 100;
  text-decoration: none !important;
}
</style>
