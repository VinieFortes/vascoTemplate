<template>
  <div class="tabelaBody">
    <q-table
        title="Brasileirão Serie B 2021"
        :rows="rows"
        :columns="columns"
        :pagination = "pagination"
        row-key="name"
        dark
        color="green"
    />
  </div>
</template>

<style>

</style>

<script>

// import {tabela} from "@/tabelaController";

export default {
  name: 'tabela',
  setup() {
    return {
      columns,
      rows,
      pagination
    }
  }
}

const pagination = {
  rowsPerPage: 20
}

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Times',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Pontos', label: 'Pontos', field: 'Pontos', sortable: true },
  { name: 'Jogos', label: 'Jogos', field: 'Jogos', sortable: true },
  { name: 'Vitorias', label: 'Vitorias', field: 'Vitorias', sortable: true },
  { name: 'Empates', label: 'Empates', field: 'Empates' , sortable: true},
  { name: 'Derrotas', label: 'Derrotas', field: 'Derrotas', sortable: true },
]


const rows = [
  {
    name: "Coritiba",
    Pontos: 57,
    Jogos: 31,
    Vitorias: 16,
    Empates: 9,
    Derrotas: 6,
  },
  {
    name: 'Botafogo',
    Pontos: 55,
    Jogos: 31,
    Vitorias: 16,
    Empates: 7,
    Derrotas: 8,
  },
  {
    name: 'Avaí',
    Pontos: 53,
    Jogos: 31,
    Vitorias: 15,
    Empates: 8,
    Derrotas: 8,
  },
  {
    name: 'Goiás',
    Pontos: 52,
    Jogos: 31,
    Vitorias: 14,
    Empates: 10,
    Derrotas: 7,
  },
  {
    name: 'CRB',
    Pontos: 50,
    Jogos: 31,
    Vitorias: 13,
    Empates: 11,
    Derrotas: 7,
  },
  {
    name: 'Vasco',
    Pontos: 47,
    Jogos: 31,
    Vitorias: 13,
    Empates: 13,
    Derrotas: 8,
  },
  {
    name: 'Guarani',
    Pontos: 46,
    Jogos: 31,
    Vitorias: 12,
    Empates: 10,
    Derrotas: 9,
  },
  {
    name: 'CSA',
    Pontos: 45,
    Jogos: 31,
    Vitorias: 13,
    Empates: 6,
    Derrotas: 12,
  },
  {
    name: 'Náutico',
    Pontos: 45,
    Jogos: 31,
    Vitorias: 12,
    Empates: 9,
    Derrotas: 10,
  },
  {
    name: 'Vila Nova',
    Pontos: 42,
    Jogos: 32,
    Vitorias: 10,
    Empates: 12,
    Derrotas: 10,
  },
  {
    name: 'Sampaio Corrêa',
    Pontos: 40,
    Jogos: 31,
    Vitorias: 10,
    Empates: 10,
    Derrotas: 11,
  },
  {
    name: 'Cruzeiro',
    Pontos: 39,
    Jogos: 31,
    Vitorias: 8,
    Empates: 15,
    Derrotas: 8,
  },
  {
    name: 'Remo',
    Pontos: 38,
    Jogos: 31,
    Vitorias: 10,
    Empates: 8,
    Derrotas: 13,
  },
  {
    name: 'Operário-PR',
    Pontos: 38,
    Jogos: 31,
    Vitorias: 10,
    Empates: 8,
    Derrotas: 13,
  },
  {
    name: 'Ponte Preta',
    Pontos: 37,
    Jogos: 31,
    Vitorias: 9,
    Empates: 10,
    Derrotas: 12,
  },
  {
    name: 'Brusque',
    Pontos: 35,
    Jogos: 32,
    Vitorias: 10,
    Empates: 8,
    Derrotas: 14,
  },
  {
    name: 'Londrina',
    Pontos: 31,
    Jogos: 31,
    Vitorias: 7,
    Empates: 11,
    Derrotas: 13,
  },
  {
    name: 'Vitória',
    Pontos: 32,
    Jogos: 31,
    Vitorias: 6,
    Empates: 14,
    Derrotas: 11,
  },
  {
    name: 'Confiança',
    Pontos: 31,
    Jogos: 31,
    Vitorias: 8,
    Empates: 7,
    Derrotas: 16,
  },
  {
    name: 'Brasil de Pelotas',
    Pontos: 20,
    Jogos: 31,
    Vitorias: 3,
    Empates: 11,
    Derrotas: 17,
  },
]

</script>

<style>
.tabelaBody{
padding: 10px;
width: 50%;
}
</style>
