<!-- TEMPLATE -->
<template>
  <section class="section_les_fruits">
    <img src="" alt="" />
    <article class="article_les_fruits">
      <h1 class="h1_les_fruit">Les Fruits</h1>
      <p class="texte_les_fruits">
        Toutes les infos pour bien choisir vos fruits
      </p>
    </article>
  </section>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Section_les_fruits",
};
</script>

<!-- STYLE -->
<style>
.section_les_fruits {
  width: 95%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
}
.article_les_fruits {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
