<template>
  <form @submit="search">
    <input type="text" name="word" placeholder="Search word..." v-model="word" />
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
form {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 400px;
}

input,
button {
  font-family: Courier;
  font-size: 1em;
  padding: 10px;
}

input {
  margin-bottom: 10px;
  text-align: center;
}
</style>