<script setup lang="ts">
import { computed, ref, watch } from "vue";
import Button from "../general/button/Button.vue";
import { QCarousel, QBtn, QCarouselControl, Screen } from "quasar";

const slider = ref<QCarousel>();
const slide = ref(1);
const isMobile = computed(()=>{
    console.log(Screen)
    return Screen.lt.sm;
});

watch(slide, (newVal) => {
    // TODO:
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
                ref="slider"
                transition-prev="fade"
                transition-next="fade"
                animated
                v-model="slide">
                <slot name="body"></slot>

                <!-- <template #control>
                    <QCarouselControl class="adaptive-controls">
                        <QBtn
                            @click="slider?.previous()"
                            class="button left"
                            icon="arrow_left">
                        </QBtn>
                        <QBtn
                            @click="slider?.next()"
                            class="button right"
                            icon="arrow_right">
                        </QBtn>
                    </QCarouselControl>
                </template> -->
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

.adaptive-controls {
    display: none;
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
}

@media (max-width: 400px) {
    .cards {
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
</style>
