<template>
  <form @submit="search">
    <input type="text" name="word" placeholder="Search word..." v-model="word" />
    <button :disabled="!word">Submit</button>
    <p class="error" v-if="error">{{error}}</p>
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
  props: ["error"],
  methods: {
    search(e) {
      e.preventDefault();

      this.$emit("display-word", this.word);
      this.word = "";
      this.$emit("clear-error");
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  height: 15vh;
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

button:disabled:hover {
  background-color: #fbcb458f;
  color: #00000050;
  cursor: not-allowed;
}

.error {
  color: #c70202;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  padding-top: 5px;
  text-align: center;
}
</style>