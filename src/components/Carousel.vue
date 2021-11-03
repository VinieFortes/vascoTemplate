<template>
  <div class="row">
    <div style="width: 60%">
      <q-carousel
          arrows
          animated
          infinite
          :autoplay="autoplay"
          v-model="slide"
      >
        <q-carousel-slide name="first" img-src="https://www.lance.com.br/files/article_main/uploads/2019/11/14/5dccc1cf90e05.jpeg" >
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Vasco Imbativel ?</div>
            <div class="text-subtitle1">Veja os melhores momentos do ultimo jogo do Vasco</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/08/egstdzawkaed_n7-e1598388038227.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Nova contratação ?</div>
            <div class="text-subtitle1">Veja como anda a negociação para trazer Messi para o Gigante da Colina</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://www.lance.com.br/files/article_main/uploads/2018/12/31/5c2a157f9f610.jpeg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">União Flasco ?</div>
            <div class="text-subtitle1">Compra do Flamengo pode acontecer nas proximas semanas</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div style="width: 40%">
      <q-carousel
          animated
          infinite
          :autoplay="autoplay"
          v-model="slide2"
      >
        <q-carousel-slide name="first" img-src="https://istoe.com.br/wp-content/uploads/sites/14/2021/05/609f0446e6a9a.jpeg">
          <div class="absolute-bottom custom-caption bg-red-14">
            <div class="text-h3">Vasco rico !</div>
            <div class="text-subtitle1">Presidente diz que clube hoje tem mais dinheiro que o Governo do Brasil !</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="https://pbs.twimg.com/media/EzDbOEFXMAMxCHR.jpg">
          <div class="absolute-bottom custom-caption bg-red-14">
            <div class="text-h2">Vascainos Online</div>
            <div class="text-subtitle1">Veja fotos dos torcedores do gigante da colina dessa semana</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="https://i1.wp.com/universovasco.com.br/wp-content/uploads/2021/07/camisa-lgbt.jpg?fit=1024%2C682&ssl=1">
          <div class="absolute-bottom custom-caption bg-red-14">
            <div class="text-h2">Novo manto</div>
            <div class="text-subtitle1">Veja a nova camisa do Vasco</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'carousel',
  setup () {
    return {
      slide: ref('first'),
      slide2: ref('first'),
      autoplay: ref(true)
    }
  }
}
</script>

<style scoped>
.custom-caption{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .9)
}
</style>