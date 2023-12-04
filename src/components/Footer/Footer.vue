<script setup>
import Logo from '../Reusable/Logo.vue'
import NavigationLink from '../Reusable/NavigationLink.vue'
import { footerLeftLinks, footerRightLinks } from '../../data/fakeData.js'
</script>
<template>
    <div class="m-6 w-full flex flex-col gap-4 md:flex-row items-center md:justify-around">
        <div class="flex gap-6">
            <NavigationLink
                v-for="({ to, label }, index) in footerLeftLinks"
                :key="index"
                :to="to"
                :label="label"
            />
        </div>
        <Logo />
        <div class="flex gap-6">
            <NavigationLink
                v-for="({ to, label }, index) in footerRightLinks"
                :key="index"
                :to="to"
                :label="label"
            />
        </div>
    </div>
</template>
