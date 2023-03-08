<script setup lang="ts">
import ReviewCard from "./ReviewCard.vue";

import example_img from "@/assets/images/reviews/review_example.png";
</script>

<template>
    <div class="reviews-page">
        <div class="structure">
            <div class="description">
                <h3><span class="highlighted">Отзывы</span> клиентов</h3>
            </div>
            <div class="reviews-wrapper">
                <ReviewCard
                    class="review"
                    :img_src="example_img"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>

                <ReviewCard
                    class="review"
                    :img_src="example_img"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>

                <ReviewCard
                    class="review"
                    :img_src="example_img"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>

                <ReviewCard
                    class="review"
                    :img_src="example_img"
                    header="Натяжной потолок в гостиной">
                    Наши натяжные потолки отличаются замечательным качеством и
                    долговечностью. Этот потолок установлен в гостиной и делает
                    ее уютной и нежной.
                </ReviewCard>
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
        width: 80%;
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

    .description {
        color: #fff;
        margin-bottom: 3.5rem;
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

    .reviews-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 2rem; //min gap. main gap made by justify
        justify-content: space-between;
        justify-items: center;

        .review {
            width: 33rem;
        }
    }
}
</style>
