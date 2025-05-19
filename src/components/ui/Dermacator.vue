<script setup>
    defineProps({
        _titleIndex: {
            type: String,
            default: "01."
        },
        _title: {
            type: String,
            default: "Title"
        }
    });
</script>

<template>
    <div class="flex items-center">
        <div class="flex items-center gap-x-3">
            <div class="text-[20px] font-mono text-secondary">{{_titleIndex}}</div>
            <div class="text-[18px] md:text-[25px] font-name text-primary-text">{{_title.toLowerCase() === "aboutme" ? _title.slice(0, 5) + " - " + _title.slice(_title.toLowerCase().indexOf("m"), _title.length) : _title}}</div>
        </div>
        <div class="w-[30%] ml-2 relative md:w-[70%] lg:w-[50%] h-[1px] lg:ml-3 bg-primary-text"></div>
    </div>
</template>