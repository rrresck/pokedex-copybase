<template>
  <v-app>
    <v-container>
      <v-container>
        <v-row>
          <v-container>
            <v-img
              :src="require('../src/assets/pokedex.png')"
              class="my-3"
              contain
              height="200"
            />
            <h1 class="text-center yellow--text mb-2" style="font-size: 10rem font-family: 'Mulish', sans-serif;">
              Pokedex
            </h1>
            <h1 class="text-center yellow--text mb-8 font-family: 'Mulish', sans-serif;">
              Processo Seletivo
              <a class="black--text" href="https://copybase.com.br">COPYBASE</a>
            </h1>
          </v-container>
        </v-row>

        <v-text-field
          v-model="search"
          label="Pesquisar"
          placeholder="Digite seu Pokemon preferido em minúsculas! Ex: pikachu"
          solo
        ></v-text-field>

        <v-row>
          <v-col
            cols="5"
            md="2"
            v-for="pokemon in filtered_pokemons"
            :key="pokemon.name"
          >
            <PokemonCard :pokemon="pokemon" @clicked="show_pokemon" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <PokemonInfoDialog
      :show.sync="show_dialog"
      :selected_pokemon="selected_pokemon"
    />
  </v-app>
</template>

<script>
import axios from "axios";

import PokemonCard from "./components/PokemonCard.vue";
import PokemonInfoDialog from "./components/PokemonInfoDialog.vue";
export default {
  name: "App",
  components: {
    PokemonCard,
    PokemonInfoDialog,
  },

  data() {
    return {
      pokemons: [],
      search: "",
      show_dialog: false,
      selected_pokemon: null,
    };
  },

  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=498")
      .then((response) => {
        this.pokemons = response.data.results;
      });
  },
  methods: {
    show_pokemon(id) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        this.selected_pokemon = response.data;
        this.show_dialog = !this.show_dialog;
      });
    },

    get_move_level(move) {
      for (let version of move.version_group_details) {
        if (
          version.version_group.name == "sword-shield" &&
          version.move_learn_method.name == "level-up"
        ) {
          return version.level_learned_at;
        }
      }
      return 0;
    },
  },

  computed: {
    filtered_pokemons() {
      return this.pokemons.filter((item) => {
        return item.name.includes(this.search);
      });
    },
  },
};
</script>

<style>
#app {
  background: linear-gradient(
      to bottom right,
      rgb(13, 2, 95),
      rgb(85, 145, 197)
    )
    no-repeat center center fixed !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover !important;
  background-position: center;
  min-height: 100vh;
  font-family: 'Mulish', sans-serif;
}
</style>