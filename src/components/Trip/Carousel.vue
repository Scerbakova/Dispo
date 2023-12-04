<script setup>
import { ref, watch, onMounted } from 'vue'

const activeDay = ref(
    new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
    })
)

const daysToShow = ref([])

const currentClick = ref('')

const generateNextDays = () => {
    if (!activeDay.value) return
    const nextDays = []
    const currentDate = new Date(activeDay.value)
    for (let i = 0; i < 4; i++) {
        const nextDate = new Date(currentDate)
        nextDate.setDate(currentDate.getDate() + i)
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
    activeDay.value = prevDay.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
    })
}

const nextSlide = () => {
    currentClick.value = 'next'
    const nextDay = new Date(activeDay.value)
    nextDay.setDate(nextDay.getDate() + 1)
    activeDay.value = nextDay.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
    })
}

watch(activeDay, () => {
    const leftCondition =
        activeDay.value === daysToShow.value[0] && currentClick.value === 'prev'
    const rightCondition =
        activeDay.value !== daysToShow.value[3] && currentClick.value === 'next'
    if (rightCondition || leftCondition) {
        return daysToShow.value
    } else {
        daysToShow.value = generateNextDays()
    }
})

// Initial generation of daysToShow
onMounted(() => {
    daysToShow.value = generateNextDays()
})
</script>

<template>
    <div class="flex flex-row mb-8">
        <div class="arrow__wrapper">
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
        <div class="arrow__wrapper-shadowed">
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
    width: 85%;
    height: 80px;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease; /* Smooth transition effect */
    margin-top: 10px;
}

.carousel-item {
    flex: 0 0 auto;
    padding: 10px 35px;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd; /* Set your desired border */
    border-radius: 24px;
}

.nav-btn {
    background-color: #ddd;
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-btn:hover {
    background-color: #ccc;
}
.arrow__wrapper {
    padding: 30px;
}
.arrow__wrapper-shadowed {
    box-shadow: -10px 0px 10px -6px #00000030;
    padding: 30px;
}
</style>
