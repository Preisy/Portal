<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Card from "./Card.vue";
import Clouds from "../general/cloud/Clouds.vue";
import Button from "../general/button/Button.vue";

import type { Nullable } from "@/types/types";

import heart from "@/assets/images/pluses_page/heart.png";
import clock from "@/assets/images/pluses_page/clock.png";
import handshake from "@/assets/images/pluses_page/handshake.png";
import like from "@/assets/images/pluses_page/like.png";
import ruler from "@/assets/images/pluses_page/ruler.png";
import question from "@/assets/images/pluses_page/question.png";
import Slider from "./Slider.vue";
import Shared from "./Shared.vue";

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
        <Shared>
            <template #description>
                <span class="black-text">
                    Почему стоит работать
                    <span class="yellow-highlight"> именно с нами </span> ?
                </span>
            </template>

            <template #cards>
                <Card class="card white" :img-src="handshake">
                    <template #short>Безопасно</template>
                    <template #long>
                        Мы работаем только с заключением договора. Даем гарантию
                        не только на услугу, но и на материал.
                    </template>
                </Card>
                <Card class="card white" :img-src="question">
                    <template #shadow>
                        <div class="common-shadow" />
                    </template>
                    <template #short>Всегда на связи</template>
                    <template #long>
                        Ответим на любые Ваши вопросы, касающиеся потолков, даже
                        если его делали не мы.
                    </template>
                </Card>
                <Card class="card white" :img-src="like">
                    <template #shadow>
                        <div class="common-shadow" />
                    </template>
                    <template #short>Команда профессионалов</template>
                    <template #long>
                        Наши сотрудники исключительно квалифицированные мастера,
                        периодически проходят обучение новым технологиям.
                    </template>
                </Card>
                <Card class="card white" :img-src="ruler">
                    <template #shadow>
                        <div class="ruler-shadow" />
                    </template>
                    <template #short>Все прозрачно и честно</template>
                    <template #long>
                        Замер, консультация и выезд бесплатно. Распишем все до
                        последнего самореза. Акции на выбор.
                    </template>
                </Card>
                <Card class="card white" :img-src="clock">
                    <template #shadow>
                        <div class="common-shadow" />
                    </template>
                    <template #short>Пунктуальность</template>
                    <template #long>
                        Обговоренные сроки всегда соблюдаются.
                    </template>
                </Card>
                <Card class="card white" :img-src="heart">
                    <template #shadow>
                        <div class="common-shadow" />
                    </template>
                    <template #short>Сервисное обслуживание</template>
                    <template #long>
                        Всегда придем Вам на помощь, если Ваш натяжной потолок
                        поврежден, либо затоплен соседями.
                    </template>
                </Card>
            </template>
        </Shared>
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

    .black-text{
        color: black;
    }

    .yellow-highlight {
        background: linear-gradient(45deg, #feda82 0, #fec338 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;

        font-style: italic;
    }
}
</style>
