<template>
  <section>
    <article class="word" v-bind:key="`${word.name}${word.type}`" v-for="word in words">
      <h2 class="name">{{word.name}}</h2>
      <p class="type">{{word.type}}</p>
      <ul v-bind:key="def" v-for="def in word.definition">
        <li>{{def}}</li>
      </ul>
      <div class="synonyms">
        <div v-bind:key="synonym" v-for="synonym in word.syns">
          <button class="synonym" @click="$emit('display-word', synonym)">{{synonym}}</button>
        </div>
      </div>
      <div class="line"></div>
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
section {
  height: 70vh;
  overflow: scroll;
}

.word {
  padding: 20px;
  text-align: center;
}

.name {
  font-size: 2em;
  font-weight: bold;
  margin-top: 30px;
}

.type {
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  margin-bottom: 20px;
}

.synonyms {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding: 40px;
}

.synonym {
  margin: 10px;
  padding: 10px;
  width: 140px;
}

li {
  list-style-type: none;
}

.line {
  border-bottom: 10px dotted #000;
  margin: auto;
  padding-top: 20px;
  width: 200px;
}
</style>