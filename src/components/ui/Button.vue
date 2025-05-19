<script setup>
import { useTemplateRef } from 'vue';

    defineProps({
        text: {
            type: String,
            default: ""
        }
    });

    const btnTag = useTemplateRef("btnref");

    const emit = defineEmits(["handleRedirect"]);

    const handleRedirect = () => emit("handleRedirect");

    defineExpose({
        _btnRef: btnTag
    });

</script>

<template>
    <button @click="handleRedirect" ref="btnref" class="transparent py-[6px] px-4 rounded text-[14px] border border-secondary text-secondary font-mono">
        {{text}}
    </button>
</template>

<style scoped>
    button:hover {
        box-shadow: 3px 3px 0px var(--color-secondary);
        cursor: pointer;
        transform: translate(-1px, -3px) !important;
        transition: all 100ms linear;
    }
</style>