<script setup lang="ts">
import { QCarousel, QCarouselControl, QBtn } from "quasar";
import { ref } from "vue";

import WorkCard from "./WorkCard.vue";

import img from "@/assets/images/reviews/review_1.png";

const carousel = ref<QCarousel>();
const slide = ref("0");
</script>

<template>
    <div class="doneWorks">
        <div class="structure">
            <div class="description">
                <h3>Реализованные проекты</h3>
            </div>
            <div class="slider-wrapper">
                <QCarousel
                    ref="carousel"
                    swipeable
                    animated
                    infinite
                    navigation
                    transition-prev="jump-right"
                    transition-next="jump-left"
                    v-model="slide"
                    class="slider">
                    <template
                        v-slot:navigation-icon="{ active, btnProps, onClick }">
                        <q-btn
                            v-if="active"
                            class="btn active"
                            size="lg"
                            color="yellow"
                            flat
                            round
                            dense
                            @click="onClick" />
                        <q-btn
                            v-else
                            class="btn notActive"
                            size="sm"
                            color="white"
                            flat
                            round
                            dense
                            @click="onClick" />
                    </template>

                    <template #default>
                        <WorkCard :img_src="img" name="0">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </WorkCard>
                        <WorkCard :img_src="img" name="1">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </WorkCard>
                        <WorkCard :img_src="img" name="2">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </WorkCard>
                        <WorkCard :img_src="img" name="3">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </WorkCard>
                    </template>

                    <template #control>
                        <QCarouselControl
                            class="slider-controls"
                            position="bottom-right">
                            <QBtn
                                push
                                round
                                dense
                                color="orange"
                                text-color="black"
                                icon="arrow_right_alt"
                                class="custom-button left"
                                @click="carousel?.previous()"></QBtn>
                            <QBtn
                                push
                                round
                                dense
                                color="orange"
                                text-color="black"
                                icon="arrow_right_alt"
                                class="custom-button"
                                @click="carousel?.next()"></QBtn>
                        </QCarouselControl>
                    </template>
                </QCarousel>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.doneWorks {
    text-align: center;

    .btn {
        border-radius: 100%;
        width: 0rem !important;
        margin: 0.5rem !important;
        padding: 0rem !important;
        &.active {
            background: linear-gradient(180deg, #d0a029 0%, #db9c09 100%);
            font-size: 0.35rem !important;
        }
        &.notActive {
            background: linear-gradient(180deg, #feda82 0%, #fec338 100%);
            font-size: 0.32rem !important;
        }
    }
    .description {
        margin-bottom: 3rem;
    }

    .slider {
        // padding: 1rem;
        // padding-bottom: 5rem;
        border-radius: 1.25rem;
        border: 0.75rem solid white;
        box-shadow: 0px 29px 55px -13px rgba(0, 0, 0, 0.11);
        box-sizing: border-box;
        height: auto !important;
        width: 85%;
        margin: 0 auto;

        overflow: unset !important;
    }
    .slider-controls {
        --button-size: 3.75rem;
        --text-size: 0.8rem;

        --margin: 2.5rem;

        margin: 0 !important;
        height: fit-content !important;
        width: calc(
            100% + 2 * var(--button-size) + 2 * var(--margin)
        ) !important;
        display: flex !important;
        top: calc(50% - var(--button-size)/2) !important;
        left: calc(-1 * (var(--button-size) + var(--margin))) !important;
        justify-content: space-between !important;

        .custom-button {
            background: linear-gradient(
                180deg,
                #feda82 0%,
                #fec338 100%
            ) !important;
        }
    }
}
</style>

<style lang="scss">
.q-carousel__control {
    position: absolute !important;
    height: 2rem !important;
    bottom: -4rem !important;
}

.q-carousel__slides-container {
    position: relative;
    z-index: 1;
}

.custom-button.left i {
    transform: rotateZ(180deg);
}

.slider-controls {
    --button-size: 3.75rem;
    --text-size: 0.8rem;

    --margin: 2.5rem;

    .q-btn::before {
        box-shadow: 0 0.0625rem 0.3125rem rgba(0, 0, 0, 0.2),
            0 0.125rem 0.125rem rgba(0, 0, 0, 0.14),
            0 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.12);
    }
    .q-btn--push:before {
        border-bottom: 0.1875rem solid rgba(0, 0, 0, 0.15);
    }
    .q-btn {
        font-size: var(--text-size) !important;
    }
    .q-btn--dense.q-btn--round {
        min-height: var(--button-size);
        min-width: var(--button-size);
        width: var(--button-size);
        height: var(--button-size);
    }
}
</style>
