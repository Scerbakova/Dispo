<script setup>
import TripStage from './TripStage.vue'
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
</script>
<template>
    <div class="m-16 mr-0">
        <div class="flex">
            <div>
                <span class="text-blue-400 text-xs">Active</span>
                <h3 class="text-xl font-bold mb-2">Chauffeur</h3>
                <img
                    width="130"
                    class="rounded-xl"
                    src="src/assets/chauffeur.png"
                    alt=""
                />
                <p class="mt-2 font-bold">Adam Lopoto</p>
                <div class="flex gap-3">
                    <img width="20" src="src/assets/star.svg" alt="rate" />
                    <span class="pt-1">4.8</span>
                </div>
            </div>
            <div class="border border-solid border-stone-300 mx-8"></div>
            <div>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="flex flex-col gap-2 mb-4">
                    <p class="text-sm text-stone-600">Name of carrier</p>
                    <p>Bambam SIA</p>
                </div>
                <div class="flex flex-col gap-2 mb-4">
                    <p class="text-sm text-stone-600">National reg.nb.</p>
                    <p>"Miranda"</p>
                </div>
                <img
                    width="60"
                    class="rounded-xl hover:opacity-80 cursor-pointer"
                    src="src/assets/phone-call.svg"
                    alt=""
                />
            </div>
        </div>
        <div class="mt-8">
            <TripStage
                v-for="{ isStepStarted, stepName, date, time } in tripStages"
                :isStepStarted="isStepStarted"
                :stepName="stepName"
                :date="date"
                :time="time"
            />
        </div>
    </div>
</template>
