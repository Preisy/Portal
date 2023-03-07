<script setup lang="ts">
import ReviewCard from "./ReviewCard.vue";

import img_1 from "@/assets/images/plus_page/1.png";
import img_2 from "@/assets/images/plus_page/2.png";
import img_3 from "@/assets/images/plus_page/3.png";
import img_4 from "@/assets/images/plus_page/4.png";
</script>

<template>
    <div class="reviews-page">
        <div class="structure">
            <div class="description">
                <h3><span class="highlighted">Отзывы</span> клиентов</h3>
            </div>
            <div class="reviews-wrapper">
                <ReviewCard :img_src="img_1" creator="Михаил Барышников">
                    Повседневная практика показывает, что сложившаяся структура
                    организации в значительной степени обуславливает создание
                    соответствующий условий активизации. Задача организации,
                    вособенности же консультация с широким активом требуют
                    отнасанализа соответствующий условий активизации.
                </ReviewCard>

                <ReviewCard :img_src="img_2" creator="Юрий Степанов">
                    Повседневная практика показывает, что сложившаяся структура
                    организации в значительной степени обуславливает создание
                    соответствующий условий активизации. Задача организации,
                    вособенности же консультация с широким активом требуют
                    отнасанализа соответствующий условий активизации.
                </ReviewCard>

                <ReviewCard :img_src="img_3" creator="Дмитрий Казанцев">
                    Повседневная практика показывает, что сложившаяся структура
                    организации в значительной степени обуславливает создание
                    соответствующий условий активизации. Задача организации,
                    вособенности же консультация с широким активом требуют
                    отнасанализа соответствующий условий активизации.
                </ReviewCard>

                <ReviewCard :img_src="img_4" creator="Роман Петров">
                    Повседневная практика показывает, что сложившаяся структура
                    организации в значительной степени обуславливает создание
                    соответствующий условий активизации. Задача организации,
                    вособенности же консультация с широким активом требуют
                    отнасанализа соответствующий условий активизации.
                </ReviewCard>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.reviews-page {
    background: #1c1c1c;
    text-align: center;

    .structure{
        width: 62.5%;
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .description {
        color: #fff;
        margin-bottom: 3.5rem;
        .highlighted {
            background: linear-gradient(
                86.98deg,
                #feda82 22.54%,
                #fec338 105.96%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    }
}
</style>
