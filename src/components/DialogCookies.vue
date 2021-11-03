<template>
  <q-dialog v-model="dialog" :position="position" full-width>
    <q-card class="row items-center justify-between" style="padding: 10px">
      <p style="font-weight: bold">Nós usamos cookies em nosso site para te dar uma melhor experiência de navegação, lembrando de suas preferências em suas próximas visitas.<br> Clicando em "Aceito", você concorda com o armazenamento de cookies no seu dispositivo para melhorar a experiência e navegação no site.</p>
      <q-btn v-close-popup color="black">Aceito</q-btn>
    </q-card>
  </q-dialog>
</template>

<script>
import {ref} from "vue";

export default {
  name: "DialogCookies",
  setup () {
    const dialog = ref(true)
    const position = ref('bottom')
    return {
      dialog,
      position,

      open (pos) {
        position.value = pos
        dialog.value = true
      }
    }
  }
}
</script>

<style scoped>

</style>