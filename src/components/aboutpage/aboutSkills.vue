<template>
    <v-container fluid class="mainContainer">
        <v-row>
            <v-col cols="12">
                <h2 class="faint">Skills Honed</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" v-for="skill in skills" class="mainCol" :key="skill.name">
                <img :src="skill.img" :class="imgClass" />
                <h3>{{ skill.name }}</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script type="ts" setup>
import { ref, watch } from 'vue';
import { useTheme } from 'vuetify'
const theme = useTheme()

const skills = [
    {
        name: 'Front End Development',
        img: '/frontend.png'
    },
    {
        name: 'Vue.Js',
        img: '/vuejs.png'
    },
    {
        name: 'Javascript',
        img: '/js.png'
    },
    {
        name: 'Progressive Web Apps',
        img: '/pwa.png'
    },
    {
        name: 'Rest API',
        img: '/api.png'
    },
    {
        name: 'Bootstrap',
        img: '/bootstrap.png'
    },
    {
        name: 'Node Js',
        img: '/nodejs.png'
    }
]

const imgClass = ref('lightImg');

watch(() => theme.global.current.value.dark, (newVal) => {
    // imgClass.value = newVal.global.current.value.dark ? 'darkImg' : 'lightImg';
    console.log(theme.global.current.value.dark);
}, { immediate: true, deep: true });
</script>

<style lang="scss" scoped>
.mainContainer {

    h2 {
        font-size: 88px;
        font-style: normal;
        font-weight: 800 !important;
        line-height: 107px;
        margin-top: 3rem;
    }

    .mainCol {
        display: flex;
        align-items: center;

        .lightImg,
        img {
            width: 100px;
            height: 100px;
            object-fit: contain;
            margin-right: 5rem;
        }
    }
}

.darkImg {
    filter: invert(1)
}
</style>