import { defineStore } from "pinia";
import axios from 'axios';

const ARTICLES = "/api/articles.json";
const DETAIL_ARTICLES = "/api/detail.json"

export const useDataArticle = defineStore({
  id: "dataArticles",
  state: () => ({
    articles: [],
    detailArticles: {
        category: []
    },
  }),
  actions: {
    async getDataArticle() {
      try {
        let res = await axios.get(ARTICLES);
        this.articles = res.data.data
      } catch (error) {}
    },
    async getDetailArticle(payload) {
      try {
        let res = await axios.get(DETAIL_ARTICLES, payload);
        this.detailArticles = res.data
      } catch (error) {}
    },
  },
});
