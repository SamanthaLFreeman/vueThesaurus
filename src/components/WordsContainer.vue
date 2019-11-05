<template>
  <section>
    <article class="word" v-bind:key="word.id" v-for="word in words">
      <p>{{word.meta.id}}</p>
      <p>{{word.fl}}</p>
      <ul v-bind:key="def" v-for="def in word.shortdef">
        <li>{{def}}</li>
      </ul>
      <div v-bind:key="synonym" v-for="synonym in word.meta.syns.flat()">
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