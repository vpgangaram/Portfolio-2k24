<template>
    <v-container class="navigationContainer">
        <v-row class="navigationRow">
            <v-col cols="4">
                <div class="leftSection">
                    <router-link to="/" class="brand-link">
                        <h2>Knight.</h2>
                    </router-link>
                    <label class="switch">
                        <input type="checkbox" :checked="isDark" @change="toggleTheme" />
                        <span class="slider"></span>
                    </label>
                </div>
            </v-col>
            <v-col>
                <v-row class="navigationTabs">
                    <p><router-link :to="{ name: 'home' }">Work</router-link></p>
                    <p><a href="https://www.linkedin.com/in/vinayak-p-gangaramanavar" target="_blank"
                            rel="noreferrer">Linkedin</a></p>
                    <p><router-link to="about">About</router-link></p>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

function toggleTheme() {
    const nextTheme = isDark.value ? 'light' : 'dark'
    theme.global.name.value = nextTheme
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme)
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        theme.global.name.value = savedTheme
        document.body.classList.add(savedTheme)
    }
})
</script>

<style lang="scss" scoped>
.navigationContainer {
    display: flex;
    padding: 2rem 0 1rem;
    margin-right: auto;
    margin-left: auto;
    align-content: center;
    position: sticky;
    top: 0;
    z-index: 20;

    .navigationRow {
        align-items: center;
        width: 100%;

        .leftSection {
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: flex-start;

            .brand-link:first-child {
                border-bottom: unset !important;
            }

            .brand-link {
                display: inline-flex;
                align-items: center;
            }

            h2 {
                font-weight: 600;
                margin-right: 1rem;
                transition: color 220ms ease;
            }
        }

        .navigationTabs {
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: space-evenly;

            p {
                list-style-type: none;
                font-family: 'Inter', sans-serif;
                font-size: 1rem;
                font-style: normal;
                line-height: 19px;
                letter-spacing: 0;
                text-align: center;
                white-space: nowrap;
            }

            a {
                position: relative;
                transition: color 220ms ease;
                padding-bottom: 0.2rem;

                &:hover {
                    color: var(--text);
                }
            }
        }
    }
}

.router-link-active {
    border-bottom: 2px solid var(--text);
    color: var(--text);
}

.switch {
    display: block;
    --width-of-switch: 3.25em;
    --height-of-switch: 1.8em;
    --size-of-icon: 1.2em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(216, 215, 215);
    transition: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: 999px;
}

.slider:before {
    position: absolute;
    content: '';
    height: var(--size-of-icon, 1.2em);
    width: var(--size-of-icon, 1.2em);
    border-radius: 50%;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    transition: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

input:checked+.slider {
    background-color: #303136;
}

input:checked+.slider:before {
    left: calc(100% - (var(--size-of-icon, 1.2em) + var(--slider-offset, 0.3em)));
    background: #303136;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}

@media (max-width: 600px) {
    .leftSection {
        h2 {
            display: none;
        }
    }

    .navigationContainer {
        padding-top: 1.25rem;

        .navigationRow {
            .navigationTabs {
                p {
                    font-size: 0.8rem;
                }
            }
        }
    }
}
</style>