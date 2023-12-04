<script setup>
import Chauffeur from './Chauffeur.vue';
import TripDetails from './TripDetails.vue';
</script>

<template>
	<div class="flex flex-row justify-between bg-white rounded-3xl w-3/4 h-min shadow-md my-16 relative z-10">
		<Chauffeur />
		<TripDetails />
	</div>
</template>