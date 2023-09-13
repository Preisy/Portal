<script setup lang="ts">
import { ref } from "vue";
import type { Nullable } from "@/types/types";
import { QCarouselSlide } from "quasar";
import SharedQuasar from "../sixCardsGridLayout/SharedQuasar.vue";

import Card from "../sixCardsGridLayout/Card.vue";

import flat from "@/assets/images/advantagesPage/flat.png";
import helmet from "@/assets/images/advantagesPage/helmet2.png";
import man from "@/assets/images/advantagesPage/man.png";
import money from "@/assets/images/advantagesPage/money.png";
import sofa from "@/assets/images/advantagesPage/sofa.png";
import lens from "@/assets/images/advantagesPage/lens.png";

const root = ref<HTMLElement>();
const current = ref(0);
</script>

<template>
    <div ref="root" class="advantages-page">
        <SharedQuasar>
            <template #description>
                Почему натяжной потолок
                <span class="yellow-highlight"> идеальное решение </span> ?
            </template>

            <template #body>
                <QCarouselSlide class="slide" name="0">
                    <Card class="card black" :img-src="flat">
                        <template #short>Не крадет пространство</template>
                        <template #long>
                            В отличие от Гипсокартона или ДСП-потолков,натяжным
                            потолкам требуется совсем немного пространства.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="1">
                    <Card class="card black" :img-src="money">
                        <template #short>Экономит деньги</template>
                        <template #long>
                            Гораздо экономичнее установки любых других видов
                            потолка.
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="2">
                    <Card class="card black" :img-src="man">
                        <template #short>Не впитывает запахи</template>
                        <template #long>
                            А значит, вы можете курить тайком от мужа или от
                            родных:)
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="3">
                    <Card class="card black" :img-src="lens">
                        <template #short>Любые эксперименты</template>
                        <template #long>
                            Может быть любых форм и цветов, многоуровневый,
                            текстурный… Какой только пожелаете!
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="4">
                    <Card class="card black" :img-src="sofa">
                        <template #short>Эстетично выглядит</template>
                        <template #long>
                            Конечно, со временем желтеют все потолки, но
                            натяжной — самый стойкий!
                        </template>
                    </Card>
                </QCarouselSlide>
                <QCarouselSlide class="slide" name="5">
                    <Card class="card black" :img-src="helmet">
                        <template #short>Идеально ровный</template>
                        <template #long>
                            Потолок не нужно ровнять, выносить тонны мусора и
                            чихать от побелки. Идеально ровный потолок. Всегда!
                        </template>
                    </Card>
                </QCarouselSlide>
            </template>
        </SharedQuasar>
    </div>
</template>

<style scoped lang="scss">
.advantages-page {
    position: relative;
    width: 100%;
    text-align: center;
    background: linear-gradient(180deg, #141414 0%, #212121 100%);
    padding-bottom: 8rem;
    
    @media (max-width: $screen-md) {
        padding-bottom: 10rem;
        // padding-bottom: 0;
    }

    .black {
        background: #2b2b2b;
        color: #fff;
    }
    .yellow-highlight {
        background: linear-gradient(45deg, #feda82 0, #fec338 100%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;

        font-style: italic;
    }

    .yellow-highlight::selection {
        -webkit-text-fill-color: #fff;
    }
    .slide {
        min-width: 175px;
        width: 100%;
        padding: 0 !important;

        .card {
            height: 100%;
        }
    }
}
</style>
