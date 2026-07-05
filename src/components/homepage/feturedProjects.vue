<template>
    <v-container fluid class="container">
        <div class="divider"></div>
        <v-row data-aos="fade-up" data-aos-duration="1000">
            <v-col class="intro">
                <h1 class="faint">Featured Projects.</h1>
            </v-col>
        </v-row>
        <v-row class="workHistory">
            <v-col v-for="(project, index) in featuredProjects" :key="project.projectName" cols="12" md="6"
                class="project-card-wrap d-flex" data-aos="fade-up" data-aos-duration="1000"
                :data-aos-delay="120 + index * 80">
                <article class="project-card">
                    <div class="project-tags">
                        <div class="tag" v-for="(tag, tagIndex) in project.tags" :key="tag">
                            <p>{{ tag }}</p>
                        </div>
                    </div>
                    <h2>{{ project.projectName }}</h2>
                    <h3>{{ project.summary }}</h3>
                    <h3>Developed By: <span v-html="project.developedBy"></span></h3>
                    <div class="imgBackground">
                        <a :href="project.link" target="_blank" rel="noreferrer">
                            <img :src="project.previewImage || fallbackImage" :alt="project.projectName"
                                @error="handleImageError(project)" />
                        </a>
                    </div>
                </article>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

type ProjectItem = {
    projectName: string
    link: string
    developedBy: string
    client: string
    summary: string
    tags: string[]
    previewImage?: string
}

const fallbackImage = '/images/commingsoon.jpg'
const featuredProjects = ref<ProjectItem[]>([
    {
        projectName: 'Dabur International',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Dabur International',
        link: 'https://www.daburinternational.com/',
        summary: 'An overview of how we achieved a multilingual and multi-regional site.',
        tags: ['Nuxt js', 'Graphql', 'Multi Language', 'Multi Region']
    },
    {
        projectName: 'Praan.io',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Praan',
        link: 'https://praan.io/',
        summary: 'Experience a sophisticated and user-friendly interface with Praan website.',
        tags: ['Vue js', 'GSAP']
    },
    {
        projectName: 'Godrej Properties',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Godrej Properties',
        link: 'https://www.godrejproperties.com/',
        summary: 'A modern approach to chemical industry solutions.',
        tags: ['Vue js', 'Django', 'Python', 'SSO', 'Multi User Access', 'internal Platform']
    },
    {
        projectName: 'Luxeveda',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Luxeveda',
        link: 'https://luxeveda.com/',
        summary: 'A showcase of our expertise in crafting visually stunning and user-friendly websites.',
        tags: ['Vue js', 'GSAP']
    },
    {
        projectName: 'Pi Industries',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Pi Industries',
        link: 'https://www.piindustries.com/',
        summary: 'A comprehensive solution for managing and optimizing industrial operations.',
        tags: ['Wordpress', 'GSAP', 'Multi Language']
    },
    {
        projectName: 'Britania international',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Britania international',
        link: 'https://britannia-international.com/',
        summary: 'A modern approach to chemical industry solutions.',
        tags: ['Wordpress', 'GSAP', 'Multi Language']
    },
    {
        projectName: 'Chembon Industries',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Chembon Industries',
        link: 'https://www.chembondindia.com/',
        summary: 'A modern approach to chemical industry solutions.',
        tags: ['wordpress', 'GSAP', 'Multi Language']
    },
    {
        projectName: 'Chembond Water',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'Chembond Water',
        link: 'https://www.chembondwater.com/',
        summary: 'A modern approach to chemical industry solutions.',
        tags: ['wordpress', 'GSAP', 'Multi Language']
    },
    {
        projectName: 'cohizon',
        developedBy: '<a href="https://luxeveda.com/">Luxeveda</a>',
        client: 'cohoizon',
        link: 'https://www.cohizon.com/',
        summary: 'A modern approach to chemical industry solutions.',
        tags: ['wordpress', 'GSAP', 'DIVI 5']
    }
])

async function fetchOgImage(project: ProjectItem) {
    if (!project.link) return

    try {
        const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=false`)
        const data = await response.json()
        const imageUrl = data?.data?.image?.url || data?.data?.image || data?.data?.logo?.url

        if (imageUrl) {
            project.previewImage = imageUrl
        }
    } catch {
        project.previewImage = fallbackImage
    }
}

function handleImageError(project: ProjectItem) {
    if (project.previewImage !== fallbackImage) {
        project.previewImage = fallbackImage
    }
}

onMounted(() => {
    featuredProjects.value.forEach((project) => {
        project.previewImage = fallbackImage
        void fetchOgImage(project)
    })
})
</script>

<style lang="scss" scoped>
.container {
    padding-top: 6rem;

    .intro {
        padding-bottom: 3rem;

        h1 {
            -webkit-font-smoothing: antialiased;
            font-size: clamp(2.4rem, 5vw, 3.4rem);
            font-style: normal;
            font-weight: 800 !important;
            line-height: 1.05;
            letter-spacing: -0.03em;
            text-align: left;
            margin: 0;
        }

        .faint {
            color: var(--text20) !important;
        }
    }

    .workHistory {
        .project-card-wrap {
            margin-bottom: 1.5rem;
            display: flex;
        }

        .project-card {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            padding: 1.4rem;
            border-radius: 1.25rem;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
            transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms ease;
            will-change: transform;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
            }
        }

        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin: 0 0 1rem;

            .tag {
                padding: 0.45rem 0.8rem;
                border-radius: 999px;
                background-color: var(--bg1);
                white-space: nowrap;

                p {
                    font-size: 0.82rem;
                    color: var(--text80);
                }
            }
        }

        h3 {
            margin: 0.25rem 0 0;
        }

        .imgBackground {
            transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms ease;
            min-height: clamp(12rem, 24vw, 16rem);
            height: clamp(12rem, 24vw, 16rem);
            background: linear-gradient(135deg, var(--bg1), var(--bg2));
            margin: 1.5rem 0 0;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            will-change: transform;
            flex: 1;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }

            img {
                object-fit: contain;
                width: min(78%, 680px);
                border-radius: 0.75rem;
                transform: scale(1);
                transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
            }

            &:hover img {
                transform: scale(1.01);
            }
        }
    }
}

@media (max-width: 600px) {
    .container {
        padding-top: 3rem;

        .intro {
            padding-bottom: 1.5rem;
        }

        .workHistory {
            .project-card {
                padding: 1.1rem;
            }

            .imgBackground {
                min-height: 12rem;
                height: 12rem;
            }
        }
    }
}
</style>