<template>
  <div id="app">
    <Header />
    <SearchWord v-on:display-word="displayWord" />
    <WordsContainer v-bind:words="words" v-on:display-word="displayWord" />
  </div>
</template>

<script>
import { getSearchedSynonym } from "./util/apiCalls";
import Header from "./components/Header";
import SearchWord from "./components/SearchWord";
import WordsContainer from "./components/WordsContainer";

export default {
  name: "app",
  components: {
    Header,
    SearchWord,
    WordsContainer
  },
  data() {
    return {
      words: []
    };
  },
  methods: {
    displayWord(word) {
      getSearchedSynonym(word).then(data => (this.words = data));
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
