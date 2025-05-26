<script setup>
import { onMounted, ref } from 'vue';
import { Loader as ViewLoader } from './components';

  const pageIsLoading = ref(true);

  const handleIsLoading = () => {
    setTimeout(() => {
      pageIsLoading.value = false;
    }, 5000);
  }

  onMounted(() => handleIsLoading());


</script>

<template>
  <router-view v-if="!pageIsLoading" />
  <ViewLoader v-if="pageIsLoading" />
</template>