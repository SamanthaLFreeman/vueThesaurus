<template>
  <form @submit="search">
    <input type="text" name="word" placeholder="Search word" v-model="word" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "SearchWord",
  data() {
    return {
      word: ""
    };
  },
  methods: {
    search(e) {
      e.preventDefault();

      this.$emit("display-word", this.word);
      this.word = "";
    }
  }
};
</script>

<style scoped>
</style>