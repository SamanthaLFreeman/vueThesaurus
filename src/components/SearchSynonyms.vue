<template>
  <form>
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
  }
};
</script>

<style scoped>
</style>