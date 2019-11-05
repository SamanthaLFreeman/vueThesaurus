<template>
  <article class="word">
    <p>{{word.meta.id}}</p>
    <p>{{word.fl}}</p>
    <ul v-bind:key="def" v-for="def in word.shortdef">
      <li>{{def}}</li>
    </ul>
    <div v-bind:key="synonym" v-for="synonym in word.meta.syns.flat()">
      <button>{{synonym}}</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "Word",
  props: ["word"]
};
</script>

<style scoped>
.word {
  padding: 20px;
  text-align: center;
}
</style>

