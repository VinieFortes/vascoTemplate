<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%">
      <q-chat-message
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="[comme1]"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
      />
      <q-chat-message
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
          :text="[comme2]"
          sent
          stamp="4 minutes ago"
          text-color="white"
          bg-color="primary"
      />
      <q-chat-message
          name-html
          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
          :text="[comme3]"
          text-html
          sent
          stamp="1 minutes ago"
          size="8"
          text-color="white"
          bg-color="red"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "mensage",
  props: ['comme1', 'comme2', 'comme3'],
}
</script>

<style scoped>

</style>