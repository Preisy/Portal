<script setup lang="ts">
import { QCarousel, QCarouselControl, QBtn } from "quasar";
import { ref } from "vue";
import WorkCard from "./WorkCard.vue";

import img0 from "@/assets/images/reviews/review_1.png";
import img1 from "@/assets/images/reviews/review_5.png";
import img2 from "@/assets/images/reviews/review_6.png";
import img3 from "@/assets/images/reviews/review_7.png";
import img4 from "@/assets/images/reviews/review_8.jpg";
import img5 from "@/assets/images/reviews/review_4.jpg";

const carousel = ref<QCarousel>();
const slide = ref("0");

interface Card {
    img: string
    headText: string,
    bodyText: string
}
const cards: Array<Card> = [
    {
        img: img0, 
        headText: "Натяжной потолок в гостиной",
        bodyText: "Всё супер! Решили обновить потолок на кухне, пересмотрев разные решения, стало ясно, что самое быстрое и простое решение - заказать натяжной потолок. С натяжными потолками еще не сталкивались, поэтому обратились в несколько компаний. Мы выбрали Портал и не прогадали. Замерщик доступно все объяснил и предложил адекватную цену, через два дня уже был результат. Я и не знала что так можно. Спасибо! Планируем теперь через время затянуть всю квартиру)))",
    },
    {
        img: img1, 
        headText: "Натяжной потолок в гостиной",
        bodyText: "Отличная работа. Пять звезд. Быстро, недорого, качество на высоте. Всем советую.",
    },
    {
        img: img2, 
        headText: "Натяжной потолок в гостиной",
        bodyText: "Спасибо!!! Фирму посоветовал коллега. Я остался доволен. Ребята профессионалы.",
    },
    {
        img: img3, 
        headText: "Натяжной потолок в гостиной",
        bodyText: "Здравствуйте, спасибо за добросовестную работу. Отдельно хочу поблагодарить мастера Сергея, отличный результат!",
    },
    {
        img: img4, 
        headText: "Натяжной потолок в гостиной",
        bodyText: "Сразу видно слаженную работу от менеджера до монтажника, все точно в срок , качественно , без нареканий.",
    },
    {
        img: img5, 
        headText: "Натяжной потолок в гостиной",
        bodyText: "Добрый день, у нас случилось ЧП (затопили соседи) , натяжной потолок провис от попавшей на него воды, мы думали что он не выдержит и нашему новому ремонту конец, очень переживали. Обратились в фирму Портал, ребята приехали оперативно, аккуратно слили воду, демонтировали часть полотна, всё просушили, обработали антигрибковым средством и натянули тот же потолок назад. Мы были приятно удивленны и довольны результатом, потопа как и не было. Спасибо!!!",
    },
] 


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
                    keep-alive
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
                        <WorkCard v-for="(card, index) in cards" :key="index" :img_src="card.img" :name="index.toString()">
                            <template #head>
                                {{ card.headText }}
                            </template>
                            <template #body>
                                {{ card.bodyText }}
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
    overflow: hidden;


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

        @media (max-width: 730px) {
            width: 75%;
            max-width: 38rem;
        }
        @media (max-width: $screen-sm) {
            width: 100%;
            max-width: unset;
        }

        &:deep(.scroll) {
            overflow: hidden;
        }
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
