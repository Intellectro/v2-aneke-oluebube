<script setup>
    import { onMounted, ref, useTemplateRef, watch } from "vue";
    import { useStore } from "vuex";
    import {customScrollStyle} from "~/composables/useCustomScrollStyle.js";

    const store = useStore();
    const scrollRef = useTemplateRef("scrollElem");
    const scrollValue = ref(0);

    const {customStyled} = customScrollStyle();

    const scrollHandler = (e) => {
        const scrollTop = e.currentTarget.scrollTop;
        scrollValue.value = scrollTop;
    }

    watch(() => scrollValue.value, (newV, prevV) => {
        if (newV == 0) {
            store.dispatch("isSlideNavHandler", false);
        }else if (prevV > newV) {
            store.dispatch("isSlideNavHandler", true);
        }else {
            store.dispatch("isSlideNavHandler", false);
        }
    });

    onMounted(() => {
        scrollRef.value.addEventListener("scroll", scrollHandler);
    });
</script>

<template>
    <div ref="scrollElem" class="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary" :style="customStyled">
        <slot />
    </div>
</template>