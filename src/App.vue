<template>
  <div>
    <div>
      <poke-list />
    </div>
  </div>
</template>

<script>
import PokeList from './components/PokeList.vue'

export default {
  name: 'App',
  components: {
    PokeList,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background-color: rgb(47, 46, 48);
}
</style>
