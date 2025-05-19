<script setup>
import { useStore } from 'vuex';
import { PageScreen, PageScroller, Container, Navbar, ContentsWrapper, Banner, SlideDownNav } from './components';
import { About, Experience } from "./pages";
import { computed } from 'vue';

const store = useStore();

const isSlideValue = computed(() => store.getters.isSlideCurrentValue);

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
            </ContentsWrapper>
        </Container>
    </PageScroller>
  </PageScreen>
</template>