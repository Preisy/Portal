<script setup lang="ts">
defineProps({
    num: Number,
    img_src: String,
});
</script>

<template>
    <div class="how-we-work-card">
        <div class="circle-num">{{ num }}</div>
        <div class="card-body">
            <div class="image-holder">
                <img :src="img_src" alt="" />
            </div>
            <div class="description">
                <p><slot></slot></p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.how-we-work-card {
    height: 100%;
    position: relative;

    .circle-num {
        --size: 5rem;
        --outline-size: 1rem;

        position: absolute;
        z-index: 1;
        top: calc(var(--size) / 2 * -1);
        left: calc(var(--size) / 2 * -1);

        width: calc(var(--size) - var(--outline-size));
        height: calc(var(--size) - var(--outline-size));
        border-radius: 100%;

        line-height: calc(var(--size) - var(--outline-size));
        text-align: center;

        border: 2px solid #feda82;
        outline: var(--outline-size) solid #fff;
        background: #fff;
    }
    .card-body {
        height: 100%;
        position: relative;
        .image-holder {
            height: 100%;
            img {
                height: 100%;
            }
        }
        .description {
            text-align: left;
            position: absolute;
            bottom: 1.9rem;

            p {
                color: #fff;
                padding: 0 1.25rem;
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }
}
</style>
