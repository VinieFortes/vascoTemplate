<template>
  <q-layout>
    <Header/>
    <q-page-container>
      <Banner/>
      <Carousel/>
      <Noticias/>
      <FooterBanner/>
    </q-page-container>
    <Footer/>
  </q-layout>
</template>

<script>
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import FooterBanner from "@/components/FooterBanner";
import Noticias from "@/components/Noticias";
export default {
  name: 'LayoutDefault',
  components: {
    Noticias,
    FooterBanner,
    Footer,
    Carousel,
    Header,
    Banner
  }
}
</script>


<style>
@font-face {
  font-family: "love";
  src: local("love"),
  url("assets/love.ttf") format("truetype");
}
</style>