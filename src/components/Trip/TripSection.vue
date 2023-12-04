<script setup>
import Chauffeur from './Chauffeur.vue';
import TripDetails from './TripDetails.vue';
</script>

<template>
	<div class="flex lg:flex-row flex-col justify-between bg-white rounded-3xl w-screen lg:w-11/12 xl:w-3/4 h-min shadow-md my-6 md:my-16 relative overflow-hidden">
		<Chauffeur />
		<TripDetails />
	</div>
</template>