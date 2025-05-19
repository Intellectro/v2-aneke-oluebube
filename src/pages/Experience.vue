<script setup>
import { Dermacator } from '../components';
import {customScrollStyle} from "~/composables/useCustomScrollStyle.js";

const {customStyled} = customScrollStyle();

</script>

<template>
    <div class="pt-20" id="experience">
        <div class="w-full lg:w-[80%] mx-auto flex flex-col gap-y-8 md:gap-y-10">
            <Dermacator _titleIndex="02." _title="Experience" />
            <div class="flex w-full flex-col md:flex-row">
                <div class="w-full md:w-[30%] h-[40px] bg-red-500 overflow-auto">
                    <div class="w-full overflow-y-hidden overflow-x-auto" :style="customStyled">
                        <div class="w-fit">
                            
                        </div>
                    </div>
                </div>
                <div class="w-[70%]"></div>
            </div>
        </div>
    </div>
</template>