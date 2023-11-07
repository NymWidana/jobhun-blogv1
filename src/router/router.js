import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Blog.vue";
import Article from "../components/Article.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/article/:id", component: Article, name : "DetailArticles" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});

export default router;
