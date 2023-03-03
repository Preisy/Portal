<script setup lang="ts">
import AdvantageCard from "./AdvantageCard.vue";
import flat from "@/assets/images/advantages_page/flat.png";
import helmet from "@/assets/images/advantages_page/helmet.png";
import lens from "@/assets/images/advantages_page/lens.png";
import man from "@/assets/images/advantages_page/man.png";
import money from "@/assets/images/advantages_page/money.png";
import sofa from "@/assets/images/advantages_page/sofa.png";
</script>

<template>
    <div class="advantages-page">
        <div class="structure">
            <div class="description">
                <h1> Почему натяжной потолок <span class="yellow-highlight"> лучший </span>? </h1>
            </div>
            <div class="advantages-cards">
                <div class="flex-row">
                    <AdvantageCard :img-src="flat">
                        <template #short>Не крадет пространство</template>
                        <template #long>В отличие от Гипсокартона или ДСП-потолков,натяжным потолкам требуется совсем немного пространства.</template>
                    </AdvantageCard>
                    <AdvantageCard :img-src="money">
                        <template #short>Экономит деньги</template>
                        <template #long>Гораздо экономичнее установки любых других видов потолка.</template>
                    </AdvantageCard>
                    <AdvantageCard :img-src="man">
                        <template #short>Не впитывает запахи</template>
                        <template #long>А значит, вы можете курить тайком от мужа или от родных:)</template>
                    </AdvantageCard>
                </div> <!-- .flex-row -->
                <div class="flex-row">
                    <AdvantageCard :img-src="lens">
                        <template #short>Любые эксперименты</template>
                        <template #long>Может быть любых форм и цветов, многоуровневый, текстурный… Какой только пожелаете!</template>
                    </AdvantageCard>
                    <AdvantageCard :img-src="sofa">
                        <template #short>Эстетично выглядит</template>
                        <template #long>Конечно, со временем желтеют все потолки, но натяжной — самый стойкий!</template>
                    </AdvantageCard>
                    <AdvantageCard :img-src="helmet">
                        <template #short>Идеально ровный</template>
                        <template #long>Потолок не нужно ровнять, выносить тонны мусора и чихать от побелки. Идеально ровный потолок. Всегда!</template>
                    </AdvantageCard>
                </div> <!-- .flex-row -->
            </div> <!-- .advantages-cards -->
        </div><!-- .structure -->
    </div><!-- .advantages-page -->
</template>

<style scoped lang="scss">
.advantages-page {
    width: 100%;
    background: linear-gradient(180deg, #141414 0%, #212121 100%);
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 4rem;

    .flex-row {
        display: flex;
        gap: 4.5rem;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .description {
        font-size: 2.5rem;
        font-weight: 700;
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
