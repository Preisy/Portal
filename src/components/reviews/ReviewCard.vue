<script setup lang="ts">
import Rate from "./Rate.vue";
const props = defineProps({
    img_src: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        default: 5,
    },
    header: {
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
            <div class="rate">
                <Rate :rate="rate"></Rate>
            </div>
            <div class="review-header">
                <h4>
                    {{ header }}
                </h4>
            </div>
            <div class="review-content">
                <p> <slot></slot> </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.review-card {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #373737;
    background: #fff;
    border-radius: 1.5rem;
    padding: 2rem;

    text-align: left;
    font-weight: 400;

    .icon {
        img {
            width: 100%;
        }
        margin-bottom: 1.25rem;
    }

    .rate {
        margin-bottom: 1.25rem;
    }
    
    // .review-content {
    //     font-size: 0.95rem;
    //     line-height: 1.375rem;

    //     margin-bottom: 1.7rem;
    // }

    .review-header {
        font-size: 1.25rem;

        margin-bottom: 0.75rem;
    }

    margin-bottom: 3rem;
}
</style>
