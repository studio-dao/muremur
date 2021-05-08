<!-- TEMPLATE -->
<template>
  <div class="main_modale">
    <div class="entete_modale">
      <img src="" alt="" />
      <h1>Avocat</h1>
    </div>
    <div class="corps_modale">
        <p class="maturite">maturité</p>
         <p class="maturite_texte">blablabalbalabla</p>
            <p class="conservation">conservation</p>
         <p class="conservation_texte">blablabalbalabla</p>
         <button class="bouton_close_modale" @click="toggleModale">x</button>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
     name:'Modale',
     props:['revele', 'toggleModale']
}
</script>

<!-- STYLE -->
<style>
.bouton_close_modale{
  font-size: 2em;
  color:red
}

</style>

