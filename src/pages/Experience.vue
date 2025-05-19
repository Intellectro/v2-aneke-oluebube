<script setup lang="ts">
import { reactive } from 'vue';
import { Dermacator } from '../components';

const customStyled = reactive({
    scrollbarWidth: "thin"
})

</script>

<template>
    <div class="pt-20" id="experience">
        <div class="w-full lg:w-[80%] mx-auto flex flex-col gap-y-8 md:gap-y-10">
            <Dermacator _titleIndex="02." _title="Experience" />
            <div class="flex w-full">
                <div class="w-full h-[40px] bg-red-500 overflow-auto" :style="customStyled">
                    
                </div>
                <div class="w-[70%]"></div>
            </div>
        </div>
    </div>
</template>