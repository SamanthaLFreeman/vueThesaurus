<template>
  <div id="app">
    <Header />
    <SearchWord v-on:display-word="displayWord" v-bind:error="error" v-on:clear-error="clearError" />
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
      words: [],
      error: ""
    };
  },
  methods: {
    displayWord(word) {
      getSearchedSynonym(word)
        .then(data => this.cleanData(data))
        .then(data => (this.words = data))
        .catch(() => (this.error = "Cannot find word, please enter another."));
    },
    cleanData(data) {
      return data.map(el => {
        return {
          name: el.meta.id,
          type: el.fl,
          definition: el.shortdef,
          syns: el.meta.syns
            .flat()
            .reduce(
              (unique, synonym) =>
                unique.includes(synonym) ? unique : [...unique, synonym],
              []
            )
        };
      });
    },
    clearError() {
      this.error = "";
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
  font-family: Courier;
  line-height: 1.4;
}

button {
  background-color: #fbcb458f;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #000;
  color: #fbcb45;
}
</style>
