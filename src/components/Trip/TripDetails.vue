<script setup>
import Carousel from './Carousel.vue'
import Button from '../Reusable/Button.vue'
import Destination from './Destination.vue'
import map from '../../assets/mapPicture.png'

const destinations = [
    {
        placeTitle: 'Riga international airport',
        placeAddress: 'P133, Mārupe, LV-1053',
        arrive: '',
        depart: '16:45',
    },
    {
        placeTitle: 'Lithuania airport',
        placeAddress: 'Road name, LT223, Lithuania',
        arrive: '17:20',
        depart: '19:45',
    },
    {
        placeTitle: 'Lithuania airport',
        placeAddress: 'Road name, LT223, Lithuania',
        arrive: '20:20',
        depart: '21:45',
    },
]

const onButtonClick = () => {}
</script>
<template>
    <div class="flex flex-col w-3/5 m-16 ml-8">
        <div class="flex flex-row justify-center gap-8">
            <Button @click="onButtonClick" label="Trip details" isBlue />
            <Button
                @click="onButtonClick"
                label="Return trip details"
                isWithGreyBorder
            />
        </div>
        <hr class="w-full border border-stone-300 border-solid my-8" />
        <Carousel />
        <Destination
            v-for="(
                { placeTitle, placeAddress, arrive, depart }, index
            ) in destinations"
            :key="index"
            :placeTitle="placeTitle"
            :placeAddress="placeAddress"
            :arrive="arrive"
            :depart="depart"
            :last="index === destinations.length - 1"
        />
        <img :src="map" class="rounded-3xl mt-8" alt="map" />
    </div>
</template>
