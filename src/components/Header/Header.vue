<script setup>
import NavigationLink from './NavigationLink.vue'
import Button from '../Reusable/Button.vue'
import CurrencyAndLanguage from './CurrencyAndLanguage.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '../Reusable/Logo.vue'
import currency from '../../assets/currency.svg'
import lang from '../../assets/lang.svg'
import SmallScreenNavigationBar from './SmallScreenNavigationBar.vue'

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
    { label: 'Currency', image: currency },
    { label: 'Language', image: lang },
]
const flexRowGap4 = 'flex flex-row gap-4 items-center'
const onButtonClick = () => {}
const isNavBarOpen = ref(false)

const onBurgerMenuClick = () => {
    isNavBarOpen.value = !isNavBarOpen.value
}

const closeNavBar = () => {
    isNavBarOpen.value = false
}

onMounted(() => {
    document.body.addEventListener('click', closeNavBar)
})

onUnmounted(() => {
    document.body.removeEventListener('click', closeNavBar)
})
</script>

<template>
    <div class="my-6 md:my-16 w-10/12 flex flex-row justify-between">
        <div :class="`${flexRowGap4} px-2`">
            <Logo />
            <CurrencyAndLanguage
                v-for="({ label, image }, index) in linksWithIcon"
                :key="index"
                :label="label"
                :image="image"
            />
        </div>
        <div v-if="windowWidth >= 1024" :class="flexRowGap4">
            <div :class="flexRowGap4">
                <NavigationLink
                    v-for="({ to, label }, index) in links"
                    :key="index"
                    :to="to"
                    :label="label"
                />
            </div>
            <div :class="`${flexRowGap4} px-2`">
                <Button
                    v-for="({ label }, index) in buttons"
                    :key="index"
                    @click="onButtonClick"
                    :label="label"
                    :isBlue="label === 'Book today'"
                ></Button>
            </div>
        </div>
        <div class="flex justify-end w-1/3" v-else>
            <button @click.stop="onBurgerMenuClick">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#172554"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M4 6h18M4 12h18M4 18h18"
                    />
                </svg>
            </button>
            <SmallScreenNavigationBar v-if="isNavBarOpen" :links="links" :buttons="buttons" />
        </div>
    </div>
</template>
