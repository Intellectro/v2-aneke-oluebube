<script setup>
import { PageScreen, PageScroller, Container, Navbar, ContentsWrapper, Banner } from './components';
import { About, Experience } from "./pages";

</script>


<template>
  <PageScreen>
     <PageScroller>
         <Navbar />        
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