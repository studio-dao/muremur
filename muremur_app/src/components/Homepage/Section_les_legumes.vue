<!-- TEMPLATE -->
<template>
  <section class="section_les_legumes">
    <article class="article_les_legumes">
      <h1 class="h1_les_legumes">Les Légumes</h1>
      <p class="texte_les_legumes">
        Toutes les infos pour bien choisir vos légumes
      </p>
    </article>
    <img src="" alt="" />
  </section>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: "Section_les_legumes",
};
</script>

<!-- STYLE -->
<style>
.section_les_legumes {
  width: 95%;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
}
.article_les_legumes {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
