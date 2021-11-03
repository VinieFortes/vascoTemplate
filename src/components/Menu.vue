<template>
  <div id="menu">
    <q-list bordered class="rounded-borders row flex-center">
      <q-item class="row items-center justify-between" dark clickable v-ripple>
        <q-item-section>CLUBE</q-item-section>
        <i class='fas fa-caret-down' style='color: #f1f1f1; margin-left: 5px'></i>
        <q-menu style="background-color: black">
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
        </q-menu>
      </q-item>

      <q-item class="row items-center justify-between" dark clickable v-ripple>
        <q-item-section>FUTEBOL</q-item-section>
        <i class='fas fa-caret-down' style='color: #f1f1f1; margin-left: 5px'></i>

        <q-menu style="background-color: black">
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
        </q-menu>
      </q-item>

      <q-item class="row items-center justify-between" dark clickable v-ripple>
        <q-item-section>OUTROS ESPORTES</q-item-section>
        <i class='fas fa-caret-down' style='color: #f1f1f1; margin-left: 5px'></i>

          <q-menu style="background-color: black">
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
        </q-menu>
      </q-item>

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