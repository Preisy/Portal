<script setup lang="ts">
import { ref } from "vue";
import type { Nullable } from "@/types/types";
import { QCarouselSlide } from "quasar";
import Shared from "./Shared.vue";

import Card from "./Card.vue";

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
        <Shared>
            <template #description>
                Почему натяжной потолок
                <span class="yellow-highlight"> идеальное решение </span> ?
            </template>

            <template #cards>
                    <Card class="card black" :img-src="flat">
                        <template #short>Не крадет пространство</template>
                        <template #long>
                            В отличие от Гипсокартона или ДСП-потолков,натяжным
                            потолкам требуется совсем немного пространства.
                        </template>
                    </Card>
                    <Card class="card black" :img-src="money">
                        <template #short>Экономит деньги</template>
                        <template #long>
                            Гораздо экономичнее установки любых других видов
                            потолка.
                        </template>
                    </Card>
                    <Card class="card black" :img-src="man">
                        <template #short>Не впитывает запахи</template>
                        <template #long>
                            А значит, вы можете курить тайком от мужа или от
                            родных:)
                        </template>
                    </Card>
                    <Card class="card black" :img-src="lens">
                        <template #short>Любые эксперименты</template>
                        <template #long>
                            Может быть любых форм и цветов, многоуровневый,
                            текстурный… Какой только пожелаете!
                        </template>
                    </Card>
                    <Card class="card black" :img-src="sofa">
                        <template #short>Эстетично выглядит</template>
                        <template #long>
                            Конечно, со временем желтеют все потолки, но
                            натяжной — самый стойкий!
                        </template>
                    </Card>
                    <Card class="card black" :img-src="helmet">
                        <template #short>Идеально ровный</template>
                        <template #long>
                            Потолок не нужно ровнять, выносить тонны мусора и
                            чихать от побелки. Идеально ровный потолок. Всегда!
                        </template>
                    </Card>
            </template>
        </Shared>
    </div>
</template>

<style scoped lang="scss">
.advantages-page {
    position: relative;
    width: 100%;
    text-align: center;
    background: linear-gradient(180deg, #141414 0%, #212121 100%);
    padding-bottom: 8rem;
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
}
</style>
