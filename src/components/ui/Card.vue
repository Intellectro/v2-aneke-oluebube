<script setup>
import { onMounted, onUnmounted, useTemplateRef } from 'vue';
import { BsFolder, CoExternalLink, ChGithub } from '@kalimahapps/vue-icons';

defineProps({
    isPublic: {
        type: Boolean,
        default: false
    }
});

    const cardRef = useTemplateRef("cardInnerRef");

    const handleRedirect = () => {
        if (cardRef.value.dataset.url) {
            window.open(cardRef.value.dataset.url, "_blank");
        }
    }

    onMounted(() => {
        cardRef.value.addEventListener("click", handleRedirect);
    });

    onUnmounted(() => {
        cardRef.value.removeEventListener("click", handleRedirect);
    });
</script>

<template>
    <div class="w-full h-fit py-3 px-4" ref="cardInnerRef" data-url="https://google.com">
        <div class="flex flex-col gap-y-4">
            <div class="flex justify-between items-center">
                <BsFolder />
                <div class="flex items-center">
                    <div v-show="isPublic">
                        <ChGithub />
                    </div>
                    <CoExternalLink />
                </div>
            </div>
            <div class="text-[18px] font-[550] text-primary-text"></div>
        </div>
    </div>
</template>