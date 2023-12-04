<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
    to: {
        required: true,
    },
    label: {
        required: true,
    },
})
const router = useRoute()
const isActive = computed(() => router.path === props.to)
</script>
<template>
    <router-link
        :to="to"
        class="text-black hover:text-blue-700 transition-all duration-200 ease-in-out"
        :class="{ 'text-blue-500': isActive }"
    >
        {{ label }}
    </router-link>
</template>
