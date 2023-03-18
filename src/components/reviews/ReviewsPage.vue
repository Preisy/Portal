<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import ReviewCard from "./ReviewCard.vue";
import type { Nullable } from "@/types/types";
import review_1 from "@/assets/images/reviews/review_1.png";
import review_2 from "@/assets/images/reviews/review_2.png";
import review_3 from "@/assets/images/reviews/review_3.png";
import review_4 from "@/assets/images/reviews/review_4.png";

// import right_arrow from "@/assets/svg/result-arrow.svg"

const debug = false;

const placeholder = ref<HTMLElement>();
const placeholder_rect = computed(() => {
    return placeholder.value?.getBoundingClientRect();
});
const phantoms = computed(() => {
    const all = placeholder.value?.childNodes;
    const result = new Array();
    all?.forEach((child) => {
        const element = child as HTMLElement;
        if (element.classList.contains("phantom")) result.push(element);
    });
    return result;
});
const reviews = computed(() => {
    const all = placeholder.value?.childNodes;
    const result = new Array();
    all?.forEach((child) => {
        const element = child as HTMLElement;
        if (element.classList.contains("review")) result.push(element);
    });
    return result;
});

const index = ref(0);
function position(num: number) {
    if (!placeholder_rect.value || !placeholder.value) return;
    const pos_index =
        (reviews.value.length + num + index.value) % reviews.value.length;

    const isShown = 0 <= pos_index && pos_index < phantoms.value.length;
    const place = phantoms.value[pos_index] as HTMLElement;

    if (!place)
        return (
            `visibility: ${isShown ? "visible" : "hidden"};` +
            `${isShown ? "" : "transition: 0s all"}`
        );

    const placeholder_pos = placeholder.value?.getBoundingClientRect();
    const place_pos = place.getBoundingClientRect();
    return (
        `left: ${place_pos.left - placeholder_pos.left}px;` +
        `top: ${place_pos.top - placeholder_pos.top}px;` +
        `visibility: ${isShown ? "visible" : "hidden"};` +
        `${isShown ? "" : "transition: 0s all"}`
    );
}

window.addEventListener("scroll", ()=>{
    index.value += 1;
    index.value -= 1;
})

function change(num: number) {
    index.value = (index.value + num) % reviews.value?.length;
}
</script>

<template>
    <div class="reviews-page">
        <div class="structure">
            <div class="description">
                <h3><span class="highlighted">Отзывы</span> клиентов</h3>
            </div>
            <div ref="placeholder" class="placeholder">
                <div class="phantom up-bound"></div>
                <div class="phantom pos-rt"></div>
                <div class="phantom pos-lt"></div>
                <div class="phantom pos-lb"></div>
                <div class="phantom pos-rb"></div>
                <div class="phantom right-bound"></div>

                <ReviewCard
                    :style="position(0)"
                    class="review"
                    :img_src="review_1"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(1)"
                    class="review"
                    :class="debug ? 'crimson' : ''"
                    :img_src="review_2"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(2)"
                    class="review"
                    :class="debug ? 'rebeccapurple' : ''"
                    :img_src="review_3"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(3)"
                    class="review"
                    :class="debug ? 'orange' : ''"
                    :img_src="review_4"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(4)"
                    class="review"
                    :class="debug ? 'cyan' : ''"
                    :img_src="review_1"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(5)"
                    class="review"
                    :class="debug ? 'green' : ''"
                    :img_src="review_2"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(6)"
                    class="review"
                    :class="debug ? 'orange' : ''"
                    :img_src="review_3"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
                <ReviewCard
                    :style="position(7)"
                    class="review"
                    :class="debug ? 'orange' : ''"
                    :img_src="review_4"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
            </div>
            <div class="controls">
                <button class="btn left" @click="change(-1)">
                    <img src="@/assets/svg/left_arrow.svg" alt="" />
                </button>
                <button class="btn right" @click="change(1)">
                    <img src="@/assets/svg/left_arrow.svg" alt="" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.reviews-page {
    background: #1c1c1c;
    text-align: center;

    padding-top: 6rem;

    .structure {
        padding-top: 8rem;
        padding-bottom: 6rem;
    }

    .description {
        color: #fff;
        margin-bottom: 3.5rem;
        position: relative;
        z-index: 1;

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

            &::selection {
                -webkit-text-fill-color: #fff;
            }
        }
    }

    .review {
        position: absolute;
        width: 32rem;
        transition: 0.6s;
    }

    .placeholder {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 2rem;
        column-gap: 2rem; //min gap. main gap made by justify
        justify-content: space-between;
        justify-items: center;

        width: fit-content;
        margin: 0 auto;

        position: relative;
        overflow: hidden;

        .phantom {
            width: 32rem;
            height: 34rem;
        }

        .up-bound {
            position: absolute;
            top: -36rem;
            right: 0;
        }
        .pos-lt {
            grid-area: 1 / 1 / 2 / 2;
        }
        .pos-rt {
            grid-area: 1 / 2 / 2 / 3;
        }
        .pos-lb {
            grid-area: 2 / 1 / 3 / 2;
        }
        .pos.rb {
            grid-area: 2 / 2 / 3 / 3;
        }
        .right-bound {
            position: absolute;
            bottom: 0;
            right: -34rem;
        }
    }

    .controls {
        --btn-size: 3.75rem;

        display: flex;
        width: 90%;
        margin: 0 auto;
        justify-content: flex-end;

        .btn {
            width: var(--btn-size);
            height: var(--btn-size);
            border-radius: 100%;

            border: 0;
            background: linear-gradient(180deg, #feda82 0%, #fec338 100%);

            margin-right: 2rem;

            img {
                width: 1.5rem;
            }
            &.right {
                margin-right: 0;
            }
            &.right img {
                transform: rotateZ(180deg);
            }
        }
    }
}

.crimson {
    background: #dc143c77;
}
.rebeccapurple {
    background: #66339977;
}
.orange {
    background: #ffa50077;
}
.cyan {
    background: #00ffff77;
}
.green {
    background: #00a00077;
}
</style>
