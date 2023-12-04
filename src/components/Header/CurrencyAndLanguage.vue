<script setup>
const props = defineProps({
    label: {
        required: true,
    },
    image: {
        required: true,
    },
})
</script>
<template>
    <div class="flex flex-row gap-2 cursor-pointer text-xs text-gray-600 hover:text-gray-950 active:text-gray-400 transition-all duration-200 ease-in-out">
        <div class="pt-0.5">{{ label }}</div>
        <img width="20" :src="image" alt="" />
    </div>
</template>
