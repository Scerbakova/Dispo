<script setup>
import NavigationLink from './NavigationLink.vue'
import Button from '../Reusable/Button.vue'
import CurrencyAndLanguage from './CurrencyAndLanguage.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '../Reusable/Logo.vue'

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

const links = [
    {
        label: 'Transport',
        to: '/',
    },
    {
        label: 'Tours',
        to: '/tours',
    },
    {
        label: 'Partners',
        to: '/partners',
    },
    {
        label: 'About B2B',
        to: '/aboutb2b',
    },
    {
        label: 'Contact',
        to: '/contact',
    },
]
const buttons = [
    {
        label: 'Book today',
    },
    {
        label: 'Log in / Sign up',
    },
]

const linksWithIcon = [
    { label: 'Currency', image: '../../assets/currency.svg' },
    { label: 'Language', image: '../../assets/lang.svg' },
]
const flexRowGap8 = 'flex flex-row gap-8 items-center'
const onButtonClick = () => {}
</script>

<template>
    <div class="my-16 w-10/12 flex flex-row justify-between flex-wrap">
        <div :class="`${flexRowGap8} px-2`">
            <Logo />
            <CurrencyAndLanguage
                v-for="({ label, image }, index) in linksWithIcon"
                :key="index"
                :label="label"
                :image="image"
            />
        </div>
        <div v-if="windowWidth >= 980" :class="`${flexRowGap8} px-2 flex-wrap`">
            <div :class="flexRowGap8">
                <NavigationLink
                    v-for="({ to, label }, index) in links"
                    :key="index"
                    :to="to"
                    :label="label"
                />
            </div>
            <div :class="`${flexRowGap8} px-2`">
                <Button
                    v-for="({ label }, index) in buttons"
                    :key="index"
                    @click="onButtonClick"
                    :label="label"
                    :isBlue="label === 'Book today'"
                ></Button>
            </div>
        </div>
        <div v-else>
            <button class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#1E3A8A"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
