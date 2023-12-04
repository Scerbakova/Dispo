<script setup>
import InfoWithIcon from './InfoWithIcon.vue'
import check from '../../assets/check-shield.svg'
import calendar from '../../assets/calendar.svg'
import person from '../../assets/person.svg'
const fakeInfo = [
    {
        text: 'Request #779',
        icon: check,
    },
    {
        text: 'Trip starts: 18 feb - 11:00',
        icon: calendar,
    },
    {
        text: '45 people',
        icon: person,
    },
]
</script>

<template>
    <div class="flex justify-center text-stone-200 text-sm">
        <div class="flex flex-col md:flex-row gap-8 items-center px-6">
            <InfoWithIcon
                v-for="{ text, icon } in fakeInfo"
                :key="text"
                :text="text"
                :icon="icon"
            />
            <div
                class="border-solid border border-slate-200 rounded-full py-2 px-5"
            >
                Paid 12€ ✔
            </div>
            <p class="underline cursor-pointer">view invoice</p>
        </div>
    </div>
</template>
