<script setup>
import Jblog from "./components/Blog.vue";
import Article from "./components/Article.vue";
import Jheader from "./components/Header.vue";
import Jfooter from "./components/Footer.vue";
import articles from "./data/articles.json"

const blogPosts = [
  {
    title: "",
    texts: "",
    imagesUrl: "",
    tag: "",
    date: "",
  },
];
const ctgrFilter = [
  "technology",
  "business",
  "digital marketing",
  "UiUx",
  "startup",
];

</script>

<template>
  <Jheader></Jheader>
  <router-view></router-view>
  <Jfooter></Jfooter>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
