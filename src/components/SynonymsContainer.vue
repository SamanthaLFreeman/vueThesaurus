<template>
  <section>
    <div v-bind:key="word.id" v-for="word in synonyms">
      <Word v-bind:word="word" />
    </div>
  </section>
</template>

<script>
import Word from "./Word";
export default {
  name: "SynonymsContainer",
  components: {
    Word
  },
  props: ["synonyms"]
};
</script>

<style scoped>
</style>