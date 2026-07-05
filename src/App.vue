<template>
    <v-container>
        <MainNavigation />
        <RouterView />
    </v-container>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNavigation from './components/mainNavigation.vue';

</script>

<style scoped lang="scss">
.v-container {
    margin: auto;
    width: 100vw;
    overflow: hidden;
    scroll-behavior: smooth;
}
</style>
