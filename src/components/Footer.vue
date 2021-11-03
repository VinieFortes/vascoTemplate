<template>
  <q-footer class="bg-black text-white">
    <div id="menu" class="q-pa-md">
      <q-list bordered padding class="wrap row items-baseline" style="max-height: 350px">

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Clube</q-item-label>
            <q-item-label style="color: #606062;">Sedes</q-item-label>
            <q-item-label style="color: #606062;">Diretoria e Conselho</q-item-label>
            <q-item-label style="color: #606062;">Imprensa</q-item-label>
            <q-item-label style="color: #606062;">Licencimento</q-item-label>
            <q-item-label style="color: #606062;">Contatos</q-item-label>
          </q-item-section>
        </q-item>


        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Transparência</q-item-label>
            <q-item-label style="color: #606062;">Informações Financeiras</q-item-label>
            <q-item-label style="color: #606062;">Conselho Deliberativo</q-item-label>
            <q-item-label style="color: #606062;">CT</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Futebol</q-item-label>
            <q-item-label style="color: #606062;">Elenco</q-item-label>
            <q-item-label style="color: #606062;">Comissão Ténica</q-item-label>
            <q-item-label style="color: #606062;">Próximos Jogos</q-item-label>
            <q-item-label style="color: #606062;">Campeonato Brasileiro 2020</q-item-label>
            <q-item-label style="color: #606062;">Títulos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Futebol Feminino</q-item-label>
            <q-item-label style="color: #606062;">Elenco</q-item-label>
            <q-item-label style="color: #606062;">Comissão Ténica</q-item-label>
            <q-item-label style="color: #606062;">Títulos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Categorias de Base</q-item-label>
            <q-item-label style="color: #606062;">História</q-item-label>
            <q-item-label style="color: #606062;">Comissão</q-item-label>
            <q-item-label style="color: #606062;">Elenco Sub20</q-item-label>
            <q-item-label style="color: #606062;">Outras Categorias</q-item-label>
            <q-item-label style="color: #606062;">Títulos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Atletismo</q-item-label>
            <q-item-label style="color: #606062;">História</q-item-label>
            <q-item-label style="color: #606062;">Títulos</q-item-label>
            <q-item-label style="color: #606062;">Inscreva-se</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Futsal</q-item-label>
            <q-item-label style="color: #606062;">História</q-item-label>
            <q-item-label style="color: #606062;">Títulos</q-item-label>
            <q-item-label style="color: #606062;">Inscreva-se</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-item-label overline style="color: red; font-weight: bold; font-size: 14px">Remo</q-item-label>
            <q-item-label style="color: #606062;">História</q-item-label>
            <q-item-label style="color: #606062;">Títulos</q-item-label>
            <q-item-label style="color: #606062;">Academia do Remo</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </div>
    <div class="corpy row">
      <div>
        <img src="../assets/logofooter.png" alt="Vasco">
        <p>© Copyright. Todos os direitos reservados. <a href="#">Termo de Uso</a> <a href="#">Declaração de acessibilidade</a>   <a href="#">Política de privacidade</a></p>
      </div>
      <q-space/>
      <p style="margin-right: 20px">Feito por Vinie Fortes :) 2021</p>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.corpy{
  padding-left: 2%;
}
a{
  margin-left: 10px;
  color: #606062;
}
q-item-label{
  color: #606062;
}
</style>