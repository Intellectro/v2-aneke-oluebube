<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { CgMenuLeft } from "@kalimahapps/vue-icons";
import { Button } from "..";

const store = useStore();

const routers = computed(() => store.getters.routesData);

const handleRoute = () => {
    location.href = "/Oluebube Aneke Resume-1.pdf";
};


defineEmits(["handleSidebarToggle"]);
</script>

<template>
    <div class="w-full py-8 px-5 md:px-10 lg:px-14">
        <div class="flex items-center justify-between">
            <div class="w-[40px] h-[40px] relative z-1">
                <svg
                    id="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 84 96">
                    <title>O => Oluebube Aneke</title>
                    <g transform="translate(-8.000000, -2.000000)">
                        <g transform="translate(11.000000, 5.000000)">
                            <!-- Hexagon -->
                            <polygon
                                id="Shape"
                                stroke="#64ffda"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                points="39 0 0 22 0 67 39 90 78 68 78 23" />

                            <!-- Perfect Circular "O", centered at x=39, y=48 -->
                            <path
                                fill="#64ffda"
                                d="
          M39,30
          A18,18 0 1,1 38.999,30
          Z
          M39,38
          A10,10 0 1,0 39,58
          A10,10 0 1,0 39,38
          Z" />
                        </g>
                    </g>
                </svg>
                <svg class="absolute top-0 left-0 -z-1" id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Oluebube Aneke</title><g transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><polygon stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23" fill="#64ffda"></polygon></g></g></svg>
            </div>
            <div class="flex gap-x-8 items-center">
                <div class="flex gap-x-7 items-center">
                    <a
                        class="no-underline hidden md:flex gap-x-1 items-center"
                        v-for="(data, index) in routers"
                        :href="data._path"
                        :key="index">
                        <span class="text-[14px] font-mono text-secondary">{{
                            "0" + data.id + "."
                        }}</span>
                        <span
                            class="text-[14.5px] font-mono tracking-wide text-primary-text"
                            >{{ data._name }}</span
                        >
                    </a>
                </div>
                <CgMenuLeft
                    @click="() => $emit('handleSidebarToggle')"
                    class="text-secondary block md:hidden font-bold text-[40px]" />
                <Button class="hidden md:flex" text="Resume" @handleRedirect="handleRoute" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import url("~/assets/css/navbar.css");
</style>