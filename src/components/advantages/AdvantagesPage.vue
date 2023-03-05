<script setup lang="ts">
import AdvantageCard from "./AdvantageCard.vue";
import flat from "@/assets/images/advantages_page/flat.png";
import helmet from "@/assets/images/advantages_page/helmet2.png";
import lens from "@/assets/images/advantages_page/lens.png";
import man from "@/assets/images/advantages_page/man.png";
import money from "@/assets/images/advantages_page/money.png";
import sofa from "@/assets/images/advantages_page/sofa.png";
import Clouds from "../cloud/Clouds.vue";
</script>

<template>
    <div class="advantages-page">
        <div class="structure">
            <div class="description">
                <h2>
                    Почему натяжной потолок
                    <span class="yellow-highlight"> лучший </span> ?
                </h2>
            </div>
            <div class="advantages-cards">
                <AdvantageCard :img-src="flat">
                    <template #short>Не крадет пространство</template>
                    <template #long
                        >В отличие от Гипсокартона или ДСП-потолков,натяжным
                        потолкам требуется совсем немного
                        пространства.</template
                    >
                </AdvantageCard>
                <AdvantageCard :img-src="money">
                    <template #short>Экономит деньги</template>
                    <template #long
                        >Гораздо экономичнее установки любых других видов
                        потолка.</template
                    >
                </AdvantageCard>
                <AdvantageCard :img-src="man">
                    <template #short>Не впитывает запахи</template>
                    <template #long
                        >А значит, вы можете курить тайком от мужа или от
                        родных:)</template
                    >
                </AdvantageCard>
                <AdvantageCard :img-src="lens">
                    <template #short>Любые эксперименты</template>
                    <template #long
                        >Может быть любых форм и цветов, многоуровневый,
                        текстурный… Какой только пожелаете!</template
                    >
                </AdvantageCard>
                <AdvantageCard :img-src="sofa">
                    <template #short>Эстетично выглядит</template>
                    <template #long
                        >Конечно, со временем желтеют все потолки, но натяжной —
                        самый стойкий!</template
                    >
                </AdvantageCard>
                <AdvantageCard :img-src="helmet">
                    <template #short>Идеально ровный</template>
                    <template #long
                        >Потолок не нужно ровнять, выносить тонны мусора и
                        чихать от побелки. Идеально ровный потолок.
                        Всегда!</template
                    >
                </AdvantageCard>
            </div>
            <!-- .advantages-cards -->
        </div>
        <Clouds></Clouds>
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

    overflow-x: hidden;

    .structure {
        padding-top: 3.5rem;
        padding-bottom: 4rem;
    }

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

}
</style>
