<script setup>
import { useStore } from 'vuex';
import { PageScreen, PageScroller, Container, Navbar, ContentsWrapper, Banner, SlideDownNav } from '../components';
import { About, Experience, Vprojects } from "../pages";
import { computed } from 'vue';
import { useHead } from '@vueuse/head';

const store = useStore();

const isSlideValue = computed(() => store.getters.isSlideCurrentValue);

useHead({
  title: "Aneke Oluebube - Dev Intellectro",
  meta: [
    {name: "description", content: "I’m a Fullstack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability."},
    {name: "author", content: "Aneke Oluebube Samuel"},
    {name: "keywords", content: "Backend-Developer, Frontend-Developer, SEO engineer, Cloud-computing"},
    {property: "og:title", content: "Dev Intellectro's Portfolio"},
    {property: "og:description", content: "I’m a Fullstack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering."},
    {property: "og:image", content: "/android-chrome-512x512.png"},
    {property: "og:url", content: "/"},
    {property: "og:type", content: "Portfolio Website"},
    {name: "twitter:card", content: "summary_large_image"},
    {name: "twitter:title", content: "Dev Intellectro's Portfolio"},
    {name: "twitter:description", content: "I’m a Fullstack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering."},
    {name: "twitter:image", content: "/android-chrome-512x512.png"},
    {name: "twitter:site", content: "@devintellectro"},
    {name: "theme-color", content: "#0a192f"}
  ]
});

</script>


<template>
  <PageScreen>
     <PageScroller>
         <Navbar v-show="!isSlideValue" />
         <SlideDownNav v-show="isSlideValue" />
        <Container>
            <ContentsWrapper>
                <Banner />
                <About />
                <Experience />
                <Vprojects />
            </ContentsWrapper>
        </Container>
    </PageScroller>
  </PageScreen>
</template>