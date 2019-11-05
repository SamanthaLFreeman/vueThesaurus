<template>
  <section>
    <div v-bind:key="word.id" v-for="word in words">
      <Word v-bind:word="word" />
    </div>
  </section>
</template>

<script>
import Word from "./Word";
export default {
  name: "WordsContainer",
  components: {
    Word
  },
  props: ["words"]
};
</script>

<style scoped>
</style>