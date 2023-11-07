<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useDataArticle } from "../stores/store-article";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const articleStore = useDataArticle();

const { detailArticles, articles } = storeToRefs(articleStore);

onMounted(async () => {
  await articleStore.getDetailArticle(id);
  await articleStore.getDataArticle();
});
</script>
<template>
  <section>
    <div class="banner h-banner bg-black relative">
      <img
        :src="detailArticles.img"
        class="absolute w-full h-full object-cover saturate-50 brightness-75"
        alt=""
      />
      <div
        class="art-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center font-semibold"
      >
        {{ detailArticles.title }}
      </div>
    </div>
    <div class="relative bg-white">
      <div class="contacts sticky my-8 top-8 bottom-8 left-16 w-fit float-left">
        <h5 class="py-4">Share</h5>
        <div class="grid gap-4 place-items-center">
          <img
            src="../assets/instagram1.png"
            alt="instagram"
            class="contact-icon h-8"
          />
          <img
            src="../assets/facebook.png"
            alt="facebook"
            class="contact-icon h-8"
          />
          <img
            src="../assets/twitter.png"
            alt="twitter"
            class="contact-icon h-8"
          />
          <img src="../assets/chat.png" alt="chat" class="contact-icon h-8" />
          <img src="../assets/share.png" alt="share" class="contact-icon h-8" />
        </div>
      </div>
      <div class="art-wraper">
        <div class="art-board relative h-screen -translate-y-32">
          <div
            class="yelow-shape absolute w-full h-40 bg-gradient-to-b from-yellow-300 to-white -z-10 -top-1 -left-1"
          ></div>
          <div class="bg-white px-8 py-12">
            <div class="details flex justify-between items-center">
              <div class="rounded-full bg-slate-300 py-1 px-4">Tips</div>
              <div class="text-right font-bold">
                <div class="font-bold">Anonymous</div>
                <div class="text-sm">Latest post</div>
              </div>
            </div>
            <!-- Content utama -->
            <div class="art-contents p-12 text-lg">
              <div>
                {{ detailArticles.texts }}
              </div>
              <div class="flex justify-center my-5">
                <img
                  :src="detailArticles.img"
                  class="h-34 object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black h-0.5 mx-auto max-w-4xl"></div>
    <div class="rcnt-post wraper py-8 pb-20">
      <h2 class="text-center py-8 text-2xl">Recently Posted</h2>
      <div class="w-full flex overflow-x-scroll gap-4">
        <!-- bagaimana caranya buat horizontal scrollable items dengan setiap items width adalah 1/3 dari width containernya  -->

        <router-link
          class="relative rounded-lg shadow-md shadow-gray-200 w-full"
          v-for="(post, index) in articles"
          :key="index"
          :to="'/article/' + post.id"
        >
          <div class="">
            <img
              class="w-full rounded-t-lg aspect-video object-cover"
              :src="post.img"
              :alt="post.title"
            />
          </div>
          <div class="p-2">
            <h3 class="text-justify font-medium">
              {{ post.title }}
            </h3>
            <div class="flex justify-between items-center my-4 px-2">
              <div class="flex items-center">
                <div
                  class="text-sm rounded-full py-1 px-2"
                  v-for="(tag, index) in post.category"
                  :key="index"
                >
                  {{ tag }}
                </div>
              </div>
              <div class="font-semibold">{{ post.date }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
