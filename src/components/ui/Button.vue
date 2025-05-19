<script setup>
    defineProps({
        text: {
            type: String,
            default: ""
        }
    });

    const emit = defineEmits(["handleRedirect"]);

    const handleRedirect = () => emit("handleRedirect");
</script>

<template>
    <button @click="handleRedirect" class="transparent py-[6px] px-4 rounded text-[14px] border border-secondary text-secondary font-mono">
        {{text}}
    </button>
</template>

<style scoped>
    button:hover {
        box-shadow: 3px 3px 0px var(--color-secondary);
        cursor: pointer;
        transform: translate(-1px, -3px);
        transition: all 100ms linear;
    }
</style>