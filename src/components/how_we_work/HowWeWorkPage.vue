<script setup lang="ts">
import { ref } from "vue";

import HowWorkCard from "./HowWorkCard.vue";
import BgAttachImg from "../general/BgAttachImg/BgAttachImg.vue";

import smile_guy from "@/assets/images/how_we_works/smile_guy.png";
import ruler from "@/assets/images/how_we_works/ruler.png";
import flat from "@/assets/images/how_we_works/flat.png";
import tapee from "@/assets/images/how_we_works/tapee.png";

</script>

<template>
    <div ref="test" class="test"></div>
    <div class="how-we-do-it">
        <div class="structure">
            <div class="description">
                <h2>Как мы работаем</h2>
            </div>
            <div class="cards">
                <HowWorkCard class="card" :num="1" :img_src="smile_guy">
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
        <BgAttachImg class="tapee" :img_src="tapee"></BgAttachImg>
        <!-- <img src="@/assets/images/how_we_works/background.png" alt="" class="background"> -->
    </div>
</template>

<style scoped lang="scss">
.how-we-do-it {
    text-align: center;
    box-sizing: border-box;
    padding-top: 3rem;
    padding-bottom: 3rem;

    background: url(/src/assets/images/how_we_works/background.png) no-repeat,
    linear-gradient(180deg, #ffffff 0%, #e8e8e8 98.96%);

    .structure {
        position: relative;
        z-index: 1;
    }
    .description {
        margin-bottom: 5.5rem;
    }

    .cards {
        display: flex;
        justify-content: center;

        height: 46vh;

        .card{
            margin: 0 3rem;
        }
    }
}
.tapee {
    position: absolute;
    top: -6.6%;
    right: 0.7rem;
    height: 470px;
    transform: rotateZ(0deg);
}
</style>
