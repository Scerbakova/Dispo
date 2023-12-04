<script setup>
import RentalDetailsSection from '../RentalDetails/RentalDetailsSection.vue'
import TripSection from '../Trip/TripSection.vue'
</script>
<template>
    <div class="flex justify-center w-full h-full relative">
        <div
            class="bg-white rounded-3xl w-11/12 flex flex-col justify-center mt-20 mb-16 h-full items-center p-16"
        >
            <RentalDetailsSection />
            <TripSection />
        </div>
    </div>
</template>
