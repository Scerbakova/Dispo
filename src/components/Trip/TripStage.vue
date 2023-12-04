<script setup>
import { computed } from 'vue'
import blueCheck from '../../assets/checkmark-circle-blue.svg'
import grayCheck from '../../assets/checkmark-circle-gray.svg'

const props = defineProps({
    isStepStarted: Boolean,
    stepName: String,
    date: String | undefined,
    time: String | undefined,
})

const picture = computed(() => {
    return props.isStepStarted ? blueCheck : grayCheck
})
const textColor = computed(() => {
    return props.isStepStarted ? 'text-blue-950' : 'text-stone-600'
})
</script>

<template>
    <div :class="textColor" class="flex gap-1 mb-2 truncate">
        <img class="mr-4" width="20" :src="picture" alt="" />
        <p>{{ stepName }}</p>
        <p v-if="date || time">-</p>
        <p class="text-stone-400" v-if="date">{{ date }}</p>
        <p class="text-stone-400 truncate" v-if="time">at {{ time }}</p>
    </div>
</template>
