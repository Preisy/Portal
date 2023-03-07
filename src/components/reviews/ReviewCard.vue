<script setup lang="ts">
import Rate from './Rate.vue';
const props = defineProps({
    img_src: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        default: 5,
    },
    creator: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="review-card">
        <div class="icon">
            <img :src="img_src" alt="" />
        </div>
        <div class="review">
            <div class="review-content">
                <slot></slot>
            </div>
            <div class="review-creator">
                <p>{{ creator }}</p>
            </div>
            <div class="rate">
                <Rate :rate="rate"></Rate>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.review-card {
    display: flex;
    align-items: center;

    color: #fff;
    text-align: left;
    font-weight: 400;

    .icon {
        margin-right: 3rem;
        img {
            --size: 9.5rem;
            width: var(--size);
            height: var(--size);
        }
    }
    .review-content {
        font-size: 0.95rem;
        line-height: 1.375rem;

        margin-bottom: 1.7rem;
    }

    .review-creator {
        font-size: 1.25rem;

        margin-bottom: 1.5rem;
    }

    margin-bottom: 3rem;
}
</style>
