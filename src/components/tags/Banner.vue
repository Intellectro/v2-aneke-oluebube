<script setup>
    import { useMotion } from '@vueuse/motion';
    import { Button, LeftStickTag, RightStickTag } from '..';
    import { isProxy, onMounted, onUnmounted, useTemplateRef } from 'vue';

    const firstTextTag = useTemplateRef("firstTag");
    const secTextTag = useTemplateRef("secTag");
    const thirdTextTag = useTemplateRef("thirdTag");
    const fourthTextTag = useTemplateRef("fourthTag");
    const buttonTag = useTemplateRef("btnTag");

    const refTags = [firstTextTag, secTextTag, thirdTextTag, fourthTextTag, buttonTag];

    const handleCourse = () => {
        window.open("https://github.com/Intellectro?tab=repositories", "_blank");
    }

    const handleTextAnimation = (_target, _delay) => {
        useMotion(_target, {
            initial: {
                y: 30,
                opacity: 0
            },
            visibleOnce: {
                y: 0,
                opacity: 1,
                transition: {
                    ease: "linear",
                    delay: _delay
                }
            }
        });
    }


    onMounted(() => {
        refTags.forEach((_ref, index) => {
            handleTextAnimation(isProxy(_ref.value) ? _ref.value._btnRef : _ref.value, index * 200);
        });
    });

</script>

<template>
    <div class="w-full">
        <div class="flex flex-col gap-y-5">
            <div class="flex flex-col gap-y-4">
                <div class="text-[17px] text-secondary font-[550] font-mono" ref="firstTag">Hi, my name is</div>
                <div class="flex flex-col gap-y-3 md:block leading-none md:leading-20">
                    <div class="text-[35px] leading-9 md:leading-none md:text-[48px] lg:text-[50px] xl:text-[65px] font-name text-primary-text" ref="secTag">Oluebube Aneke</div>
                    <div class="text-[35px] tracking-tight leading-9 md:leading-none md:text-[48px] lg:text-[55px] xl:text-[75px] font-sec font-bold text-primary-dim" ref="thirdTag">I build things for the web.</div>
                </div>
                <div class="text-[15px] md:text-[16px] font-primary font-[550] text-slate-400 w-full lg:w-2/4" ref="fourthTag">I craft accessible, pixel-perfect digital experiences that blend performance, aesthetics, and usability. With a keen eye for detail and a commitment to clean, maintainable code, I build seamless web applications that prioritize both user experience and technical excellence.</div>
            </div>
            <Button text="Check Out My Project!" ref="btnTag" class="self-start" @handleRedirect="handleCourse" />
        </div>
        <LeftStickTag />
        <RightStickTag />
    </div>
</template>