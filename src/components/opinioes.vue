<template>
  <div class="q-pa-md q-gutter-sm">
    <q-bar>
      <q-btn dense flat round icon="lens" size="8.5px" color="red" />
      <q-btn dense flat round icon="lens" size="8.5px" color="yellow" />
      <q-btn dense flat round icon="lens" size="8.5px" color="green" />
      <div class="col text-center text-weight-bold">
        Opiniões dos tocerdores
      </div>
    </q-bar>
    <div>
      <mensage comme1="Comentario 1" comme2="Comentario 2" comme3="Comentario 3"/>
      <q-input rounded filled v-model="text" label="Deixe aqui seu comentario para o Maior do Rio" />
    </div>
  </div>
</template>

<script>
import { fabApple } from '@quasar/extras/fontawesome-v5'
import mensage from "@/components/mensage";

export default {
  name: "opinioes",
  components:{
    mensage
  },
  setup () {
    return { fabApple }
  }
}
</script>


<style scoped>

</style>