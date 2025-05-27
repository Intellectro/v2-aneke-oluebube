<script setup>
import { computed, onMounted, ref } from 'vue';
import { Loader as ViewLoader } from './components';
import { useStore } from 'vuex';

  const pageIsLoading = ref(true);
  const isPhoneView = ref(false);

  const store = useStore();

  const matchMediaHandler = window.matchMedia("(max-width: 768px)");

  const desktopRef = computed(() => store.getters.desktopRefHandler);
  const phoneRef = computed(() => store.getters.phoneRefHandler);

  const pageLoadingHandler = () => pageIsLoading.value = false;

  matchMediaHandler.addEventListener("change", (e) => {
    isPhoneView.value = e.matches;
  });

  const handleIsLoading = () => {
    if (isPhoneView.value) {
      phoneRef.value.addEventListener("animationend", pageLoadingHandler);      
      return;
    }
    desktopRef.value.addEventListener("animationend", pageLoadingHandler);
  }

  const visibilityHandler = () => {
    if (document.visibilityState === "hidden") {
      document.body.classList.add("freeze");
    }else {
      document.body.classList.remove("freeze");
    }
  }

  document.addEventListener("visibilitychange", visibilityHandler);

  onMounted(() => handleIsLoading());


</script>

<template>
  <router-view v-if="!pageIsLoading" />
  <ViewLoader v-if="pageIsLoading" />
</template>