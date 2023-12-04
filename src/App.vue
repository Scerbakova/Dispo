<template>
    <div class="flex flex-col items-center">
        <Header></Header>
        <router-view />
    </div>
</template>

<script setup>
import Header from './components/Header/Header.vue'
</script>
