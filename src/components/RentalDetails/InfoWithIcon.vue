<script setup>

const props = defineProps({
    text: {
        required: true,
    },
    icon: {
        required: true,
    },
})
</script>

<template>
    <div class="flex gap-2">
        <img :src="icon" width="20" alt="" />
        <p>{{ text }}</p>
    </div>
</template>
