<script setup>
import { useData } from 'vitepress'
const { page, frontmatter } = useData()

function scrollToNews(e) {
  e.stopImmediatePropagation()
  document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/assets/2026-04-19-getrudes-konzerts-flat.png'); filter: saturate(0.5) brightness(1.0)" v-if="frontmatter.isHome"></div>
    <div class="absolute inset-0 bg-cover bg-center" style="background: #191415;" v-else></div>

    <div class="relative">
      <nav class="block md:flex items-center justify-between px-[1em] pt-1 max-w-[1000px] m-auto text-center uppercase text-[#eee] font-semibold">
        <div class="block md:flex items-center justify-between w-full pt-3">
          <a href="/" @click.prevent.stop="scrollToNews" class="block sm:inline hover:text-white font-medium order-0 text-xl p-2">News</a>
          <a href="/" class="block md:order-[1] md:inline mb-5 mr-auto ml-auto"><img src="/assets/logo-white.png" alt="logo" class="h-[70px]"></a>
          <a href="/contact" class="block sm:inline hover:text-white font-medium order-2 text-xl p-2">Contact us</a>
        </div>
      </nav>
      <div v-if="frontmatter.isHome" class="flex flex-col items-center gap-6 pb-[3em]">
        <img src="/assets/logo-hero.png" alt="logo" class="w-full max-w-[800px] p-5">
        <div class="flex gap-6">
          <a href="https://fb.me/AOBSharp" target="_blank"><img src="./facebook.svg" alt="Facebook" class="w-8 h-8 hover:opacity-60" style="filter: brightness(0) invert(1)"></a>
          <a href="https://www.instagram.com/AOBSharp" target="_blank"><img src="./instagram.svg" alt="Instagram" class="w-8 h-8 hover:opacity-60" style="filter: brightness(0) invert(1)"></a>
          <a href="https://www.youtube.com/@akademiskais-orkestris-b-sharp" target="_blank"><img src="./youtube.svg" alt="YouTube" class="w-8 h-8 hover:opacity-60" style="filter: brightness(0) invert(1)"></a>
        </div>
      </div>
    </div>
  </div>

  <div class="body p-[1em] bg-white min-h-[300px] pt-[3em]">
    <div class="max-w-[1000px] m-auto">
      <div class="prose prose-base mx-auto p-8 max-w-none">
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
