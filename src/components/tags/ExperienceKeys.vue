<script setup>
import { inject, watch } from 'vue';

    defineProps({
        projectKeys: {
            type: Array,
            default: []
        }
    });
    const emit = defineEmits(["keyIndexHandler"]);
    const indexValue = inject("indexval");
</script>

<template>
    <div @click="(e) => $emit('keyIndexHandler', e)" v-for="data in projectKeys" :key="data.id" :data-id="data.id" :class="['py-3 px-4 hover:bg-light-primary text-primary-text hover:text-secondary ', indexValue === data.id ? 'key-tag-elem' : '']">
        <div class="text-[13.5px] whitespace-nowrap font-mono uppercase">{{data._title}}</div>
    </div>
</template>

<style scoped>
    @import url("../../assets/css/liststyle.css");
</style>