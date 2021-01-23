<template>

    <div class="m-auto">
      <h1 class="text-2xl text-center">Dc Heroes {{ heroesCount }}</h1>
      <ul>
        <li class="flex justify-between" v-for="(hero,index) in dcHeroes" :key="hero.name">
          <div>
            {{ hero.name }}
          </div>
          <button v-on:click="remove(index)">x</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addHero">
        <input
          class="border rounded"
          v-model="newHero"
          placeholder="Type Hero Name Here"
          ref="newHeroRef"/>
        <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500  text-white" type="submit">Add Hero</button>
      </form>
    </div>
</template>

<script>
import {computed, onMounted, ref } from "vue";
export default {
  setup () {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeroes = ref([
      {name: 'SuperGirl'},
      {name: 'Flash'},
      {name: 'Batman'},
      {name: "Arrow"},
      {name: "Superman"},
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const heroesCount = computed({
      get:() => dcHeroes.value.length,
    });


    function remove(index) {
      dcHeroes.value = dcHeroes.value.filter((hero,i) => i != index);
    }

    function addHero() {
        if (newHero.value !== "") {
          dcHeroes.value.unshift({ name: newHero.value });
          newHero.value = "";
        }
      }

    return {dcHeroes, newHero, remove, addHero, newHeroRef, heroesCount};
  },
/*  computed: {
    heroesCount() {
      return this.dcHeroes.length;
    },
  },
  methods: {
  /*  addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },*/
  }
/*  mounted() {
    this.$refs.newHeroRef.focus();
  },*/

</script>

<style>

</style>
