<script setup>
import place from '../../assets/place-marker.svg'
import clock from '../../assets/clock.svg'

const props = defineProps({
    placeTitle: {
        type: String,
        required: true,
    },
    placeAddress: {
        type: String,
        required: true,
    },
    arrive: {
        type: String,
        required: false,
    },
    depart: {
        type: String,
        required: false,
    },
    last: {
        type: Boolean,
        required: false,
    },
})
</script>

<template>
    <div class="flex flex-row gap-2 text-xs md:text-sm lg:text-base">
        <div class="relative overflow-hidden">
            <img :src="place" width="20" alt="place" />
            <div :class="last ? 'none' : 'vertical-line'"></div>
        </div>
        <div class="flex flex-row gap-2 items-center w-1/2 mb-6">
            <div class="flex gap-1 whitespace-nowrap">
                {{ placeTitle }}
            </div>
            <span class="text-slate-400 truncate">
                {{ placeAddress }}
            </span>
        </div>

        <div class="flex flex-row gap-2 items-center w-1/2 mb-6 justify-end">
            <div v-if="arrive" class="flex flex-row gap-1 items-center w-1/2">
                <img class="w-5 md:w-7" :src="clock" alt="" />
                <p>Arrive: {{ arrive }}</p>
            </div>
            <div v-else class="w-1/2"></div>
            <div class="flex flex-row gap-1 items-center">
                <img class="w-5 md:w-7" :src="clock" alt="" />
                <p>Depart: {{ depart }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.vertical-line {
    border: 1px solid #172554;
    width: 1px;
    height: 100%;
    background-color: #172554;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}
</style>
