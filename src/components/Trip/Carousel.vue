<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const activeDay = ref(new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long' }))
const daysToShow = ref([])
const currentClick = ref('')
const windowWidth = ref(window.innerWidth)

const handleResize = () => {
    windowWidth.value = window.innerWidth
}

const calculateDaysToAdd = () => {
    if (
        currentClick.value === 'prev' ||
        windowWidth.value < 475 ||
        (windowWidth.value >= 1024 && windowWidth.value <= 1140)
    ) {
        return 0
    } else if (
        (windowWidth.value >= 475 && windowWidth.value <= 635) ||
        (windowWidth.value >= 1024 && windowWidth.value <= 1745)
    ) {
        return 1
    } else {
        return 2
    }
}

const generateNextDays = () => {
    if (!activeDay.value) return
    const nextDays = []
    const currentDate = new Date(activeDay.value)

    for (let i = 0; i < 4; i++) {
        const nextDate = new Date(currentDate)
        nextDate.setDate(currentDate.getDate() + i - calculateDaysToAdd())
        nextDays.push(
            nextDate.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
            })
        )
    }

    return nextDays
}

const prevSlide = () => {
    currentClick.value = 'prev'
    const prevDay = new Date(activeDay.value)
    prevDay.setDate(prevDay.getDate() - 1)
    activeDay.value = prevDay.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })
}

const nextSlide = () => {
    currentClick.value = 'next'
    const nextDay = new Date(activeDay.value)
    nextDay.setDate(nextDay.getDate() + 1)
    activeDay.value = nextDay.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })
}

watch(activeDay, () => {
    const leftCondition = activeDay.value === daysToShow.value[1] && currentClick.value === 'prev'
    const rightCondition =
        activeDay.value !== daysToShow.value[3] && currentClick.value === 'next'

    if (
        ((rightCondition || leftCondition) &&
            windowWidth.value >= 635 &&
            windowWidth.value <= 1023) ||
        ((rightCondition || leftCondition) && windowWidth.value >= 1745)
    ) {
        return daysToShow.value
    } else {
        daysToShow.value = generateNextDays()
    }
})

onMounted(() => {
    currentClick.value = 'prev'
    daysToShow.value = generateNextDays()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<template>
    <div class="flex flex-row mb-8 justify-center">
        <div class="arrow__wrapper-left">
            <button @click="prevSlide" class="nav-btn">←</button>
        </div>
        <div class="carousel-container">
            <div class="carousel" ref="carouselRef">
                <div
                    v-for="(day, index) in daysToShow"
                    :key="index"
                    :class="{
                        'carousel-item': true,
                        highlighted: day === activeDay,
                    }"
                >
                    {{ day }}
                </div>
            </div>
        </div>
        <div class="arrow__wrapper-right">
            <button @click="nextSlide" class="nav-btn">→</button>
        </div>
    </div>
</template>

<style scoped>
.highlighted {
    background-color: #60a5fa;
    color: white;
}
.carousel-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    height: 80px;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease;
    margin-top: 10px;
}

.carousel-item {
    flex: 0 0 auto;
    padding: 15px 25px;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 24px;
}

.nav-btn {
    background-color: #e7e5e4;
    border: 1px solid #e7e5e4;
    border-radius: 50%;
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
}

.nav-btn:hover {
    background-color: #d6d3d1;
}
.arrow__wrapper-right,
.arrow__wrapper-left {
    padding: 30px;
}
.arrow__wrapper-left:hover {
    box-shadow: 10px 0px 10px -6px #00000030;
}

.arrow__wrapper-right:hover {
    box-shadow: -10px 0px 10px -6px #00000030;
}
</style>
