<script setup>
    import { FeGithub } from '@kalimahapps/vue-icons';
    import { CgLink } from '@kalimahapps/vue-icons';
    import { ErrorBreak } from '~/assets/images';

    defineProps({
        id: {
            type: Number,
            default: 0
        },
        _default_title: {
            type: String,
            default: "Personal Projects"
        },
        _title: {
            type: String,
            default: ""
        },
        _content: {
            type: String,
            default: ""
        },
        _langs: {
            type: Array,
            default: [""]
        },
        _links: {
            type: Array,
            default: [{_path: "#", _name: "#"}]
        },
        image: {
            type: String,
            default: ""
        }
    });
</script>


<template>
    <div :class="['relative hidden lg:flex flex-wrap items-center', id % 2 === 0 ? 'flex-row-reverse' : 'flex-row']">
        <div class="flex-1 w-full h-[350px] z-1 bg-secondary overflow-hidden group relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 hover:after:h-20 after:-z-1 after:bg-light-primary before:absolute before:w-full before:h-10 hover:before:h-20 before:bg-light-primary before:top-0 before:left-0 before:-z-1">
            <img
                class="w-full h-full mix-blend-multiply hover:mix-blend-normal object-contain object-center scale-125 group-hover:scale-100 transition-transform duration-500 ease-in-out"
                :src="image"
                :alt="image.split('/').pop().split('.')[0]"
            />
        </div>
        <div class="flex-1 w-full">
            <div class="flex flex-col gap-y-3">
                <div :class="['flex flex-col leading-7', id % 2 === 0 ? 'text-left' : 'text-right']">
                    <div class="md:text-[15.5px] font-mono text-secondary">{{_default_title}}</div>
                    <div class="md:text-[26px] font-sec font-[550] text-primary-text capitalize" v-html="_title" />
                </div>
                <div :class="['py-6 w-full font-primary font-[500] bg-light-primary text-primary-text relative z-2', id % 2 === 0 ? 'after:absolute after:right-[-8%] after:top-0 after:h-full after:w-[65px] after:bg-light-primary after:-z-1 after:rounded-lg text-left pl-5' : 'before:absolute before:left-[-8%] before:top-0 before:rounded-lg before:h-full before:w-[65px] before:bg-light-primary before:-z-1 text-right pr-5']">{{_content}}</div>
                <div class="flex flex-col text-right gap-y-2">
                    <div :class="['flex flex-wrap gap-x-4 leading-6 items-center', id % 2 === 0 ? 'justify-start' : 'justify-end']">
                        <div class="text-[15px] font-[550] font-mono text-primary-text" v-for="(_lang, index) in _langs" :key="index">{{ _lang }}</div>
                    </div>
                    <div :class="['flex gap-x-4 items-center', id % 2 === 0 ? 'justify-start' : 'justify-end']">
                        <FeGithub class="text-2xl font-bold text-primary-text cursor-pointer hover:text-secondary" />
                        <CgLink class="text-[28px] font-bold text-primary-text cursor-pointer hover:text-secondary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mobile-project-card block lg:hidden w-full py-6 px-4" :style="{background: `linear-gradient(rgba(17, 34, 64, 0.9),rgba(17, 34, 64, 0.9)), url(${image})`}">
        <div class="flex flex-col gap-y-6">
            <div class="flex flex-col">
                <div class="text-[15px] md:text-[15.5px] font-mono text-secondary">{{_default_title}}</div>
                <div class="text-[22px] md:text-[23px] font-sec font-[550] text-primary-text capitalize" v-html="_title" />
            </div>
            <div class="flex flex-col">
                <div class="text-[15px] text-primary-text">{{_content}}</div>
            </div>
            <div class="flex flex-col text-right gap-y-2">
                <div class="flex flex-wrap gap-x-4 leading-6 items-center">
                    <div class="text-[15px] font-[550] font-mono text-primary-text" v-for="(_lang, index) in _langs" :key="index">{{ _lang }}</div>
                </div>
                <div class="flex gap-x-4 items-center">
                    <FeGithub class="text-2xl font-bold text-primary-text cursor-pointer hover:text-secondary" />
                    <CgLink class="text-[28px] font-bold text-primary-text cursor-pointer hover:text-secondary" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mobile-project-card {
        --project-image: '';
        background-position: center !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
    }
</style>