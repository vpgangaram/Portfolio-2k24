<template>
    <v-conatiner class="navigationContainer">
        <v-row class="navigationRow">
            <v-col cols="4">
                <div class="leftSection">
                    <a to="/">
                        <h2>Knight.</h2>
                    </a>
                    <label class="switch">
                        <input type="checkbox" :checked="theme.global.current.value.dark">
                        <span class="slider" @click="toggleTheme"></span>
                    </label>
                </div>
            </v-col>
            <v-col cols="">
                <v-row class="navigationTabs">
                    <p><router-link :to="{ name: 'home' }">Work</router-link></p>
                    <p><a href="https://www.linkedin.com/in/vinayak-p-gangaramanavar" target="_blank">Linkedin</a></p>
                    <p><router-link to="about">About</router-link></p>
                </v-row>
            </v-col>
        </v-row>
    </v-conatiner>
</template>

<script type="ts" setup>
import { useTheme } from 'vuetify'
const theme = useTheme()

function toggleTheme() {
    // Toggle the theme in the global state
    theme.global.current.value.dark = !theme.global.current.value.dark;
    theme.value = theme.global.current.value.dark ? 'dark' : 'light';

    // Update the body class based on the new theme
    document.body.classList.remove(theme.global.current.value.dark ? 'light' : 'dark');
    document.body.classList.add(theme.value);

    // Store the new theme in localStorage
    localStorage.setItem('theme', theme.value);
}

</script>

<style lang="scss" scoped>
.navigationContainer {
    display: flex;
    padding-bottom: 5px;
    margin-right: auto;
    margin-left: auto;
    align-content: center;
    padding-top: 3rem;


    .navigationRow {
        align-items: center;

        .leftSection {
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: flex-start;

            h2 {
                font-weight: 600;
                margin-right: 30px;
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
        }
    }
}

.router-link-active {
    border-top: var(--text) solid 4px;
    padding-top: 1.5rem;
    color: var(--text);
}

/* The switch - the box around the slider */
.switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(216, 215, 215);
    transition: .4s;
    border-radius: 30px;
}

.slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 20px;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    ;
    transition: .4s;
}

input:checked+.slider {
    background-color: #303136;
}

input:checked+.slider:before {
    left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
    background: #303136;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}

@media (max-width: 600px) {
    .leftSection {
        h2 {
            display: none;
        }
    }

    .navigationContainer {
        padding-top: 2rem;
        .navigationRow {
            .navigationTabs {
                p {
                    font-size: 0.8rem;
                }
            }
        }
    }

    .router-link-active {
        padding-top: 1rem;
    }
}
</style>