<script setup>
import { useStore } from 'vuex';
import { Dermacator, ExperienceContent, ExperienceKey } from '../components';
import {customScrollStyle} from "~/composables/useCustomScrollStyle.js";
import { computed, provide, ref, watch } from 'vue';

const {customStyled} = customScrollStyle();

const indexKeyHolder = ref(1);
const _listTagWidth = ref(180);
const indexVal = ref(1);

const store = useStore();

const projectKeys = computed(() => store.getters.projectDataKeys);
const projectContents = computed(() => store.getters.projectDataContents);

let activeContents = ref([projectContents.value[indexKeyHolder.value - 1]]);

const keyIndexHandler = (e) => {
    const keyHandler = e.currentTarget;
    const _keyInnerWidth = keyHandler.offsetWidth;
    const {dataset: {id}} = keyHandler;
    indexKeyHolder.value = +id;
    indexVal.value = +id;
    _listTagWidth.value = _keyInnerWidth;
}


watch(() => indexKeyHolder.value, (newx) => {
    const filterContent = projectContents.value.filter(({id}) => Object.is(+id, +newx));
    activeContents.value = filterContent;
});

const indexValueChecker = computed(() => indexVal.value);

provide("indexval", indexValueChecker);

</script>

<template>
    <div class="pt-20" id="experience">
        <div class="w-full lg:w-[70%] mx-auto flex flex-col gap-y-8 md:gap-y-10">
            <Dermacator _titleIndex="02." _title="Experience" />
            <div class="flex w-full flex-col gap-x-4 gap-y-6 md:flex-row">
                <div class="w-full md:w-[35%] overflow-auto">
                    <div class="flex flex-col gap-y-11">
                        <div class="scrollbar-bar w-full overflow-y-hidden overflow-x-auto relative" :style="{...customStyled, '--current-pos': ((indexKeyHolder - 1) * 20) + '%', '--projects-length': projectKeys.length, '--active-tag-width': _listTagWidth + 'px'}">
                            <div class="w-fit md:w-full">
                                <div class="flex flex-row md:flex-col gap-y-1 w-full">
                                    <ExperienceKey @keyIndexHandler="keyIndexHandler" :projectKeys="projectKeys" />
                                </div>
                            </div>
                        </div>
                        <div class="text-[13px] font-mono font-bold text-secondary relative before:absolute before:left-0 before:bottom-[-1%] before:w-0 before:h-[1px] hover:before:w-full before:transition-all before:duration-300 before:ease-linear before:bg-secondary text-center">
                            <router-link to="/view/projects">View More Completed Projects</router-link>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-[65%] mt-2 relative">
                    <ExperienceContent :contents="activeContents" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url("../assets/css/liststyle.css");
    .zip-container {
        position: relative;
        width: 300px;
        height: 100px;
        overflow: hidden;
        border: 2px solid #ccc;
        font-family: sans-serif;
    }

    .zip-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
            45deg,
            #444,
            #444 5px,
            #666 5px,
            #666 10px
        );
        transition: clip-path 0.6s ease-in-out;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); /* fully covered */
        z-index: 2;
    }

    .zip-cover.unzip {
        clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%); /* zipped open */
    }

    .zip-content {
        position: absolute;
        width: 100%;
        height: 100%;
        background: white;
        color: black;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
</style>