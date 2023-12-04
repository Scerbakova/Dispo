<script setup>
import NavigationLink from '../Reusable/NavigationLink.vue'
import Button from '../Reusable/Button.vue'
import CurrencyAndLanguage from './CurrencyAndLanguage.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '../Reusable/Logo.vue'
import SmallScreenNavigationBar from './SmallScreenNavigationBar.vue'
import { links, linksWithIcon, buttons } from '../../data/fakeData.js'
import burger from '../../assets/burger.svg'

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
    windowWidth.value = window.innerWidth
}

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
    window.addEventListener('resize', handleResize)
    document.body.addEventListener('click', closeNavBar)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
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
                <img width="25" :src="burger" alt="burger" />
            </button>
            <SmallScreenNavigationBar
                v-if="isNavBarOpen"
                :links="links"
                :buttons="buttons"
            />
        </div>
    </div>
</template>
