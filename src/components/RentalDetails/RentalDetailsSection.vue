<script setup>
import Details from './Details.vue'
</script>

<template>

        <div
            class="w-10/12 md:h-min h-max bg-gradient-to-r from-blue-900 to-blue-950 rounded-3xl absolute overflow-hidden top-0 z-0"
        >
            <div
                class="flex flex-col text-center items-center text-white gap-8 pt-10"
            >
                <h2 class="text-xl md:text-3xl break-words">
                    Your daily rental details
                </h2>
                <Details />
                <div
                    class="flex gap-2 items-center cursor-pointer md:mb-24 mb-10"
                >
                    <img width="20" src="../../src/assets/copy.svg" alt="" />
                    <p class="text-xs text-stone-400">
                        Copy your unique trip link
                    </p>
                </div>
            </div>
            <div class="circle__big">
                <div class="circle__small"></div>
            </div>
        </div>

</template>

<style scoped>
.circle__big {
    width: 40%;
    padding-bottom: 40%;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: 15%;
    right: -20%;
}

.circle__small {
    width: 8%;
    padding-top: 7%;
    border: 2px solid white;
    border-radius: 50%;
    position: absolute;
    top: 6%;
    left: 16%;
}

@media screen and (max-width: 1300px) {
    .circle__big {
        display: none;
    }
}
</style>
