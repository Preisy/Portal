<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Button from "../general/button/Button.vue";
import { QCarousel, QBtn, QCarouselControl, Screen } from "quasar";

const slider = ref<QCarousel>();
const slide = ref('0');
const isMobile = computed(() => {
    // console.log(Screen);
    return Screen.lt.sm;
});
</script>

<template>
    <div class="structure">
        <div class="description">
            <h2>
                <slot name="description"></slot>
            </h2>
        </div>
        <div class="cards-holder">
            <QCarousel
                v-if="isMobile"
                swipeable
                infinite
                class="q-slider"
                ref="slider"
                transition-prev="fade"
                transition-next="fade"
                animated
                v-model="slide">
                    
                <slot name="body"></slot>
                

                <template #control>
                    <QCarouselControl
                        class="slider-controls"
                        position="bottom-right">
                        <QBtn
                            push
                            round
                            dense
                            color="orange"
                            text-color="black"
                            icon="arrow_right_alt"
                            class="custom-button left"
                            @click="slider?.previous()"></QBtn>
                        <QBtn
                            push
                            round
                            dense
                            color="orange"
                            text-color="black"
                            icon="arrow_right_alt"
                            class="custom-button"
                            @click="slider?.next()"></QBtn>
                    </QCarouselControl>
                </template>
            </QCarousel>

            <div v-if="!isMobile" class="cards">
                <slot name="body"></slot>
            </div>
        </div>
        <!-- .advantages-cards -->
    </div>
    <!-- .structure -->
</template>

<style scoped lang="scss">
.structure {
    padding-top: 3.5rem;
    padding-bottom: 4rem;
}

.description {
    color: #fff;
    margin-bottom: 2.4rem;
}

.cards-holder {
    position: relative;
    // width: fit-content;
    margin: 0 auto;

    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        column-gap: 1rem;
        row-gap: 2rem;

        width: 85%;

        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
        justify-items: center;
    }
    .q-slider{
        height: fit-content !important;
        width: 18rem;
        background: unset;
        margin: 0 auto;

        overflow: unset;
    }
    .slider-controls {
        --button-size: 2.0rem;
        --text-size: 1rem;
        --margin: -1rem;


        margin: 0 !important;
        height: fit-content !important;
        width: calc(
            100% + 2 * var(--button-size) + 2 * var(--margin)
        ) !important;
        display: flex !important;
        top: calc(50% - var(--button-size)/2) !important;
        left: calc(-1 * (var(--button-size) + var(--margin))) !important;
        justify-content: space-between !important;
        z-index: 2;

        .custom-button {
            background: linear-gradient(
                180deg,
                #feda82 0%,
                #fec338 100%
            ) !important;
        }
    }
}

@media (max-width: 400px) {
    .cards {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: auto;
    }
    .description {
        h2 {
            font-size: 2rem;
        }
    }
}
</style>

<style lang="scss">
.q-slider{
    .q-panel.scroll{
        overflow: hidden;
    }
}
</style>
