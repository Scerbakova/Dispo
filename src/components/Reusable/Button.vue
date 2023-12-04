<script setup>
import { computed } from 'vue'

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    onClick: {
        type: Function,
        required: true,
    },
    isBlue: {
        type: Boolean,
        default: false,
    },
    isWithGreyBorder: {
        type: Boolean,
        default: false,
    },
})

const color = computed(() =>
    props.isBlue ? 'bg-blue-950 text-white' : 'bg-transparent'
)
const width = computed(() =>
    props.isBlue || props.isWithGreyBorder ? 'w-48' : ''
)
const border = computed(() =>
    props.isWithGreyBorder ? 'border border-stone-400 border-solid' : ''
)
const hover = computed(() =>
    props.isBlue
        ? 'hover:bg-blue-400'
        : props.isWithGreyBorder
        ? 'hover:bg-stone-400'
        : 'hover:text-blue-400'
)
</script>

<template>
    <button
        @click="onClick"
        :class="[
            color,
            width,
            border,
            hover,
            'py-2 text-center rounded-3xl cursor-pointer transition-all duration-300 ease-in-out active:scale-90',
        ]"
    >
        {{ label }}
    </button>
</template>
