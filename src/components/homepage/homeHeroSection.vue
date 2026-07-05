<template>
    <v-container fluid class="container">
        <v-row data-aos="fade-up" data-aos-duration="1000">
            <v-col class="intro">
                <p class="eyebrow">Crafting thoughtful digital products</p>
                <h1 class="faint">Vinayak P G.</h1>
                <h1 class="headline">Web <br v-if="smAndDown">Developer.</h1>
            </v-col>
        </v-row>
        <v-row data-aos="fade-up" data-aos-duration="1000" data-aos-delay="220" class="workHistory">
            <v-col cols="12" sm="6" class="history-card">
                <h4>Past</h4>
                <p>Front-end Developer at <br /><a href="https://www.vtiger.com/" target="_blank">Vtiger CRM</a></p>
            </v-col>
            <v-col cols="12" sm="6" class="history-card">
                <h4>Current</h4>
                <p>Web Developer at <br /><a href="https://luxeveda.com/" target="_blank">Luxeveda Brand Services</a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
</script>

<style lang="scss" scoped>
.container {
    padding-top: 8.5rem !important;
    padding-bottom: 2rem;

    .intro {
        padding-bottom: 5rem;
        position: relative;

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: var(--text50);
            font-size: 0.9rem;
            letter-spacing: 0.16em;
            text-transform: uppercase;

            &::before {
                content: '';
                width: 2.4rem;
                height: 1px;
                background: linear-gradient(90deg, transparent, var(--text50));
            }
        }

        h1 {
            -webkit-font-smoothing: antialiased;
            font-size: clamp(3.4rem, 7vw, 5.5rem);
            font-style: normal;
            font-weight: 800 !important;
            line-height: 0.95;
            letter-spacing: -0.04em;
            text-align: left;
            margin: 0;
            will-change: transform, opacity;
            animation: riseIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .headline {
            margin-top: 0.25rem;
        }

        .faint {
            color: var(--text20) !important;
            opacity: 0.9;
        }
    }

    .workHistory {
        .history-card {
            padding: 1.1rem 1.2rem;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1rem;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
            backdrop-filter: blur(18px);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
            transition: transform 260ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 260ms ease;
            will-change: transform;

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 16px 45px rgba(0, 0, 0, 0.08);
            }
        }

        a {
            display: inline-block;
            margin-top: 0.25rem;
            border-bottom: 1px solid var(--text80);
            transition: border-color 220ms ease, color 220ms ease;

            &:hover {
                color: var(--text);
                border-color: var(--text);
            }
        }
    }
}

@keyframes riseIn {
    from {
        opacity: 0;
        transform: translate3d(0, 18px, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
}

@media (max-width: 600px) {
    .container {
        padding-top: 5.5rem !important;

        .intro {
            padding-bottom: 3rem;
        }

        .workHistory {
            .history-card {
                margin-bottom: 0.75rem;
            }
        }
    }
}
</style>