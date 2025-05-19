<script setup>
    import { FeGithub, CoBrandTiktok, CoBrandLinkedinIn, MdOutlinedWhatsapp, CoBrandMinutemailer, BxSolidPhoneCall } from '@kalimahapps/vue-icons';
</script>

<template>
    <div class="hidden md:block fixed left-[4%] bottom-0">
        <div class="flex flex-col items-center gap-y-5">
            <a href="https://github.com/intellectro">
                <FeGithub class="text-[19px]" />
            </a>
            <a href="https://tiktok/@dev.ai">
                <CoBrandTiktok class="text-[19px]" />
            </a>
            <a href="https://linkedin/in/dev-ai">
                <CoBrandLinkedinIn class="text-[19px]" />
            </a>
            <a href="https://wa.me/+2347036616087">
                <MdOutlinedWhatsapp class="text-[19px]" />
            </a>
            <a href="tel:+2347036616087">
                <BxSolidPhoneCall class="text-[19px]" />
            </a>
            <div class="w-[1px] h-[100px] bg-primary-text"></div>
        </div>
    </div>
</template>

<style scoped>
    a{
        color: var(--color-primary-text);
    }
    a:hover {
        color: var(--color-secondary);
        transform: translateY(-3px);
        transition: all 200ms linear;
    }
</style>