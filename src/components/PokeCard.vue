<template>
  <div class="main-card">
    <img :src="pokeImage" alt="" />
    <div class="poke-details">
      <div>Name: {{ pokeName }}</div>
      <div>Height: {{ pokeHeight }}</div>
      <div>Weight: {{ pokeWeight }}</div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    pokeURL: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokeName: '',
      pokeImage: '',
      pokeHeight: '',
      pokeWeight: '',
    }
  },
  async created() {
    const response = await axios.get(this.pokeURL)
    this.pokeName = response.data.name
    this.pokeImage = response.data.sprites.front_default
    this.pokeHeight = response.data.height
    this.pokeWeight = response.data.weight
  },
}
</script>
<style scoped>
.main-card {
  height: 200px;
  width: 150px;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background: rgb(82, 80, 80);
  border-radius: 5px;
  color: white;
}

</style>
