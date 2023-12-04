<script setup>
import NavigationLink from './NavigationLink.vue'
import Button from '../Reusable/Button.vue'
const props = defineProps({
    links: {
        type: Array,
        required: true,
    },
    buttons: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <div
        class="flex flex-col fixed p-12 bg-blue-100 z-10 rounded-bl-xl top-0 right-0 gap-4 w-2/3 items-center"
    >
        <NavigationLink
            v-for="({ to, label }, index) in links"
            :key="index"
            :to="to"
            :label="label"
        />
        <hr class="w-full border border-stone-300 border-solid my-8" />
        <Button
            v-for="({ label }, index) in buttons"
            :key="index"
            @click="onButtonClick"
            :label="label"
            :isBlue="label === 'Book today'"
        ></Button>
    </div>
</template>
