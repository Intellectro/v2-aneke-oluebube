<script setup>
import { useStore } from 'vuex';
import { Dermacator, ExperienceContent, ExperienceKey } from '../components';
import {customScrollStyle} from "~/composables/useCustomScrollStyle.js";
import { computed, provide, ref, useTemplateRef, watch } from 'vue';

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
                    <div class="scrollbar-bar w-full overflow-y-hidden overflow-x-auto relative" :style="{...customStyled, '--current-pos': ((indexKeyHolder - 1) * 20) + '%', '--projects-length': projectKeys.length, '--active-tag-width': _listTagWidth + 'px'}">
                        <div class="w-fit md:w-full">
                            <div class="flex flex-row md:flex-col w-full">
                                <ExperienceKey @keyIndexHandler="keyIndexHandler" :projectKeys="projectKeys" />
                            </div>
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
</style>