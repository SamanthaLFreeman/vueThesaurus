<template>
  <div id="app">
    <Header />
    <SearchSynonyms />
  </div>
</template>

<script>
import Header from "./components/Header";
import SearchSynonyms from "./components/SearchSynonyms";

export default {
  name: "app",
  components: {
    Header,
    SearchSynonyms
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
