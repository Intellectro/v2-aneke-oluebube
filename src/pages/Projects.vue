<script setup>
import { useStore } from 'vuex';
import { Button, Dermacator, ProjectCard } from '../components';
import { computed, reactive } from 'vue';

const store = useStore();
const SLICERSVALUE = reactive({
    start: 0,
    final: 5
});
const personalProjects = computed(() => store.getters.personalProjectsHandler);

const slicedPersonalProjects = personalProjects.value?.slice(SLICERSVALUE.start, SLICERSVALUE.final);

const handleRedirect = () => {
    window.open("/my/projects", "_blank");
}
</script>

<template>
    <div class="pt-20" id="projects">
        <div class="flex flex-col gap-y-10">
            <Dermacator _title="Some Things I've Built" _titleIndex="03."  />
            <div class="flex flex-col gap-y-2">
                <div class="flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-24">
                    <ProjectCard v-for="(data, index) in slicedPersonalProjects" :key="index" v-bind="data" />
                </div>
                <Button class="self-end" @handleRedirect="handleRedirect" text="View More Personal Projects"  />
            </div>
        </div>
    </div>
</template>