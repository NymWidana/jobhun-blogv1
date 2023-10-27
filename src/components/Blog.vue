<script setup>
import { storeToRefs } from "pinia";
import { useDataArticle } from "../stores/store-article";

const articleStore = useDataArticle();

const { articles } = storeToRefs(articleStore);
articleStore.getDataArticle();
console.log(articles);

const filters = [
  "business",
  "tips",
  "technology",
  "Lifestyle",
  "entertainment",
  "Event",
  "Comuunities",
  "Other",
];
</script>

<template>
  <section class="bg-white">
    <div class="wraper">
      <div class="slogan my-12">
        <div class="text-4xl font-bold">articles Jobhun</div>
        <div class="text-xl">
          Temukan berbagai inspirasi dan informasi seputar pengembangan karier
        </div>
      </div>
    </div>
    <div class="articles">
      <div class="content-wraper mb-28">
        <div
          class="flex flex-col-reverse md:flex-row items-start justify-center gap-6 md:gap-12 lg:gap-24 my-12"
        >
          <div class="ltst-post relative w-full md:w-1/2">
            <div
              class="absolute -bottom-0.5 -right-0.5 bg-yellow-400 h-90% w-full rounded-br-3xl"
            ></div>
            <div class="bg-white relative rounded-3xl rounded-bl-none">
              <div>
                <img
                  :src="listArticle[0].img"
                  class="w-full rounded-t-3xl aspect-video object-cover"
                  alt=""
                />
              </div>
              <div class="p-2">
                <h3 class="text-lg text-justify font-medium">
                  {{ listArticle[0].title }}
                </h3>
                <p class="text-justify font-light">
                  {{ listArticle[0].texts }}
                </p>
                <div class="flex justify-between items-center my-4 px-8">
                  <div class="flex items-center">
                    <div
                      class="text-sm rounded-full py-1 px-2"
                      v-for="(tag, index) in listArticle.category"
                      :key="index"
                    >
                      {{ tag }}
                    </div>
                  </div>
                  <div class="font-semibold">Latest Post</div>
                </div>
              </div>
            </div>
          </div>
          <div class="srch flex flex-col z-10 w-full md:w-1/2">
            <div
              class="srch-bar relative bg-white h-10 flex items-center gap-4 border-2 border-black px-8 py-2 rounded-full"
            >
              <div class="h-full">
                <img
                  src="../assets/searchicon.svg"
                  class="h-full"
                  alt="searchicon"
                />
              </div>
              <input
                type="text"
                class="grow focus:outline-none bg-transparent"
                placeholder="Search"
              />
            </div>
            <div
              class="filter flex md:justify-center md:flex-wrap gap-2 py-2 my-4 overflow-x-scroll md:overflow-auto"
            >
              <button
                class="px-4 py-1 capitalize rounded-full border border-black my-2"
                v-for="(filter, index) in filters"
                :key="index"
              >
                {{ filter }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="rcnt-posts mb-28">
        <div class="wraper">
          <div class="flex items-center gap-4 my-12">
            <h2 class="text-2xl mx-4">Recently Posted</h2>
            <div class="bg-black h-0.5 grow"></div>
          </div>
        </div>
        <div class="content-wraper">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <router-link
              class="bg-white relative rounded-lg shadow-md shadow-gray-200"
              v-for="article in articles"
              :key="article.id"
              :to="'/article/' + article.id"
            >
              <div>
                <img
                  class="w-full rounded-t-lg aspect-video object-cover"
                  :src="article.img"
                  :alt="article.title"
                />
              </div>
              <div class="p-2">
                <h3 class="text-justify font-medium">
                  {{ article.title }}
                </h3>
                <div class="flex justify-between items-center my-4 px-2">
                  <div class="flex items-center">
                    <div
                      class="text-sm rounded-full py-1 px-2"
                      v-for="(tag, index) in article.category"
                      :key="index"
                    >
                      {{ tag }}
                    </div>
                  </div>
                  <div class="font-semibold">{{ article.date }}</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="rcmnd mb-28">
        <div class="wraper">
          <div class="relative flex items-center gap-4 my-12">
            <div class="bg-black h-0.5 grow"></div>
            <h2 class="text-2xl mx-4">Recomended</h2>
            <div
              class="absolute w-0.5 h-32 bg-black right-0 -translate-y-4 custom-scrl"
            ></div>
          </div>
        </div>
        <div class="content-wraper">
          <router-link
            :to="'/article/' + post.id"
            class="rcmnd-posts border-b border-black my-12"
            v-for="(post, index) in listArticle"
            :key="index"
          >
            <div>
              <div class="flex items-center gap-4 my-4">
                <div
                  class="text-sm rounded-full border border-black py-1 px-4"
                  v-for="(tag, index) in post.category"
                  :key="index"
                >
                  {{ tag }}
                </div>
              </div>
              <h3 class="text-2xl my-4">
                {{ post.title }}
              </h3>
              <p class="font-light line-clamp-3 text-ellipsis">
                {{ post.texts }}
              </p>
              <div class="font-semibold text-right my-4">{{ post.date }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
