<script setup lang="ts">
import { ref } from "vue";
import Card from "../sixCardsGridLayout/Card.vue";

import heart from "@/assets/images/plusesPage/heart.png";
import clock from "@/assets/images/plusesPage/clock.png";
import handshake from "@/assets/images/plusesPage/handshake.png";
import like from "@/assets/images/plusesPage/like.png";
import ruler from "@/assets/images/plusesPage/ruler.png";
import question from "@/assets/images/plusesPage/question.png";

import { QCarouselSlide } from "quasar";
import SharedQuasar from "../sixCardsGridLayout/SharedQuasar.vue";

const root = ref<HTMLElement>();

const current = ref('0');
</script>

<template>
    <div ref="root" class="pluses-page">
        <SharedQuasar>
            <template #description>
                <span class="black-text">
                    Почему стоит работать
                    <span class="yellow-highlight"> именно с нами</span>&nbsp;?
                </span>
            </template>

            <template #body>
                <QCarouselSlide class="slide" name="0">
                    <Card class="card white" :img-src="handshake">
                        <template #short>Безопасно</template>
                        <template #long>
                            Мы работаем только с заключением договора. Даем
                            гарантию не только на услугу, но и на материал.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="1">
                    <Card class="card white" :img-src="question">
                        <template #shadow>
                            <div class="common-shadow" />
                        </template>
                        <template #short>Всегда на связи</template>
                        <template #long>
                            Ответим на любые Ваши вопросы, касающиеся потолков,
                            даже если его делали не мы.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="2">
                    <Card class="card white" :img-src="like">
                        <template #shadow>
                            <div class="common-shadow" />
                        </template>
                        <template #short>Команда профессионалов</template>
                        <template #long>
                            Наши сотрудники исключительно квалифицированные
                            мастера, периодически проходят обучение новым
                            технологиям.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="3">
                    <Card class="card white" :img-src="ruler">
                        <template #shadow>
                            <div class="ruler-shadow" />
                        </template>
                        <template #short>Все прозрачно и честно</template>
                        <template #long>
                            Замер, консультация и выезд бесплатно. Распишем все
                            до последнего самореза. Акции на выбор.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="4">
                    <Card class="card white" :img-src="clock">
                        <template #shadow>
                            <div class="common-shadow" />
                        </template>
                        <template #short>Пунктуальность</template>
                        <template #long>
                            Обговоренные сроки всегда соблюдаются.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="5">
                    <Card class="card white" :img-src="heart">
                        <template #shadow>
                            <div class="common-shadow" />
                        </template>
                        <template #short>Сервисное обслуживание</template>
                        <template #long>
                            Всегда придем Вам на помощь, если Ваш натяжной
                            потолок поврежден, либо затоплен соседями.
                        </template>
                    </Card>
                </QCarouselSlide>
            </template>
        </SharedQuasar>
    </div>
    <!-- .advantages-page -->
</template>

<style scoped lang="scss">
.pluses-page {
    position: relative;

    width: 100%;
    text-align: center;

    .white {
        background: #e3e3e3;
        color: #515151;
    }

    .black-text {
        color: black;

        &::selection {
            color: white;
        }
    }

    .yellow-highlight {
        background: linear-gradient(45deg, #feda82 0, #fec338 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;

        font-style: italic;

        &::selection {
            -webkit-text-fill-color: #fff;
        }
    }

    .slide {
        padding: 0 !important;

        .card {
            height: 100%;
        }
    }
}
</style>
