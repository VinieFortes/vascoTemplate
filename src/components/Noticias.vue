<template>
  <q-scroll-area
      style="height: 550px"
      :bar-style="{ bottom: '4px', borderRadius: '5px', background: 'black', height: '10px', opacity: 1 }"
      :thumb-style="{ bottom: '4px', borderRadius: '5px', background: 'red', height: '10px', opacity: 1 }">
    <div class="q-pa-md row no-wrap justify-evenly q-gutter-md">
      <q-card class="my-card">
        <img src="https://static.vasco.com.br/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-01-at-16.23.00-450x450.jpeg">
        <q-card-section>
          <div class="text-h6">Vasco assina contrato de formação com quatro atletas do Futebol Feminino</div>
          <i class="far fa-calendar-alt mr-2 text-red q-pt-md"> novembro 2, 2021</i>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://static.vasco.com.br/wp-content/uploads/2021/10/2EF52225-41FE-448F-A6ED-7EF4200550AC-450x450.jpeg">
        <q-card-section>
          <div class="text-h6">Sub-20 está na semifinal do Carioca de Futsal</div>
          <i class="far fa-calendar-alt mr-2 text-red q-pt-md"> novembro 1, 2021</i>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://static.vasco.com.br/wp-content/uploads/2021/11/bATALHA1-450x450.png">
        <q-card-section>
          <div class="text-h6">VascoTV irá transmitir a segunda edição da Batalha de Gigantes</div>
          <i class="far fa-calendar-alt mr-2 text-red q-pt-md"> novembro 1, 2021</i>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://pbs.twimg.com/media/E5J9t1PX0AYncin.jpg">
        <q-card-section>
          <div class="text-h6">Lionel Messi ira se apresentar na proxima quarta-feira</div>
          <i class="far fa-calendar-alt mr-2 text-red q-pt-md"> novembro 1, 2021</i>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://pbs.twimg.com/media/E5J9t1PX0AYncin.jpg">
        <q-card-section>
          <div class="text-h6">Lionel Messi ira se apresentar na proxima quarta-feira</div>
          <i class="far fa-calendar-alt mr-2 text-red q-pt-md"> novembro 1, 2021</i>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="https://pbs.twimg.com/media/E5J9t1PX0AYncin.jpg">
        <q-card-section>
          <div class="text-h6">Lionel Messi ira se apresentar na proxima quarta-feira</div>
          <i class="far fa-calendar-alt mr-2 text-red q-pt-md"> novembro 1, 2021</i>
        </q-card-section>
      </q-card>


    </div>
  </q-scroll-area>
</template>

<script>
export default {
  name: "Noticias"
}
</script>

<style scoped>
.my-card{
  width: 300px;
  height: 500px;
}
</style>