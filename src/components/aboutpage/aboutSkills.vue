<template>
    <v-container fluid class="mainContainer">
        <div class="divider"> </div>
        <v-row>
            <v-col cols="12" class="intro">
                <h1 class="faint">
                    Skills Honed
                </h1>
            </v-col>
        </v-row>
        <v-row class="mainRow">
            <v-col
                cols="6"
                v-for="skill in skills"
                class="mainCol"
                :key="skill.name"
            >
                <img :src="skill.img" :class="imgClass" />
                <h3>{{ skill.name }}</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme();

const skills = [
    { name: 'Front End Development', img: '/frontend.png' },
    { name: 'Vue.Js', img: '/vuejs.png' },
    { name: 'Javascript', img: '/js.png' },
    { name: 'Progressive Web Apps', img: '/pwa.png' },
    { name: 'Rest API', img: '/api.png' },
    { name: 'Bootstrap', img: '/bootstrap.png' },
    { name: 'Node Js', img: '/nodejs.png' },
];
</script>

<style lang="scss" scoped>
.mainContainer {
    .intro {
        padding-bottom: 7.5rem;
    }

    .intro {
        padding-bottom: 7.5rem;

        h1 {
            -webkit-font-smoothing: antialiased;
            font-size: 88px;
            font-style: normal;
            font-weight: 800 !important;
            line-height: 107px;
            letter-spacing: 0em;
            text-align: left;
            margin: 0;
        }

        .faint {
            color: var(--text20) !important;
        }
    }

    .mainCol {
        display: flex;
        align-items: center;

        img {
            width: 100px;
            height: 100px;
            object-fit: contain;
            margin-right: 5rem;
            filter: invert(var(--invertedImg));
        }
    }
}

@media (max-width: 600px) {
    .mainContainer {
        .intro {
            padding: 0;
        }

        .mainRow {
            margin-top: 30px;
            flex-direction: column;
        }
    }
}
</style>
