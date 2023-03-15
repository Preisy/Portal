<script setup lang="ts">
import { QCarousel, QCarouselControl, QBtn } from "quasar";
import { ref } from "vue";

import DoneWorksCard from "./DoneWorksCard.vue";

import img from "@/assets/images/reviews/review_example.png";

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
                    swipeable
                    animated
                    navigation
                    arrows
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
                        <DoneWorksCard :img_src="img" name="0">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </DoneWorksCard>
                        <DoneWorksCard :img_src="img" name="1">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </DoneWorksCard>
                        <DoneWorksCard :img_src="img" name="2">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </DoneWorksCard>
                        <DoneWorksCard :img_src="img" name="3">
                            <template #head>
                                Натяжной потолок в гостиной
                            </template>
                            <template #body>
                                Наши натяжные потолки отличаются замечательным
                                качеством и долговечностью. Этот потолок
                                установлен в гостиной и делает ее уютной и
                                нежной.
                            </template>
                        </DoneWorksCard>
                    </template>
                    <!-- <template #control>
                        <QCarouselControl>
                            <QBtn></QBtn>
                            <QBtn></QBtn>
                        </QCarouselControl>
                    </template> -->
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
        width: 90%;
        margin: 0 auto;

        overflow: unset !important;
    }
}
</style>

<style lang="scss">
.q-carousel__control {
    position: absolute !important;
    height: 2rem !important;
    bottom: -4rem !important;
}
</style>
