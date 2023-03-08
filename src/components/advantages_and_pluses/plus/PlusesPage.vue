<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Card from "../Card.vue";
import Clouds from "../../general/cloud/Clouds.vue";
import Button from "../../general/button/Button.vue";

import type { Nullable } from "@/types/types";

import heart from "@/assets/images/pluses_page/heart.png";
import clock from "@/assets/images/pluses_page/clock.png";
import handshake from "@/assets/images/pluses_page/handshake.png";
import like from "@/assets/images/pluses_page/like.png";
import ruler from "@/assets/images/pluses_page/ruler.png";
import question from "@/assets/images/pluses_page/question.png";
import Slider from "../Slider.vue";

const root = ref<Nullable<HTMLElement>>();

const current = ref(0);
const style_index = (index: number) => {
    const cards = root.value?.querySelectorAll(".card");
    const max = cards?.length;
    if (!max) return 0;

    const result = (index + Math.abs(current.value)) % max;
    return `z-index:${result}`;
};
</script>

<template>
    <div ref="root" class="pluses-page">
        <div class="structure">
            <div class="description">
                <h2>
                    Почему стоит работать
                    <span class="yellow-highlight"> именно с нами </span> ?
                </h2>
            </div>
            <div class="cards-holder">
                <div class="cards">
                    <Card
                        class="card white"
                        :style="style_index(0)"
                        :img-src="handshake">
                        <template #short>Безопасно</template>
                        <template #long>
                            Мы работаем только с заключением договора. Даем
                            гарантию не только на услугу, но и на материал.
                        </template>
                    </Card>
                    <Card
                        class="card white"
                        :style="style_index(1)"
                        :img-src="question">
                        <template #short>Всегда на связи</template>
                        <template #long>
                            Ответим на любые Ваши вопросы, касающиеся потолков,
                            даже если его делали не мы.
                        </template>
                    </Card>
                    <Card
                        class="card white"
                        :style="style_index(2)"
                        :img-src="like">
                        <template #short>Команда профессионалов</template>
                        <template #long>
                            Наши сотрудники исключительно квалифицированные
                            мастера, периодически проходят обучение новым
                            технологиям.
                        </template>
                    </Card>
                    <Card
                        class="card white"
                        :style="style_index(3)"
                        :img-src="ruler">
                        <template #short>Все прозрачно и честно</template>
                        <template #long>
                            Замер, консультация и выезд бесплатно. Распишем все
                            до последнего самореза. Акции на выбор.
                        </template>
                    </Card>
                    <Card
                        class="card white"
                        :style="style_index(4)"
                        :img-src="clock">
                        <template #short>Пунктуальность</template>
                        <template #long>
                            Обговоренные сроки всегда соблюдаются.
                        </template>
                    </Card>
                    <Card
                        class="card white"
                        :style="style_index(5)"
                        :img-src="heart">
                        <template #short>Сервисное обслуживание</template>
                        <template #long>
                            Всегда придем Вам на помощь, если Ваш натяжной
                            потолок поврежден, либо затоплен соседями.
                        </template>
                    </Card>
                </div>

                <div class="adaptive-controls">
                    <Button v-model="current" :delta="-1" class="button left">
                        <img
                            src="@/assets/images/pluses_page/left_arrow.svg"
                            alt="←" />
                    </Button>
                    <Button v-model="current" :delta="1" class="button right">
                        <img
                            src="@/assets/images/pluses_page/left_arrow.svg"
                            alt="→" />
                    </Button>
                </div>
            </div>
            <!-- .advantages-cards -->
        </div>
        <Clouds class="clouds"></Clouds>
        <!-- .structure -->
    </div>
    <!-- .advantages-page -->
</template>

<style scoped lang="scss">
.pluses-page {
    position: relative;

    width: 100%;
    text-align: center;

    background: linear-gradient(180deg, #ffffff 0%, #e8e8e8 98.96%);

    .structure {
        padding-top: 3.5rem;
        padding-bottom: 4rem;
    }

    .description {
        color: #000;
        margin-bottom: 2.4rem;
        .yellow-highlight {
            background: linear-gradient(45deg, #feda82 0, #fec338 100%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;

            font-style: italic;
        }
    }

    .adaptive-controls {
        display: none;
    }

    .cards-holder {
        position: relative;
        width: fit-content;
        margin: 0 auto;

        .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            column-gap: 0.5rem;
            row-gap: 2rem;

            width: 85%;

            margin-left: auto;
            margin-right: auto;
            margin-bottom: 2rem;
            justify-items: center;

            .white {
                background: #e3e3e3;
                color: #515151;
            }
        }
    }

    .clouds {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -16rem;
        transform: rotateZ(180deg);
        filter: contrast(0.83);
    }

    @media (max-width: 400px) {
        .clouds {
            display: none;
        }

        .cards {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            width: auto;
        }
        .description {
            h2 {
                font-size: 1.125rem;
            }
        }
        .adaptive-controls {
            position: absolute;
            top: 50%;
            left: -5%;
            width: 110%;
            z-index: 10;

            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;

            .button {
                --size: 2rem;
                --padding: 0.5rem;
                border-radius: 100%;
                padding: 0;
                width: var(--size);
                height: var(--size);
                img {
                    // margin-left: calc(-1 * var(--padding));
                    margin-top: calc(0.5 * var(--padding));
                    width: calc(var(--size) - var(--padding));
                    height: calc(var(--size) - var(--padding));
                    user-select: none;
                }
                &.right {
                    img {
                        transform: rotateZ(180deg);
                    }
                }
                // TODO: можно добавить в Button prop "volume: boolean", отключающий объемность
                box-shadow: none;
            }
        }
    }
}
</style>
