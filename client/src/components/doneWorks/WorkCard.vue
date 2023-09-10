<script setup lang="ts">
import Button from "@/components/general/button/Button.vue";
import { QCarouselSlide } from "quasar";
const props = defineProps<{
    name: string,
    img_src: string,
}>();
</script>

<template>
    <QCarouselSlide :name="props.name" class="card">
        <div class="img-holder">
            <img :src="props.img_src" />
        </div>
        <div class="details">
            <div class="head">
                <h3>
                    <slot name="head"></slot>
                </h3>
            </div>
            <div class="body">
                <p>
                    <slot name="body"></slot>
                </p>
            </div>
            <div class="btn-holder">
                <Button class="btn" href="#">Хочу такой же!</Button>
            </div>
        </div>
    </QCarouselSlide>
</template>

<style scoped lang="scss">
.card {
    display: flex;

    box-sizing: border-box;
    padding: 2rem;

    border: 0.0625rem solid #ececec;
    border-radius: 1.25rem;

    @media (max-width: 730px) {
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
    }

    @media (max-width: $screen-sm) {
        width: 100%;
    }

    .img-holder {
        img {
            user-select: none;
            width: 32rem;
            border-radius: 2rem;
            pointer-events: none;

            @media (max-width: 730px) {
                width: 100%;
            }
        }
    }

    .details {
        box-sizing: border-box;
        padding: 0 2rem;
        position: relative;

        text-align: left;

        @media (max-width: 730px) {
            padding: 0;
        }

        .head {
            margin-bottom: 0.5rem;
            @media (max-width: 730px) {
                h3 {
                    font-size: 2rem;
                    margin-bottom: 1.2rem;
                }
            }
        }

        .btn-holder {
            position: absolute;
            bottom: 0;

            @media (max-width: 730px) {
                position: unset;
                margin-top: 2rem;
                margin-bottom: 1rem;
            }

            .btn {
                padding: 1.4rem 3.5rem;
            }
        }
    }
}
</style>
