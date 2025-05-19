<script setup>
import { useStore } from "vuex";
import { profilePic } from "../assets";
import { Dermacator } from "../components";
import { CaCaretRight } from "@kalimahapps/vue-icons";
import { computed } from "vue";

const store = useStore();

const stacksData = computed(() => store.getters.stacksDataHolder);

</script>

<template>
    <div class="pt-20" id="about">
        <div class="flex flex-col gap-y-10 md:gap-y-15">
            <Dermacator _titleIndex="01." _title="AboutMe" />
            <div class="flex gap-x-4 gap-y-10 flex-col lg:flex-row">
                <div class="flex-[0.6] flex flex-col gap-y-2">
                    <div class="text-[16.5px] font-primary text-primary-text">I'm a skilled software engineer with a passion for developing highly dynamic and user-friendly websites. I've a talent for crafting seamless, interactive interfaces that prioritize user experience, ensuring that visitors can navigate effortlessly across different devices. My expertise spans various modern frameworks like React, Vue, Alpine, Astro, Next and Nuxt on the front end, enabling me to build responsive, fast-loading web applications that keep users engaged.</div>
                    <div class="text-[16.5px] font-primary text-primary-text">Security is a top priority for me, and I ensure to implement deep security protocols to protect websites from evolving threats. From encryption and secure authentication to defending against vulnerabilities like XSS and CSRF, my approach ensures the safety of both the site and its users. I stay up-to-date with the latest cybersecurity trends and integrate these measures to build robust, secure platforms.</div>
                    <div class="text-[16.5px] font-primary text-primary-text">My proficiency extends beyond the front end, with experience in frameworks such as Laravel, Express, and AdonisJs on the back end. This allows me to create scalable, efficient solutions that handle data management and user authentication with ease, while adhering to best practices in code organization and architecture. I'm focused on building long-lasting, secure, and dynamic applications that provide a powerful user experience.</div>
                </div>
                <div class="flex-[0.4]">
                    <div class="w-[70%] mx-auto lg:w-[85%] h-[200px] md:h-[300px] border-2 border-secondary rounded-lg relative">
                        <div class="absolute top-[-5%] left-[-5%] w-full h-full rounded-lg bg-secondary profile-holder">
                            <img role="profile-pic" class="w-full object-cover object-left mx-auto h-full aspect-video rounded-md profile-image" :src="profilePic" :alt="profilePic.split('/').pop().split('.')[0]">
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-2 mt-4">
                        <div class="text-[16.5px] font-primary text-primary-text">Here are a few technologies I’ve been working with recently:</div>
                        <div class="flex flex-wrap gap-x-4">
                            <div v-for="i in Math.round(stacksData.length / 6)" :key="i">
                                <div v-for="(data, index) in stacksData.slice(((i - 1)  * 6), (i * 6))" :key="index" class="flex flex-col gap-y-1">
                                    <div class="flex items-center gap-x-1">
                                        <CaCaretRight class="text-secondary text-[14.5px]" />
                                        <div class="text-[14px] text-primary-text font-[550]">{{data._stack}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .profile-image {
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
    }

    .profile-holder:hover {
        transform: translateY(-2%);
        background: #906d97;
        transition: all 200ms linear;
    }

    .profile-holder:hover .profile-image {
        mix-blend-mode: normal;
        filter: none;
    }
</style>