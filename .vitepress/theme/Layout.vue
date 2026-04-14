<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()
</script>

<template>
  <div class="bg-[#f8f8f8]">
    <nav id="sidebar" class="block md:flex items-center justify-between px-[1em] py-[1em] bg-[#f8f8f8] max-w-[1000px] m-auto text-center uppercase text-[#b30027] font-semibold">
      <img src="./b-sharp-horizontal-rgb.webp" alt="logo" class="h-[120px] block md:order-[1] md:inline mb-5 mr-auto ml-auto">
      <a href="/" class="block sm:inline hover:text-slate-900 font-medium order-0 text-xl p-2">News</a>
      <a :href="frontmatter.contact" class="block sm:inline hover:text-slate-900 font-medium order-1 text-xl p-2">Contact us</a>
    </nav>
  </div>

  <div class="body p-[1em] bg-white min-h-[300px] pt-[3em]">
    <div class="max-w-[1000px] m-auto">
      <div class="prose prose-lg mx-auto p-8 max-w-none">
        <div v-if="page.isNotFound">
          404
        </div>
        <div class="main-content" v-else>
          <Content />
        </div>
      </div>
    </div>
  </div>
  <footer class="text-white h-[300px] bg-[#171717]">
    <div class="bg-[#1f1f1f]">
      <div class="max-w-[1000px] m-auto flex flex-start flex-row p-[1em]">
        <!-- <div class="p-[1em] inline-flex items-center flex-grow"> -->
        <!--   Our Principal Partners: -->
        <!-- </div> -->
        <!-- <div class="p-[1em] inline-flex items-center flex-grow justify-center"> -->
        <!--   <img class="p-[1em]" src="src/rsu-balts-logo-bez-fona.webp" alt="RSU sponsor" width="200"> -->
        <!-- </div> -->
        <!-- <div class="p-[1em] inline-flex items-center flex-grow justify-end"> -->
        <!--   <img class="p-[1em]" src="src/rsu-sp-logo.webp" width="200"> -->
        <!-- </div> -->
      </div>
    </div>
    <div class="p-[1em]">
      <div class="max-w-[1000px] m-auto pt-3 text-center text-[#]">
        Academic Orchestra B-Sharp, Palasta iela, Rīga, LV-1050, Latvia
      </div>
    </div>
  </footer>
</template>
