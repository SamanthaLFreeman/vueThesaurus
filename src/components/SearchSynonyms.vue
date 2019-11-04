<template>
  <form @submit="search">
    <input type="text" name="synonym" placeholder="Search synonym" />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  name: "SearchSynonyms",
  data() {
    return {
      synonym: ""
    };
  },
  methods: {
    search(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
</style>