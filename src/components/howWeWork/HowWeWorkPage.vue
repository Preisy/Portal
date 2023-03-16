<script setup lang="ts">
import { computed, watch } from "vue";
import { Screen } from "quasar";

import HowWorkCard from "./HowWorkCard.vue";

import smile_guy_lg from "@/assets/images/howWeWorks/smileGuy.png";
import ruler_lg from "@/assets/images/howWeWorks/ruler.png";
import flat_lg from "@/assets/images/howWeWorks/flat.png";

import smile_guy_sm from "@/assets/images/howWeWorks/smileGuyMobile.png";
import ruler_sm from "@/assets/images/howWeWorks/rulerMobile.png";
import flat_sm from "@/assets/images/howWeWorks/flatMobile.png";

const smile = computed(() => {
    return Screen.lt.sm ? smile_guy_sm : smile_guy_lg;
});
const ruler = computed(() => {
    return Screen.lt.sm ? ruler_sm : ruler_lg;
});
const flat = computed(() => {
    return Screen.lt.sm ? flat_sm : flat_lg;
});
</script>

<template>
    <div class="how-we-do-it">
        <div class="structure">
            <div class="description">
                <h2>Как мы работаем</h2>
            </div>
            <div class="cards">
                <HowWorkCard class="card" :num="1" :img_src="smile">
                    Делаете расчёт у нас на сайте или по телефону всего за 5
                    минут
                </HowWorkCard>
                <HowWorkCard class="card" :num="2" :img_src="ruler">
                    Мы приезжаем к вам на бесплатный замер и выбор материала.
                </HowWorkCard>
                <HowWorkCard class="card" :num="3" :img_src="flat">
                    Всего через пару дней у вас установлен замечательный
                    потолок.
                </HowWorkCard>
            </div>
        </div>
        <!-- <img src="@/assets/images/howWeWorks/background.png" alt="" class="background"> -->
    </div>
</template>

<style scoped lang="scss">
$screen-sm: 400px;
$screen-lg: 1440px;
$screen-xl: 1920px;

.how-we-do-it {
    text-align: center;
    box-sizing: border-box;
    padding-top: 3rem;
    padding-bottom: 3rem;

    .structure {
        position: relative;
        z-index: 1;
    }
    .description {
        margin-bottom: 5.5rem;
    }

    .cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        @media (max-width: $screen-sm) {
            flex-direction: column;
        }
        .card {
            margin: 0 3rem;
            @media (max-width: $screen-sm) {
                margin-bottom: 5rem;
            }
        }
    }
}
</style>
