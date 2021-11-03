<template>
  <q-header id="header" reveal elevated class="bg-black text-white">
    <div class="row items-center">
      <img src="https://a.espncdn.com/i/teamlogos/soccer/500/3454.png" alt="Vasco" width="42">
      <q-toolbar-title id="title">Vasco da Gama</q-toolbar-title>
      <q-space/>
      <p id="slogan">A HISTÓRIA MAIS BONITA DO FUTEBOL</p>
      <q-space/>
      <q-input id="search" dark label="Buscar no site" label-color="white" dense debounce="300" color="white" v-model="filter">
        <template v-slot:append>
          <q-icon color="white" name="search" />
        </template>
      </q-input>
    </div>
  </q-header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
#header{
  padding-right: 10px;
  padding-left: 10px;
}
#title{
  font-family: "love", Helvetica, Arial,serif;
  font-size: 21px;
  text-transform: uppercase;
}
#slogan{
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}
</style>