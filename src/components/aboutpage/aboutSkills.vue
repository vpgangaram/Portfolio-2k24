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
            <v-col cols="12" md="6" lg="6" xl="4" v-for="skill in skills" class="mainCol" :key="skill.name">
                <img :src="getSkillImage(skill.website)" :alt="skill.name" class="skill-image" />
                <h3>{{ skill.name }}</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
const skills = [
    { name: 'Front End Development', website: 'developer.mozilla.org' },
    { name: 'Vue.Js', website: 'vuejs.org' },
    { name: 'React', website: 'react.dev' },
    { name: 'HTML5', website: 'developer.mozilla.org' },
    { name: 'CSS3', website: 'developer.mozilla.org' },
    { name: 'SASS', website: 'sass-lang.com' },
    { name: 'Javascript', website: 'www.javascript.com' },
    { name: 'Progressive Web Apps', website: 'web.dev' },
    { name: 'Rest API', website: 'developer.mozilla.org' },
    { name: 'Bootstrap', website: 'getbootstrap.com' },
    { name: 'Node Js', website: 'nodejs.org' },
    { name: 'Express Js', website: 'expressjs.com' },
    { name: 'MongoDB', website: 'mongodb.com' },
    { name: 'MySQL', website: 'mysql.com' },
    { name: 'Wordpress', website: 'wordpress.org' },
    { name: 'GSAP', website: 'greensock.com' },
    { name: 'Nuxt Js', website: 'nuxt.com' },
    { name: 'Graphql', website: 'graphql.org' },
    { name: 'Python', website: 'python.org' },
    { name: 'Django', website: 'djangoproject.com' },
]

function getSkillImage(website: string) {
    return `https://www.google.com/s2/favicons?domain=${website}&sz=128`
}
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

        .skill-image {
            width: 100px;
            height: 100px;
            object-fit: contain;
            margin-right: 3rem;
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
