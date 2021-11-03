<template>
  <div id="menu">
    <q-list bordered class="rounded-borders row flex-center">
      <q-expansion-item
          dark
          label="CLUBE"
      >
        <q-list bordered separator class="text-white column">
          <q-item clickable v-ripple>
            <q-item-section>Sedes</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Diretoria e Conselho</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Estatuto</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Imprensa</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Contatos</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-expansion-item
          dark
          label="FUTEBOL"
      >
        <q-list bordered separator class="text-white column">
          <q-item clickable v-ripple>
            <q-item-section>Comissão Tecnica</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Elenco</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Tabela de Jogos</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Titulos</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Futebol Feminino</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-expansion-item
          dark
          label="OUTROS ESPORTES"
      >
        <q-list bordered separator class="text-white column">
          <q-item clickable v-ripple>
              <q-item-section>Atletismo</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Automobilismo</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Beach Soccer</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Boliche</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Futsal</q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-item clickable v-ripple>
        <q-item-section class="text-white">eSPORTS</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>
#menu{
  background-color: black;
}
</style>