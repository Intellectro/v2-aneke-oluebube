<script setup>
    defineProps({
        contents: {
            type: Array,
            default: []
        }
    });
</script>


<template>
    <div class="flex flex-col gap-y-4" v-for="data in contents" :key="data.id">
        <div class="flex flex-col gap-y-1">
            <div class="text-[15px] md:text-lg font-[400] font-sec text-primary-text">{{data._role}} <a :href="data._linksRef._path" class="text-secondary relative before:w-0 before:absolute before:left-0 before:bottom-0 before:h-[1px] hover:before:w-full before:transition-all before:bg-secondary before:ease-linear before:duration-300">@ {{ data._linksRef._name }}</a></div>
            <div class="text-[14px] md:text-[15.5px] text-primary-dim font-mono">{{data._duration}}</div>
        </div>
        <div class="flex flex-col gap-y-2" v-for="(content, index) in data._contents" :key="index">
            <div class="list-bicon text-[14px] md:text-[15.5px] font-primary text-primary-dim px-3 relative">{{content}}</div>
        </div>
    </div>
</template>

<style scoped>
    @import url("../../assets/css/liststyle.css");
</style>