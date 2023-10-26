<script setup>
import blog from "../data/articles.json"

// content dummy
const content1 = [
  { tag: "h", rawText: "this is heading" },
  { tag: "p", rawText: "this is paragraph" },
  { tag: "l", rawTexts: ["this is listItem", "This is listItem"] },
  {
    tag: "img",
    imgUrl: new URL("/src/assets/testimg.png", import.meta.url).href,
  },
];

blog.forEach((article)=>{
  article.imgUrl = new URL(article.imgUrl, import.meta.url).href
})
</script>
<template>
  <section>
    <div class="banner h-banner bg-black relative">
      <img
        src="../assets/testimg.png"
        class="absolute w-full h-full object-cover cursor-none saturate-50 brightness-75"
        alt=""
      />
      <div
        class="art-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center font-semibold"
      >
        Hati hati portofolio yang kayak gini yang bakal kena skip hrd
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
            <div class="art-contents p-12 text-lg">
              
              <!-- pemformatan text -->
              <div v-for="(content, index) in content1" :key="index">
                <h1 class="font-bold" v-if="content.tag == 'h'">
                  {{ content.rawText }}
                </h1>
                <p v-else-if="content.tag == 'p'">{{ content.rawText }}</p>
                <ul v-else-if="content.tag == 'l'">
                  <li v-for="(listItm, index) in content.rawTexts" :key="index">
                    - {{ listItm }}
                  </li>
                </ul>
                <img
                  class="block mx-auto max-w-full object-cover"
                  v-if="content.tag == 'img'"
                  :src="content.imgUrl"
                  :alt="content.imgUrl"
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
      <div class="w-full flex py-4 overflow-x-scroll gap-4">
        

        <!-- bagaimana caranya buat horizontal scrollable items dengan setiap items width adalah 1/3 dari width containernya  -->
        
        <router-link
          class="relative rounded-lg shadow-md shadow-gray-200"
          v-for="(post, index) in blog"
          :key="index"
          :to="'/article/' + post.title"
        >
          <div class="">
            <img
              class="w-full rounded-t-lg aspect-video object-cover"
              :src="post.imgUrl"
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
