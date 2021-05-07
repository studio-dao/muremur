<!-- TEMPLATE -->
<template>
  <section class="section_fdm">
      <img src="" alt="">
    <article class="article_fdm">
<h1 class="h1-fdm"> Le citron</h1>
<h3>Le fruit de la semaine</h3>
<p class="texte_fdm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus nec orci eget lacus gravida dapibus consequat non nisl. 
    Pellentesque pulvinar magna ut condimentum varius.  </p>
    <button disabled="disabled">Son histoire</button>
    </article>
  </section>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Section_fruit_du_mois",
};
</script>

<!-- STYLE -->
<style>
.section_fdm{
    width: 95%;
    display: flex;
    flex-direction: row;
    border: 1px solid black
}
</style>
