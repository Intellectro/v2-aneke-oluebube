<script setup>
    import { reactive, ref } from "vue";

    const customScrollStyle = reactive({
        scrollbarWidth: "thin",
    });
</script>

<template>
    <div class="w-screen h-screen overflow-x-hidden overflow-y-auto bg-primary" :style="customScrollStyle">
        <slot />
    </div>
</template>