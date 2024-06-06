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
    max-width: 1168px;
    margin: auto;
}


</style>
