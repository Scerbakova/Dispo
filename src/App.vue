<template>
    <div class="flex flex-col items-center">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
</script>
