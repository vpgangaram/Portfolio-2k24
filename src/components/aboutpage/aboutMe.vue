<template>
    <v-container fluid class="container">
        <v-row class="row1">
            <v-col class="intro" cols="12" lg="6" md="6" sm="12">
                <div data-aos="fade-right" data-aos-easing="ease-in-cubic" data-aos-duration="800">
                    <h1 class="faint">
                        Hey There,
                    </h1>
                    <h1>
                        I'm <br v-if="smAndDown">Vinayak.
                    </h1>
                </div>
                <p data-aos="fade-up" data-aos-easing="ease-in-cubic" data-aos-duration="800">
                    I’m a resourceful professional who began as a curious coder, always eager to push the boundaries
                    of
                    what's possible on the web. My journey led me to master JavaScript, various frameworks, and
                    Bootstrap, allowing me to quickly adapt to new technologies. Along the way, I developed a knack
                    for
                    crafting cutting-edge web designs and features. I thrive on solving complex code issues,
                    ensuring
                    every user experiences seamless and efficient interactions.
                </p>
                <a href="https://drive.google.com/file/d/15AevIKNMwCMNGf3hMIbMjHC9xJUHTC2C/view?usp=sharing"
                    target="_blank" class="social-link" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="900">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true" focusable="false" width="1em" height="1em"
                        style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify"
                        data-icon="akar-icons:arrow-right" data-inline="false">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7"></path>
                    </svg>
                    <p>Resume</p>
                </a>
            </v-col>
            <v-col cols=""></v-col>
            <v-col cols="12" lg="5" md="5" sm="12" data-aos-duration="800" data-aos="fade-left" data-aos-easing="ease-in-cubic">
                <img src="/vinayakProfilePic.jpg" alt="vinayak Port folio" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script type="ts" setup>
</script>

<style lang="scss" scoped>
.container {
    padding-top: 9rem !important;

    img {
        width: 100%;
        object-fit: cover;
        object-position: bottom;
        max-width: 100%;
        border-radius: 0.5rem;
        max-height: 600px;
    }

    .intro {
        // padding-bottom: 7.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;

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

        p {
            padding-top: 3rem;
        }

        .social-link {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 50px;

            p {
                line-height: 1.5;
                padding: 0;
                padding-left: 30px;
                font-size: 20px;
                color: var(--text);
                padding-right: 2rem;
            }

            svg {
                scale: 1.5;
            }
        }
    }

    .workHistory {
        a {
            border-bottom: 1px solid var(--text80);
        }
    }
}

@media (max-width: 960px) {
    .container {
        padding-top: 4rem !important;

        .row1 {
            flex-direction: column-reverse;
        }

        img {
            object-position: bottom;
            max-width: unset;
            max-height: unset;
        }

        .intro {
            a {
                padding-top: 3rem;
            }
        }
    }
}

@media (max-width: 600px) {
    .container {
        padding-top: 2rem !important;

        .intro {
            p {
                padding-top: 2rem;
            }

            h1 {
                font-size: 3rem;
                line-height: 1.25em;
            }

            .social-link {
                padding-top: 2rem;

                p {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>