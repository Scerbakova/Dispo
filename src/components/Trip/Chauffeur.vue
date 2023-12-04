<script setup>
import TripStage from './TripStage.vue'
import chauffeur from '../../assets/chauffeur.png'
import star from '../../assets/star.svg'
import phone from '../../assets/phone-call.svg'
import finland from '../../assets/flag-fi.svg'
import france from '../../assets/flag-fr.svg'
import germany from '../../assets/flag-gr.svg'

const tripStages = [
    {
        isStepStarted: true,
        stepName: 'Waiting chauffeur',
        date: '14.06.2022',
        time: '12:32',
    },
    {
        isStepStarted: true,
        stepName: 'Chauffeur assigned',
        date: '14.06.2022',
        time: '12:32',
    },
    {
        isStepStarted: true,
        stepName: 'Started',
        date: '14.06.2022',
        time: '12:32',
    },
    {
        isStepStarted: false,
        stepName: 'Trip in progress',
        date: '',
        time: '',
    },
    {
        isStepStarted: false,
        stepName: 'Finished',
        date: '',
        time: '',
    },
]
const flags = [finland, france, germany]
const chauffeurInfoContainer =
    'w-full flex flex-col items-center lg:items-start'
</script>
<template>
    <div class="self-center md:m-16 mr-0 w-10/12 lg:w-5/12">
        <div class="flex">
            <div :class="chauffeurInfoContainer">
                <span class="text-blue-400 text-xs">Active</span>
                <h3 class="text-xl font-bold mb-2">Chauffeur</h3>
                <img width="130" class="rounded-xl" :src="chauffeur" alt="" />
                <p class="mt-2 font-bold">Adam Lopoto</p>
                <div class="flex gap-3">
                    <img width="20" :src="star" alt="rate" />
                    <span class="pt-1">4.8</span>
                </div>
            </div>
            <div class="border border-solid border-stone-300 mx-8"></div>
            <div :class="chauffeurInfoContainer">
                <div class="flex gap-3 mb-4">
                    <img
                        width="20"
                        v-for="(flag, index) in flags"
                        :src="flag"
                        alt=""
                        :key="index"
                    />
                </div>
                <div class="flex flex-col gap-1 mb-4">
                    <p class="text-sm text-stone-600">Name of carrier</p>
                    <p>Bambam SIA</p>
                </div>
                <div class="flex flex-col gap-1 mb-4">
                    <p class="text-sm text-stone-600">National reg.nb.</p>
                    <p>"Miranda"</p>
                </div>
                <img
                    width="60"
                    class="rounded-xl hover:opacity-80 cursor-pointer"
                    :src="phone"
                    alt=""
                />
            </div>
        </div>
        <div class="mt-8 flex flex-col items-center">
            <div>
                <TripStage
                    v-for="{
                        isStepStarted,
                        stepName,
                        date,
                        time,
                    } in tripStages"
                    :isStepStarted="isStepStarted"
                    :stepName="stepName"
                    :date="date"
                    :time="time"
                />
            </div>
        </div>
    </div>
</template>
