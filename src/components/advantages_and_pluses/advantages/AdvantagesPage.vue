<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Card from "../Card.vue";
import Clouds from "../../cloud/Clouds.vue";
import Button from "../../button/Button.vue";

import type { Nullable } from "@/types/types";

import flat from "@/assets/images/advantages_page/flat.png";
import helmet from "@/assets/images/advantages_page/helmet2.png";
import lens from "@/assets/images/advantages_page/lens.png";
import man from "@/assets/images/advantages_page/man.png";
import money from "@/assets/images/advantages_page/money.png";
import sofa from "@/assets/images/advantages_page/sofa.png";
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
    <div ref="root" class="advantages-page">
        <div class="structure">
            <div class="description">
                <h2>
                    Почему натяжной потолок
                    <span class="yellow-highlight"> лучший </span> ?
                </h2>
            </div>
            <div class="cards-holder">
                <div class="advantages-cards">
                    <Card
                        class="card black"
                        :style="style_index(0)"
                        :img-src="flat">
                        <template #short>Не крадет пространство</template>
                        <template #long>
                            В отличие от Гипсокартона или ДСП-потолков,натяжным
                            потолкам требуется совсем немного пространства.
                        </template>
                    </Card>
                    <Card
                        class="card black"
                        :style="style_index(1)"
                        :img-src="money">
                        <template #short>Экономит деньги</template>
                        <template #long>
                            Гораздо экономичнее установки любых других видов
                            потолка.
                        </template>
                    </Card>
                    <Card
                        class="card black"
                        :style="style_index(2)"
                        :img-src="man">
                        <template #short>Не впитывает запахи</template>
                        <template #long>
                            А значит, вы можете курить тайком от мужа или от
                            родных:)
                        </template>
                    </Card>
                    <Card
                        class="card black"
                        :style="style_index(3)"
                        :img-src="lens">
                        <template #short>Любые эксперименты</template>
                        <template #long>
                            Может быть любых форм и цветов, многоуровневый,
                            текстурный… Какой только пожелаете!
                        </template>
                    </Card>
                    <Card
                        class="card black"
                        :style="style_index(4)"
                        :img-src="sofa">
                        <template #short>Эстетично выглядит</template>
                        <template #long>
                            Конечно, со временем желтеют все потолки, но
                            натяжной — самый стойкий!
                        </template>
                    </Card>
                    <Card
                        class="card black"
                        :style="style_index(5)"
                        :img-src="helmet">
                        <template #short>Идеально ровный</template>
                        <template #long>
                            Потолок не нужно ровнять, выносить тонны мусора и
                            чихать от побелки. Идеально ровный потолок. Всегда!
                        </template>
                    </Card>
                </div>

                <div class="adaptive-controls">
                    <Button v-model="current" :delta="-1" class="button left">
                        <img
                            src="@/assets/images/advantages_page/left_arrow.svg"
                            alt="←" />
                    </Button>
                    <Button v-model="current" :delta="1" class="button right">
                        <img
                            src="@/assets/images/advantages_page/left_arrow.svg"
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
.advantages-page {
    position: relative;

    width: 100%;
    text-align: center;

    background: linear-gradient(180deg, #141414 0%, #212121 100%);

    padding-bottom: 8rem;

    .structure {
        padding-top: 3.5rem;
        padding-bottom: 4rem;
    }

    .description {
        color: #fff;
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

        .advantages-cards {
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

            .black{
                background: #2B2B2B;
                color: #fff;
            }
        }
    }

    .clouds {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1rem;
    }

    @media (max-width: 400px) {
        .clouds {
            display: none;
        }

        .advantages-cards {
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
