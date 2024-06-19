<template>
    <v-container fluid class="container">
        <div class="divider"> </div>
        <v-row data-aos="fade-up" data-aos-duration="1000">
            <v-col class="intro">
                <h1 class="faint">
                    Featured Projects.
                </h1>
                <div class="divider"> </div>
            </v-col>
        </v-row>
        <v-row class="workHistory">
            <v-col cols="12" v-for="(project, i) in feturedProjects" :key="i" data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="200">
                <v-row class="project-tags">
                    <div class="tag" v-for="(tag, i) in project.tags" :key="i" data-aos="fade-left"
                        :data-aos-duration="500 + i * 50" data-aos-delay="500">
                        <p>{{ tag }}</p>
                    </div>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h2>{{ project.projectName }}</h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h3>{{ project.sumary }}</h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h3>Developed By: <span v-html="project.developedBy"></span></h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="imgBackground">
                        <a :href="project.link" target="_blank">
                            <img :src="project.ogImages" alt="">
                        </a>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script type="ts" setup>
let feturedProjects = {
    // Luxeveda: {
    dabur: {
        projectName: 'Dabur International',
        ogImages: '/images/daburInternational.png',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Dabur International',
        link: 'https://www.daburinternational.com/',
        sumary: 'An overview of how we achieved a multilingual and multi-regional site.',
        tags: ['Nuxt js', 'Graphql', 'Multi Language', 'Multi Region']
    },
    praanWebsite: {
        projectName: 'Praan.io',
        ogImages: '/images/praan.png',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Praan',
        link: 'https://praan.io/',
        sumary: 'Experience a sophisticated and user-friendly interface with Praan website',
        tags: ['Vue js', 'GSAP']
    },
    expenditureAnalysis: {
        projectName: 'Personal Expenditure Analysis',
        ogImages: '/images/commingsoon.jpg',
        developedBy: 'Vinayak',
        client: 'Personel Project',
        link: 'https://github.com/vpgangaram/python-personal-expenditure-analysis',
        sumary: 'An expenditure tracker for the personal expenses',
        tags: ['HTML', 'CSS', 'Python', 'Flask', 'Sqlit']
    },
    nikeClone: {
        projectName: 'Nick Clone Website',
        ogImages: '/images/commingsoon.jpg',
        developedBy: 'Vinayak',
        client: 'First Project',
        link: 'https://github.com/vpgangaram/nickClone',
        sumary: 'A clone of Nike website with cart functionality',
        tags: ['HTML', 'CSS', 'Vue']
    },
    aTopicAddAndEditor: {
        projectName: 'Topic Selector',
        ogImages: '/images/commingsoon.jpg',
        developedBy: 'Vinayak',
        client: 'Personel Project',
        link: 'https://github.com/vpgangaram/easy_subtopic_maintopic_selection_menu',
        sumary: 'A site where you can add main topics and sub topic for selection purpose',
        tags: ['HTML', 'CSS']
    },
    portfoliOld: {
        projectName: 'Mock Portfolio',
        ogImages: '/images/commingsoon.jpg',
        developedBy: 'Vinayak',
        client: 'Personal Project',
        link: 'https://github.com/vpgangaram/profile',
        sumary: 'A mock portfolio created for practice purpose',
        tags: ['HTML', 'CSS']
    }
    // },
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 9rem;

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

    .workHistory {

        .project-tags {
            margin: 1.5rem 0 0;

            .tag {
                padding: 8px 16px;
                border-radius: .5rem;
                background-color: var(--bg1);
                margin-right: 8px;
                white-space: nowrap;

                p {
                    font-size: 14px;
                }
            }
        }

        h3 {
            margin: 0;
        }

        .imgBackground {
            transition: all 0.3s ease-out;
            height: 30rem;
            background-color: var(--bg1);
            margin: 2rem 0;
            border-radius: .5rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            a {
                display: grid;
                place-items: center;
            }

            img {
                object-fit: contain;
                width: 70%;
                border-radius: 0.5rem
            }
        }
    }
}

@media (max-width: 600px) {
    .container {
        padding-top: 4rem;

        .intro {
            padding-bottom: 2rem;
            ;
        }

        .workHistory {
            .imgBackground {
                height: 20rem;
            }
        }
    }

    .tag {
        margin-top: 10px;
    }
}
</style>