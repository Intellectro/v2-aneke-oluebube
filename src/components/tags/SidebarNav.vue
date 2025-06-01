<script setup>
    import { PrTimes } from '@kalimahapps/vue-icons';
    import { computed, onMounted, useTemplateRef } from 'vue';
    import { useStore } from 'vuex';
    import { Button } from '..';

    const store = useStore();

    const routesData = computed(() => store.getters.routesData);
    const sidebarStatus = computed(() => store.getters.isSidebarStatus);

    const btnRef = useTemplateRef("btnref");

    const handleRedirect = () => {
        location.href = "/Oluebube Aneke Resume-1.pdf";
    }

    onMounted(() => {
        btnRef.value._btnRef.addEventListener("click", handleRedirect);
    });
    
    onMounted(() => {
        btnRef.value._btnRef.removeEventListener("click", handleRedirect);
    });

    const handleSideBarClose = () => {
        store.dispatch("showSideNavbarHandler", false);
    }
</script>

<template>
    <div class="fixed right-0 top-0 h-screen z-10 w-[70%] bg-light-primary py-4 px-5 before:absolute before:left-[-40%] before:top-0 before:w-[40%] before:h-full before:backdrop-blur-[5px] transition-all ease-linear duration-300" :class="{'translate-x-[200%]': !sidebarStatus, 'translate-x-0': sidebarStatus}">
        <div class="flex flex-col gap-y-8">
            <div class="self-end">
                <PrTimes @click="handleSideBarClose" class="text-secondary text-[45px]" />
            </div>
            <div class="self-center flex flex-col gap-y-7">
                <div class="flex flex-col gap-y-7">
                    <div :data-route-id="data._path" class="flex flex-col items-center leading-6 text-secondary" v-for="(data, index) in routesData" :key="index">
                        <div class="text-[16.5px] font-mono">{{"0" + data.id + "."}}</div>
                        <div class="text-[15px] font-mono font-light text-primary-text">{{data._name}}</div>
                    </div>
                </div>
                <Button ref="btnref" text="Resume" class="px-12 py-2" />
            </div>
        </div>
    </div>
</template>