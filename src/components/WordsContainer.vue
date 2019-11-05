<template>
  <section>
    <article class="word" v-bind:key="`${word.name}${word.type}`" v-for="word in words">
      <p>{{word.name}}</p>
      <p>{{word.type}}</p>
      <ul v-bind:key="def" v-for="def in word.definition">
        <li>{{def}}</li>
      </ul>
      <div v-bind:key="synonym" v-for="synonym in word.syns">
        <button @click="$emit('display-word', synonym)">{{synonym}}</button>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "WordsContainer",
  props: ["words"]
};
</script>

<style scoped>
.word {
  padding: 20px;
  text-align: center;
}
</style>