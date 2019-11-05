<template>
  <div id="app">
    <Header />
    <SearchSynonyms v-on:display-synonym="displaySynonym" />
    <SynonymsContainer v-bind:synonyms="synonyms" />
  </div>
</template>

<script>
import { getSearchedSynonym } from "./util/apiCalls";
import Header from "./components/Header";
import SearchSynonyms from "./components/SearchSynonyms";
import SynonymsContainer from "./components/SynonymsContainer";

export default {
  name: "app",
  components: {
    Header,
    SearchSynonyms,
    SynonymsContainer
  },
  data() {
    return {
      synonyms: []
    };
  },
  methods: {
    displaySynonym(synonym) {
      getSearchedSynonym(synonym).then(data => (this.synonyms = data));
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
