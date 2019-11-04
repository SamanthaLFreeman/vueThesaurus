<template>
  <form @submit="search">
    <input type="text" name="synonym" placeholder="Search synonym" v-model="synonym" />
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

      this.$emit("display-synonym", this.synonym);
      this.synonym = "";
    }
  }
};
</script>

<style scoped>
</style>