<template>
    <v-container fluid class="container">
        <v-row data-aos="fade-up" data-aos-duration="1000">
            <v-col class="intro">
                <h1 class="faint">
                    Vinayak P G.
                </h1>
                <h1>
                    Web Developer.
                </h1>
            </v-col>
        </v-row>
        <v-row data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" class="workHistory">
            <v-col>
                <h4>
                    Current
                </h4>
                <p>
                    Front-end Developer at <br />
                    <a>Vtiger CRM</a>
                </p>
            </v-col>
            <v-col>
                <h4>
                    Past
                </h4>
                <p>
                    Web Developer at <br />
                    <a>Luxeveda Brand services</a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script type="ts" setup>
</script>

<style lang="scss">
.container {
    padding-top: 9rem !important;

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
        a {
            border-bottom: 1px solid var(--text80);
        }
    }
}
</style>