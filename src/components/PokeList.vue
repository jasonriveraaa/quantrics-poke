<template>
  <div>

    <div class="pagination">
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="currentPage = pageNumber"
        :class="{ active: currentPage === pageNumber }"
      >
        {{ pageNumber }}
      </button>
    </div>

    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>

    <base-card v-else
      v-for="pokemon in limitDisplayedPoke"
      :key="pokemon.name"
      :pokeURL="pokemon.url"
    ></base-card>

    <div class="btn-container" v-if="isLoadMoreVisible && !isLoading">
      <base-button btn-name="Load more" @click="loadMore"
        >Load More</base-button
      >
    </div>
    <div class="pagination">
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="currentPage = pageNumber"
        :class="{ active: currentPage === pageNumber }"
      >
        {{ pageNumber }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      pokeList: [],
      currentPage: 1,
      limit: 30,
      isLoading: true
    }
  },
  async created() {
    this.isLoading = true
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=150'
    )
    this.pokeList = response.data.results
    this.isLoading = false
  },
  methods: {
    loadMore() {
      this.isLoading = true
      let sample = (this.limit += 15)
      this.pokeList.slice(0, sample)
      this.isLoading = false
    },
  },
  computed: {
    isLoadMoreVisible() {
      if (this.currentPage !== this.totalPages) {
        return true
      } else {
        return false
      }
    },
    limitDisplayedPoke() {
      
      const start = (this.currentPage - 1) * this.limit
      const end = start + this.limit
      return this.pokeList.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.pokeList.length / this.limit)
    },
  },
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button.active {
  background-color: black;
  color: white;
}
.btn-container {
  display: flex;
  justify-content: center;
}
</style>
